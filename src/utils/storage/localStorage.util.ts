export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: 'en' | 'es' | 'fr';
  lastVisitedPage: string;
  notificationsEnabled: boolean;
  compactView: boolean;
}

const STORAGE_KEYS = {
  PREFERENCES: 'healthai_preferences',
} as const;

class LocalStorageService {
  /**
   * Get user preferences with defaults
   */
  getPreferences(): UserPreferences {
    const stored = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
    if (!stored) {
      return this.getDefaultPreferences();
    }

    try {
      return JSON.parse(stored) as UserPreferences;
    } catch {
      console.warn('Failed to parse preferences, using defaults');
      return this.getDefaultPreferences();
    }
  }

  /**
   * Update specific preference fields
   */
  updatePreferences(updates: Partial<UserPreferences>): void {
    const current = this.getPreferences();
    const updated = { ...current, ...updates };
    localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(updated));

    // Dispatch event for cross-tab sync
    window.dispatchEvent(new CustomEvent('preferences:updated', { detail: updated }));
  }

  /**
   * Clear all preferences
   */
  clearPreferences(): void {
    localStorage.removeItem(STORAGE_KEYS.PREFERENCES);
  }

  private getDefaultPreferences(): UserPreferences {
    return {
      theme: 'system',
      language: 'en',
      lastVisitedPage: '/',
      notificationsEnabled: true,
      compactView: false,
    };
  }
}

export const localStorageService = new LocalStorageService();
