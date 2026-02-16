import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { authService, User } from '../services/authService';
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

  /**
   * Check authentication on mount
   * Only validates if there's stored user data to avoid unnecessary refresh calls
   */
  const checkAuth = useCallback(async () => {
    setIsLoading(true);
    try {
      // First check if there's a stored user in sessionStorage
      const storedUser = sessionStorage.getItem('healthai_user');

      if (!storedUser) {
        // No stored user - skip validation, user is not logged in
        setUser(null);
        setIsLoading(false);
        return;
      }

      // We have stored user data - validate session
      const { isValid } = await authService.validateSession();

      if (isValid) {
        // Restore user from sessionStorage
        const parsedUser = JSON.parse(storedUser) as User;
        setUser(parsedUser);
      } else {
        // Session invalid - clear storage
        setUser(null);
        sessionStorage.removeItem('healthai_user');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
      sessionStorage.removeItem('healthai_user');
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Login handler
   */
  const handleLogin = useCallback(async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await authService.login({ username, password });

      if (result.success && result.user) {
        setUser(result.user);
        // Store user in sessionStorage for persistence across page reloads
        sessionStorage.setItem('healthai_user', JSON.stringify(result.user));

        // Update last visited page to current location
        localStorageService.updatePreferences({
          lastVisitedPage: window.location.pathname,
        });

        return { success: true };
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
      sessionStorage.removeItem('healthai_user');
      sessionStorageService.clearAll();

      if (user?.userId) {
        await indexedDBService.clearUserData(user.userId);
      }

      setIsLoading(false);
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
