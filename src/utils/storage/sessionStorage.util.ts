export interface FormDraft {
  formId: string;
  data: Record<string, unknown>;
  timestamp: number;
  expiresAt: number;
}

const STORAGE_KEYS = {
  FORM_DRAFTS: 'healthai_form_drafts',
  WIZARD_STATE: 'healthai_wizard_state',
} as const;

const DRAFT_EXPIRY = 2 * 60 * 60 * 1000; // 2 hours

class SessionStorageService {
  /**
   * Save form draft with auto-expiry
   */
  saveFormDraft(formId: string, data: Record<string, unknown>): void {
    const draft: FormDraft = {
      formId,
      data,
      timestamp: Date.now(),
      expiresAt: Date.now() + DRAFT_EXPIRY,
    };

    const drafts = this.getAllDrafts();
    drafts[formId] = draft;

    sessionStorage.setItem(STORAGE_KEYS.FORM_DRAFTS, JSON.stringify(drafts));
  }

  /**
   * Get form draft if not expired
   */
  getFormDraft(formId: string): Record<string, unknown> | null {
    const drafts = this.getAllDrafts();
    const draft = drafts[formId];

    if (!draft) return null;

    // Check expiry
    if (Date.now() > draft.expiresAt) {
      this.deleteFormDraft(formId);
      return null;
    }

    return draft.data;
  }

  /**
   * Delete specific form draft
   */
  deleteFormDraft(formId: string): void {
    const drafts = this.getAllDrafts();
    delete drafts[formId];
    sessionStorage.setItem(STORAGE_KEYS.FORM_DRAFTS, JSON.stringify(drafts));
  }

  /**
   * Clear all session storage
   */
  clearAll(): void {
    sessionStorage.clear();
  }

  private getAllDrafts(): Record<string, FormDraft> {
    const stored = sessionStorage.getItem(STORAGE_KEYS.FORM_DRAFTS);
    if (!stored) return {};

    try {
      return JSON.parse(stored);
    } catch {
      return {};
    }
  }
}

export const sessionStorageService = new SessionStorageService();
