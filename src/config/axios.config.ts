import axios, { AxiosError } from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';

const API_BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:8080/api/v1';
const API_TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT) || 10000; // Default 10 seconds

// Create axios instance with default configuration
export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  withCredentials: true, // Critical for HTTP-only cookies
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest', // CSRF protection
  },
});

// Request Interceptor - Add logging in development mode
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Ensure withCredentials is set for all requests
    config.withCredentials = true;

    // Log requests in development for debugging
    if (import.meta.env.DEV) {
      console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
      console.log(`[API Request] withCredentials: ${config.withCredentials}`);
      console.log(`[API Request] Cookies: ${document.cookie || 'No cookies found'}`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor - Handle errors and token refresh
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: unknown) => void;
  reject: (reason: unknown) => void;
}> = [];

const processQueue = (error: Error | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// Endpoints that don't require authentication (skip token refresh)
const PUBLIC_ENDPOINTS = [
  '/auth/login',
  '/auth/register',
  '/auth/refresh',      // CRITICAL: Must be public to prevent infinite refresh loops
  '/auth/verify-token', // CRITICAL: Session probe — a 401 here means "not logged in", never refresh
  '/auth/logout',       // CRITICAL: Must be public to prevent logout→refresh→logout loop
  '/auth/verify-email',
  '/auth/reset-password',
  '/auth/confirm-reset',
  '/auth/confirm-reset-otp',
  '/auth/verify-phone',
  '/auth/send-email-verification',
  '/auth/send-phone-verification',
  '/auth/users/verify/',
];

// NOTE: /auth/logout and /auth/verify-token are included above so that a
// 401 on those endpoints never triggers a token-refresh loop.

const isPublicEndpoint = (url?: string): boolean => {
  if (!url) return false;
  return PUBLIC_ENDPOINTS.some((endpoint) => url.includes(endpoint));
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // Handle 401 Unauthorized - Token expired (only for protected endpoints)
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isPublicEndpoint(originalRequest.url)
    ) {
      if (import.meta.env.DEV) {
        console.log('[Token Refresh] Access token expired for:', originalRequest.url);
      }

      // If already refreshing, queue this request
      if (isRefreshing) {
        if (import.meta.env.DEV) {
          console.log('[Token Refresh] Queueing request while refresh in progress');
        }
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            if (import.meta.env.DEV) {
              console.log('[Token Refresh] Retrying queued request:', originalRequest.url);
            }
            // Retry the original request with the new token
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      // Mark request as retried to prevent infinite loops
      originalRequest._retry = true;
      isRefreshing = true;

      if (import.meta.env.DEV) {
        console.log('[Token Refresh] Attempting to refresh access token...');
      }

      try {
        // Attempt to refresh the access token
        await axiosInstance.post('/auth/refresh');

        if (import.meta.env.DEV) {
          console.log('[Token Refresh] ✓ Token refreshed successfully');
        }

        // Token refresh successful - process queued requests
        processQueue(null, 'refreshed');

        if (import.meta.env.DEV) {
          console.log('[Token Refresh] Retrying original request:', originalRequest.url);
        }

        // Retry the original request with new token
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        if (import.meta.env.DEV) {
          console.error('[Token Refresh] ✗ Refresh failed - logging out user');
        }

        // Refresh token expired or invalid - logout user
        processQueue(refreshError as Error, null);

        // Dispatch custom event for AuthContext to handle logout
        window.dispatchEvent(new CustomEvent('auth:logout', {
          detail: { reason: 'token_expired' }
        }));

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // Handle 403 Forbidden - Insufficient permissions
    if (error.response?.status === 403) {
      window.dispatchEvent(
        new CustomEvent('auth:forbidden', {
          detail: { message: 'You do not have permission to access this resource' },
        })
      );
    }

    // Handle network errors
    if (!error.response) {
      return Promise.reject(new Error('Network error. Please check your connection.'));
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
