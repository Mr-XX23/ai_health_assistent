import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import { authService } from '../services/authService';
import type { User } from '../services/authService';
import { localStorageService } from '../utils/storage/localStorage.util';
import { sessionStorageService } from '../utils/storage/sessionStorage.util';
import { indexedDBService } from '../utils/storage/indexedDB.util';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<{
    success: boolean;
    message?: string;
    user?: User;
  }>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  hasRole: (role: User['role'] | User['role'][]) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook for clean consumption
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isLoggingOut = React.useRef(false);

  /**
   * Check authentication on mount
   * Always validates session with the backend via HTTP-only cookies.
   * HTTP-only cookies persist across tabs and browser restarts, so we must
   * always call the API — never short-circuit on a sessionStorage flag alone.
   */
  const checkAuth = useCallback(async () => {
    setIsLoading(true);
    try {
      // Always validate with the backend; cookies are the source of truth.
      // sessionStorage is cleared on new tabs / browser restarts, but cookies are not.
      const { isValid, user: apiUser } = await authService.validateSession();

      if (isValid && apiUser) {
        // Restore user from API response and keep sessionStorage flag in sync
        setUser(apiUser);
        sessionStorage.setItem('healthai_session', 'true');
      } else {
        setUser(null);
        sessionStorage.removeItem('healthai_session');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
      sessionStorage.removeItem('healthai_session');
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Login handler
   * SECURITY: Only stores session flag, not user data
   * RETURNS: User object for immediate use (prevents race conditions in navigation)
   */
  const handleLogin = useCallback(async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await authService.login({ username, password });

      if (result.success && result.user) {
        setUser(result.user);
        // SECURITY FIX: Store only session flag, NOT user data
        // User data will be fetched from API on reload via validateSession()
        sessionStorage.setItem('healthai_session', 'true');

        // Update last visited page to current location
        localStorageService.updatePreferences({
          lastVisitedPage: window.location.pathname,
        });

        // RACE CONDITION FIX: Return user object for immediate navigation
        return { success: true, user: result.user };
      }

      return {
        success: false,
        message: result.message || 'Login failed',
      };
    } catch (error) {
      return {
        success: false,
        message: 'An unexpected error occurred',
      };
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Logout handler
   * Clears all user data and calls backend logout endpoint
   */
  const handleLogout = useCallback(async () => {
    // Guard against recursive logout (e.g. auth:logout event firing during logout)
    if (isLoggingOut.current) return;
    isLoggingOut.current = true;

    setIsLoading(true);
    try {
      // Call backend logout endpoint (best effort - don't fail if it errors)
      await authService.logout();
    } catch (error) {
      console.error('Logout API call failed:', error);
      // Continue with local cleanup even if backend call fails
    } finally {
      // Clear all storage regardless of API result
      setUser(null);
      sessionStorage.removeItem('healthai_session');
      sessionStorageService.clearAll();

      if (user?.userId) {
        await indexedDBService.clearUserData(user.userId);
      }

      isLoggingOut.current = false;
      setIsLoading(false);
      window.location.href = '/login';
    }
  }, [user?.userId]);

  /**
   * Role-based access check
   */
  const hasRole = useCallback(
    (requiredRole: User['role'] | User['role'][]) => {
      if (!user) return false;

      const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
      return roles.includes(user.role);
    },
    [user]
  );

  /**
   * Listen for auth events from axios interceptor
   */
  useEffect(() => {
    const handleAuthLogout = () => {
      handleLogout();
    };

    window.addEventListener('auth:logout', handleAuthLogout);

    return () => {
      window.removeEventListener('auth:logout', handleAuthLogout);
    };
  }, [handleLogout]);

  /**
   * Check auth on mount
   */
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login: handleLogin,
    logout: handleLogout,
    checkAuth,
    hasRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
