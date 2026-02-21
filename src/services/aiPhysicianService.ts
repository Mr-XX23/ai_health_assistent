/**
 * AI Physician Service - Vaidya Integration
 * Handles communication with the Vaidya AI assistant backend
 * Vaidya is a multi-agent supervisor that routes to specialized health agents
 */

const AI_PHYSICIAN_BASE_URL =
  import.meta.env.VITE_AI_PHYSICIAN_URL || 'http://localhost:8005';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

export interface StartSessionResponse {
  session_id: string;
  message: string;
  status: string;
}

export interface SessionDetails {
  session_id: string;
  status: string;
  messages: Message[];
  symptoms_collected?: {
    chief_complaint?: string;
    location?: string;
    duration?: string;
    severity?: string;
    triggers?: string;
    associated_symptoms?: string[];
  };
  triage_result?: {
    classification?: string;
    red_flags?: string[];
    differential_diagnosis?: string[];
    recommendations?: string[];
  };
}

export interface SessionSummary {
  session_id: string;
  created_at: string;
  updated_at: string;
  status: string;
  message_count: number;
  preview?: string | null;
}

export interface UserSessionsResponse {
  total: number;
  limit: number;
  offset: number;
  sessions: SessionSummary[];
}

/**
 * Start a new Vaidya session
 */
export const startSymptomCheckSession = async (): Promise<StartSessionResponse> => {
  try {
    const response = await fetch(`${AI_PHYSICIAN_BASE_URL}/api/v1/vaidya/start`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include cookies for JWT auth
    });

    if (!response.ok) {
      throw new Error(`Failed to start session: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error starting Vaidya session:', error);
    throw error;
  }
};

/**
 * Send a message and receive streaming response
 */
export const sendMessageStream = async (
  sessionId: string,
  message: string,
  onToken: (token: string) => void,
  onComplete: () => void,
  onError: (error: string) => void,
  onStatus?: (status: string) => void
): Promise<void> => {
  try {
    const response = await fetch(`${AI_PHYSICIAN_BASE_URL}/api/v1/vaidya/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        session_id: sessionId,
        message: message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send message: ${response.statusText}`);
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      throw new Error('Response body is not readable');
    }

    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      // Decode chunk and add to buffer
      buffer += decoder.decode(value, { stream: true });
      
      // Split by double newline to get complete SSE messages
      const messages = buffer.split('\n\n');
      
      // Keep the last incomplete message in buffer
      buffer = messages.pop() || '';

      for (const message of messages) {
        const lines = message.split('\n');
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.substring(6));

              if (data.type === 'token') {
                onToken(data.content);
              } else if (data.type === 'status') {
                // Emit status message if callback provided
                if (onStatus) {
                  onStatus(data.content);
                }
              } else if (data.type === 'complete') {
                onComplete();
              } else if (data.type === 'error') {
                onError(data.message);
              }
            } catch (e) {
              console.error('Error parsing SSE data:', e, 'Line:', line);
            }
          }
        }
      }
    }
  } catch (error) {
    console.error('Error sending message:', error);
    onError(error instanceof Error ? error.message : 'Unknown error');
  }
};

/**
 * Get session details
 */
export const getSessionDetails = async (sessionId: string): Promise<SessionDetails> => {
  try {
    const response = await fetch(
      `${AI_PHYSICIAN_BASE_URL}/api/v1/vaidya/session/${sessionId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to get session details: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting session details:', error);
    throw error;
  }
};

/**
 * Load a historical session including all messages
 */
export const loadSession = async (sessionId: string): Promise<SessionDetails> => {
  return getSessionDetails(sessionId);
};

/**
 * Delete a session by ID
 */
export const deleteSession = async (sessionId: string): Promise<void> => {
  try {
    const response = await fetch(
      `${AI_PHYSICIAN_BASE_URL}/api/v1/vaidya/session/${sessionId}`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to delete session: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error deleting session:', error);
    throw error;
  }
};

/**
 * Get paginated list of sessions for the current authenticated user
 */
export const getUserSessions = async (
  limit = 20,
  offset = 0
): Promise<UserSessionsResponse> => {
  try {
    const response = await fetch(
      `${AI_PHYSICIAN_BASE_URL}/api/v1/vaidya/sessions?limit=${limit}&offset=${offset}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to get sessions: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting user sessions:', error);
    throw error;
  }
};
