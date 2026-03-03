import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface HealthAIDB extends DBSchema {
  medicalRecords: {
    key: string;
    value: {
      id: string;
      userId: string;
      recordType: string;
      data: unknown;
      lastModified: number;
      syncStatus: 'synced' | 'pending' | 'conflict';
    };
    indexes: { 'by-userId': string; 'by-recordType': string };
  };
  offlineQueue: {
    key: string;
    value: {
      id: string;
      endpoint: string;
      method: 'GET' | 'POST' | 'PUT' | 'DELETE';
      data: unknown;
      timestamp: number;
      retryCount: number;
    };
  };
}

class IndexedDBService {
  private db: IDBPDatabase<HealthAIDB> | null = null;
  private readonly DB_NAME = 'HealthAI_DB';
  private readonly DB_VERSION = 1;

  /**
   * Initialize database connection
   */
  async init(): Promise<void> {
    if (this.db) return;

    this.db = await openDB<HealthAIDB>(this.DB_NAME, this.DB_VERSION, {
      upgrade(db) {
        // Medical records store
        if (!db.objectStoreNames.contains('medicalRecords')) {
          const recordStore = db.createObjectStore('medicalRecords', {
            keyPath: 'id',
          });
          recordStore.createIndex('by-userId', 'userId');
          recordStore.createIndex('by-recordType', 'recordType');
        }

        // Offline queue store
        if (!db.objectStoreNames.contains('offlineQueue')) {
          db.createObjectStore('offlineQueue', { keyPath: 'id' });
        }
      },
    });
  }

  /**
   * Store medical record
   */
  async saveMedicalRecord(record: {
    id: string;
    userId: string;
    recordType: string;
    data: unknown;
  }): Promise<void> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    await this.db.put('medicalRecords', {
      ...record,
      lastModified: Date.now(),
      syncStatus: 'pending',
    });
  }

  /**
   * Get medical records by user ID
   */
  async getMedicalRecordsByUser(userId: string): Promise<unknown[]> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const records = await this.db.getAllFromIndex('medicalRecords', 'by-userId', userId);
    return records.map((r) => r.data);
  }

  /**
   * Clear all user data (on logout)
   */
  async clearUserData(userId: string): Promise<void> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const tx = this.db.transaction('medicalRecords', 'readwrite');
    const index = tx.store.index('by-userId');
    const records = await index.getAllKeys(userId);

    await Promise.all(records.map((key) => tx.store.delete(key)));
    await tx.done;
  }

  /**
   * Add to offline queue
   */
  async addToOfflineQueue(request: {
    id: string;
    endpoint: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data: unknown;
  }): Promise<void> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    await this.db.add('offlineQueue', {
      ...request,
      timestamp: Date.now(),
      retryCount: 0,
    });
  }
}

export const indexedDBService = new IndexedDBService();
