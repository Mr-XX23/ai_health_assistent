import axiosInstance from '../config/axios.config';
import axios from 'axios';

// Input sanitization and validation utilities
class InputSanitizer {
  /**
   * Sanitize email input - remove dangerous characters and trim whitespace
   */
  static sanitizeEmail(email: string): string {
    return email
      .trim()
      .toLowerCase()
      .replace(/[<>"'`;()]/g, "");
  }

  /**
   * Sanitize username - allow only alphanumeric characters, underscores, and hyphens
   */
  static sanitizeUsername(username: string): string {
    return username.trim().replace(/[^a-zA-Z0-9_-]/g, "");
  }

  /**
   * Sanitize phone number - keep only digits and allowed formatting characters
   */
  static sanitizePhoneNumber(phone: string): string {
    return phone.replace(/[^0-9+\-() ]/g, "").trim();
  }

  /**
   * Validate email format using regex
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
  }

  /**
   * Validate password strength
   * Requirements: min 8 chars, 1 uppercase, 1 number, 1 special char
   */
  static isValidPassword(password: string): {
    isValid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number");
    }
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]/.test(password)) {
      errors.push("Password must contain at least one special character");
    }
    if (password.length > 128) {
      errors.push("Password is too long (max 128 characters)");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  /**
   * Validate phone number format
   */
  static isValidPhoneNumber(phone: string): boolean {
    const phoneRegex =
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
  }

  /**
   * Validate username length and format
   */
  static isValidUsername(username: string): boolean {
    return (
      username.length >= 3 &&
      username.length <= 30 &&
      /^[a-zA-Z0-9_-]+$/.test(username)
    );
  }
}

// API Service for authentication
export interface RegisterRequest {
  email: string;
  username: string;
  password: string;
  phoneNumber: string;
  userRole: "USER" | "HEALTHCARE_PROVIDER" | "ADMIN";
}

export interface RegisterResponse {
  email: string | null;
  phoneNumber: string | null;
  emailVerificationSent: boolean;
  smsVerificationSent: boolean;
  message: string;
  success: boolean;
  userId: string;
  username: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

// Login interfaces
export interface LoginRequest {
  username: string; // Can be email or username
  password: string;
}

export interface LoginResponse {
  message: string;
  username: string;
  userId: string;
  email: string;
  phoneNumber: string;
  LastLoginTime: string;
  status: string;
  role: 'USER' | 'HEALTHCARE_PROVIDER' | 'ADMIN';
  statusCode: string;
}

export interface User {
  userId: string;
  username: string;
  email: string;
  phoneNumber: string;
  role: 'USER' | 'HEALTHCARE_PROVIDER' | 'ADMIN';
  lastLoginTime: string;
}

// Rate limiting configuration
interface RateLimitEntry {
  attempts: number;
  lastAttempt: number;
  blockedUntil?: number;
}

class AuthService {
  
  private readonly maxAttempts = 3; // Max attempts before blocking
  private readonly blockDuration = 15 * 60 * 1000; // 15 minutes
  private readonly attemptWindow = 60 * 1000; // 1 minute
  private rateLimitStore: Map<string, RateLimitEntry> = new Map();
  /**
   * Check if email is rate limited
   */
  private checkRateLimit(email: string): {
    allowed: boolean;
    message?: string;
  } {
    const now = Date.now();
    const entry = this.rateLimitStore.get(email);

    // Clean up old entries
    if (entry && now - entry.lastAttempt > this.attemptWindow) {
      this.rateLimitStore.delete(email);
      return { allowed: true };
    }

    // Check if blocked
    if (entry?.blockedUntil && now < entry.blockedUntil) {
      const minutesLeft = Math.ceil((entry.blockedUntil - now) / 60000);
      return {
        allowed: false,
        message: `Too many attempts. Please try again in ${minutesLeft} minute${minutesLeft > 1 ? "s" : ""}.`,
      };
    }

    // Check attempts
    if (entry && entry.attempts >= this.maxAttempts) {
      const blockedUntil = now + this.blockDuration;
      this.rateLimitStore.set(email, {
        ...entry,
        blockedUntil,
      });
      return {
        allowed: false,
        message: "Too many attempts. Please try again in 15 minutes.",
      };
    }

    return { allowed: true };
  }

  /**
   * Record registration attempt
   */
  private recordAttempt(email: string): void {
    const now = Date.now();
    const entry = this.rateLimitStore.get(email);

    if (!entry || now - entry.lastAttempt > this.attemptWindow) {
      this.rateLimitStore.set(email, {
        attempts: 1,
        lastAttempt: now,
      });
    } else {
      this.rateLimitStore.set(email, {
        attempts: entry.attempts + 1,
        lastAttempt: now,
        blockedUntil: entry.blockedUntil,
      });
    }
  }

  /**
   * Validate all input fields before sending to API
   */
  private validateInput(data: RegisterRequest): {
    isValid: boolean;
    errors: ValidationError[];
  } {
    const errors: ValidationError[] = [];

    // NEW: At least ONE contact method required
    const hasEmail = data.email && data.email.trim().length > 0;
    const hasPhone = data.phoneNumber && data.phoneNumber.trim().length > 0;

    if (!hasEmail && !hasPhone) {
      errors.push({
        field: "contact",
        message: "Please provide either an email address or phone number",
      });
    }

    // Validate email ONLY if provided
    if (hasEmail && !InputSanitizer.isValidEmail(data.email)) {
      errors.push({
        field: "email",
        message: "Please enter a valid email address",
      });
    }

    // Validate username
    if (!data.username || !InputSanitizer.isValidUsername(data.username)) {
      errors.push({
        field: "username",
        message:
          "Username must be 3-30 characters and contain only letters, numbers, underscores, or hyphens",
      });
    }

    // Validate password
    const passwordValidation = InputSanitizer.isValidPassword(data.password);
    if (!passwordValidation.isValid) {
      errors.push({
        field: "password",
        message: passwordValidation.errors.join("; "),
      });
    }

    // Validate phone ONLY if provided
    if (hasPhone && !InputSanitizer.isValidPhoneNumber(data.phoneNumber)) {
      errors.push({
        field: "phoneNumber",
        message: "Please enter a valid phone number",
      });
    }

    // Validate userRole
    if (!data.userRole || !["USER", "HEALTHCARE_PROVIDER", "ADMIN"].includes(data.userRole)) {
      errors.push({
        field: "userRole",
        message: "Please select whether you are a Patient or Healthcare Provider",
      });
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  /**
   * Register a new user with input sanitization and validation
   */
  async register(data: RegisterRequest): Promise<{
    success: boolean;
    data?: RegisterResponse;
    errors?: ValidationError[];
    message?: string;
  }> {
    try {
      // Sanitize inputs
      const sanitizedData = {
        email: InputSanitizer.sanitizeEmail(data.email),
        username: InputSanitizer.sanitizeUsername(data.username),
        password: data.password, // Never sanitize passwords!
        phoneNumber: InputSanitizer.sanitizePhoneNumber(data.phoneNumber),
        userRole: data.userRole,
      };

      // Check rate limiting
      const rateCheck = this.checkRateLimit(sanitizedData.email);
      if (!rateCheck.allowed) {
        return {
          success: false,
          message: rateCheck.message,
        };
      }

      // Validate inputs
      const validation = this.validateInput(sanitizedData);
      if (!validation.isValid) {
        this.recordAttempt(sanitizedData.email);
        return {
          success: false,
          errors: validation.errors,
        };
      }

      try {
        // Map to backend-expected payload structure
        const payload = {
          username: sanitizedData.username,
          email: sanitizedData.email,
          phoneNumber: sanitizedData.phoneNumber,
          role: sanitizedData.userRole, // Backend expects "role" not "userRole"
          password: sanitizedData.password,
          acceptTerms: "true", // Required by backend
          hipaaPrivacyNotice: "true", // Required by backend
        };

        const response = await axiosInstance.post<RegisterResponse>(
          '/auth/register',
          payload
        );

        const responseData = response.data;

        // Validate response structure
        if (
          !responseData.userId ||
          !responseData.email ||
          !responseData.username
        ) {
          return {
            success: false,
            message: "Invalid response from server",
          };
        }

        return {
          success: true,
          data: responseData,
        };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const status = error.response?.status;
          const errorData = error.response?.data;

          this.recordAttempt(sanitizedData.email);

          if (status === 409) {
            return {
              success: false,
              errors: [
                {
                  field: "email",
                  message: this.sanitizeErrorMessage(
                    errorData?.message || "An account with this email already exists"
                  ),
                },
              ],
            };
          }

          if (status === 400) {
            return {
              success: false,
              errors: [
                {
                  field: "general",
                  message: this.sanitizeErrorMessage(errorData?.message || "Invalid registration data"),
                },
              ],
            };
          }

          if (status === 429) {
            return {
              success: false,
              message: "Too many requests. Please try again later.",
            };
          }

          return {
            success: false,
            message: this.sanitizeErrorMessage(
              errorData?.message || "Registration failed. Please try again."
            ),
          };
        }

        return {
          success: false,
          message: "An unexpected error occurred",
        };
      }
    } catch (error) {
      // Log error securely (consider using a proper logging service in production)
      if (import.meta.env.DEV) {
        console.error("Error during registration validation:", error);
      }
      return {
        success: false,
        message: "An unexpected error occurred during validation",
      };
    }
  }

  /**
   * Login user with username/email and password
   */
  async login(credentials: LoginRequest): Promise<{
    success: boolean;
    user?: User;
    message?: string;
  }> {
    try {
      // Sanitize username (can be email)
      const sanitizedUsername = InputSanitizer.sanitizeEmail(credentials.username);

      // Check rate limiting
      const rateCheck = this.checkRateLimit(sanitizedUsername);
      if (!rateCheck.allowed) {
        return {
          success: false,
          message: rateCheck.message,
        };
      }

      const response = await axiosInstance.post<LoginResponse>('/auth/login', {
        username: sanitizedUsername,
        password: credentials.password,
      });

      this.recordAttempt(sanitizedUsername); // Track attempt

      const { data } = response;

      // Validate response structure
      if (!data.userId || !data.username || !data.role) {
        return {
          success: false,
          message: "Invalid response from server",
        };
      }

      // Transform to User object
      const user: User = {
        userId: data.userId,
        username: data.username,
        email: data.email,
        phoneNumber: data.phoneNumber,
        role: data.role,
        lastLoginTime: data.LastLoginTime,
      };

      return {
        success: true,
        user,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message;

        if (status === 401) {
          return {
            success: false,
            message: this.sanitizeErrorMessage(message || "Invalid username or password"),
          };
        }

        if (status === 423) {
          return {
            success: false,
            message: "Account is locked. Please contact support.",
          };
        }

        return {
          success: false,
          message: this.sanitizeErrorMessage(message || "Login failed. Please try again."),
        };
      }

      return {
        success: false,
        message: "An unexpected error occurred",
      };
    }
  }

  /**
   * Logout user and clear cookies
   */
  async logout(): Promise<{
    success: boolean;
    message?: string;
  }> {
    try {
      const response = await axiosInstance.post<{
        message: string;
        success: boolean;
        timestamp: string;
      }>('/auth/logout');

      // Backend clears HTTP-only cookies via Set-Cookie headers
      // Clear any non-HTTP-only cookies
      this.clearAllCookies();
      return {
        success: response.data.success,
        message: response.data.message || "Logged out successfully",
      };
    } catch (error) {
      // If logout fails even after auto-refresh (both tokens expired/invalid)
      console.error("Logout error:", error);
      // this.clearAllCookies();
      return {
        success: true,
        message: "Logged out (session expired)",
      };
    }
  }

  /**
   * Clear all cookies from the browser
   */
  private clearAllCookies(): void {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();

      // Clear cookie for all possible paths and domains
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=" + window.location.hostname;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=." + window.location.hostname;
    }

    if (import.meta.env.DEV) {
      console.log("[Logout] Non-HTTP-only cookies cleared (HTTP-only cookies can only be cleared by backend)");
    }
  }

  /**
   * Validate session by verifying the access token
   * Only checks if the token is valid without refreshing it
   * Token refresh is handled automatically by axios interceptor on 401 responses
   */
  async validateSession(): Promise<{
    isValid: boolean;
    user?: User;
  }> {
    try {
      // Verify the token is valid without refreshing it
      const response = await axiosInstance.get('/auth/verify-token');

      // Support both nested { user: {...} } and flat { userId, username, ... } responses
      const userData = response.data?.user ?? response.data;

      if (userData?.userId && userData?.username && userData?.role) {
        // Transform backend response to User object
        const user: User = {
          userId: userData.userId,
          username: userData.username,
          email: userData.email,
          phoneNumber: userData.phoneNumber,
          role: userData.role,
          lastLoginTime: userData.lastLoginTime ?? userData.LastLoginTime,
        };

        return {
          isValid: true,
          user,
        };
      }

      // Token is valid but no user data returned — treat as invalid to avoid
      // showing an authenticated-but-empty state
      return {
        isValid: false,
      };
    } catch (error) {
      // If token is expired (401), axios interceptor will automatically attempt refresh.
      // If refresh also fails, the 'auth:logout' event will be triggered.
      if (import.meta.env.DEV) {
        console.error("Session validation error:", error);
      }
      return {
        isValid: false,
      };
    }
  }

  /**
   * Sanitize error messages to prevent user enumeration and information leakage
   * Security: Removes specific implementation details from error messages
   */
  private sanitizeErrorMessage(message: string): string {
    if (!message) return "An error occurred";

    const lowercaseMsg = message.toLowerCase();

    // User enumeration prevention
    if (
      lowercaseMsg.includes("user") &&
      (lowercaseMsg.includes("not found") || lowercaseMsg.includes("does not exist"))
    ) {
      return "Invalid credentials or request";
    }

    // Token/OTP expiry normalization
    if (
      lowercaseMsg.includes("token") &&
      (lowercaseMsg.includes("expired") || lowercaseMsg.includes("invalid"))
    ) {
      return "Reset request expired or invalid";
    }

    if (
      lowercaseMsg.includes("otp") &&
      (lowercaseMsg.includes("expired") || lowercaseMsg.includes("invalid"))
    ) {
      return "Verification code expired or invalid";
    }

    // Email/account existence leaks
    if (
      lowercaseMsg.includes("email") &&
      (lowercaseMsg.includes("exists") || lowercaseMsg.includes("already") || lowercaseMsg.includes("registered"))
    ) {
      return "Unable to process request";
    }

    if (
      lowercaseMsg.includes("phone") &&
      (lowercaseMsg.includes("exists") || lowercaseMsg.includes("already") || lowercaseMsg.includes("registered"))
    ) {
      return "Unable to process request";
    }

    // Generic implementation detail leaks
    if (lowercaseMsg.includes("database") || lowercaseMsg.includes("sql")) {
      return "A system error occurred";
    }

    if (lowercaseMsg.includes("null pointer") || lowercaseMsg.includes("exception")) {
      return "A system error occurred";
    }

    // Return original message if no sensitive information detected
    return message;
  }

  /**
   * Get password strength indicator
   */
  getPasswordStrength(password: string): {
    strength: "weak" | "medium" | "strong";
    percentage: number;
  } {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]/.test(password)) strength++;

    const strengthMap = {
      0: { strength: "weak" as const, percentage: 20 },
      1: { strength: "weak" as const, percentage: 40 },
      2: { strength: "medium" as const, percentage: 60 },
      3: { strength: "medium" as const, percentage: 80 },
      4: { strength: "strong" as const, percentage: 90 },
      5: { strength: "strong" as const, percentage: 100 },
    };

    return (
      strengthMap[strength as keyof typeof strengthMap] || {
        strength: "weak",
        percentage: 20,
      }
    );
  }

  /**
   * Verify phone number with OTP
   */
  async verifyPhone(userId: string, otp: string): Promise<{
    success: boolean;
    message?: string;
  }> {
    try {
      await axiosInstance.post('/auth/verify-phone', {
        userId,
        otp,
      });

      return {
        success: true,
        message: "Phone number verified successfully",
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message;
        return {
          success: false,
          message: this.sanitizeErrorMessage(message || "Invalid or expired OTP"),
        };
      }
      return {
        success: false,
        message: "Verification failed",
      };
    }
  }

  /**
   * Resend email verification
   */
  async resendEmailVerification(userId: string): Promise<{
    success: boolean;
    message?: string;
  }> {
    try {
      await axiosInstance.post('/auth/send-email-verification', {
        userId,
      });

      return {
        success: true,
        message: "Verification email sent successfully",
      };
    } catch (error) {
      console.error("Error resending email verification:", error);
      return {
        success: false,
        message: "Failed to send verification email",
      };
    }
  }

  /**
   * Resend phone OTP
   */
  async resendPhoneVerification(userId: string): Promise<{
    success: boolean;
    message?: string;
  }> {
    try {
      await axiosInstance.post('/auth/send-phone-verification', {
        userId,
      });

      return {
        success: true,
        message: "OTP sent successfully",
      };
    } catch (error) {
      console.error("Error resending phone verification:", error);
      return {
        success: false,
        message: "Failed to send OTP",
      };
    }
  }

  /**
   * Check user verification status (email and phone)
   * Used for polling during the verification flow
   */
  async checkVerificationStatus(userId: string): Promise<{
    success: boolean;
    emailVerified: boolean;
    phoneVerified: boolean;
    message?: string;
  }> {
    try {
      const response = await axiosInstance.get(`/auth/users/verify/${userId}`);

      const data = response.data;

      return {
        success: data.success || true,
        emailVerified: data.emailVerified || false,
        phoneVerified: data.phoneVerified || false,
      };
    } catch (error) {
      console.error("Error checking verification status:", error);
      return {
        success: false,
        emailVerified: false,
        phoneVerified: false,
        message: "Failed to check verification status",
      };
    }
  }

  /**
   * Request password reset - sends reset link via email or OTP via phone
   */
  async requestPasswordReset(userContact: string): Promise<{
    success: boolean;
    message?: string;
    resetMethod?: 'email' | 'phone';
  }> {
    try {
      // Sanitize input
      const sanitizedContact = userContact.trim();

      // Validate input format
      const isEmail = InputSanitizer.isValidEmail(sanitizedContact);
      const isPhone = InputSanitizer.isValidPhoneNumber(sanitizedContact);

      if (!isEmail && !isPhone) {
        return {
          success: false,
          message: "Please enter a valid email address or phone number",
        };
      }

      // Check rate limiting
      const rateCheck = this.checkRateLimit(sanitizedContact);
      if (!rateCheck.allowed) {
        return {
          success: false,
          message: rateCheck.message,
        };
      }

      const response = await axiosInstance.post('/auth/reset-password', {
        userContact: sanitizedContact,
      });

      this.recordAttempt(sanitizedContact);

      return {
        success: true,
        message: response.data.message || "Password reset instructions sent",
        resetMethod: isEmail ? 'email' : 'phone',
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message;

        if (status === 429) {
          return {
            success: false,
            message: "Too many password reset attempts. Please try again later.",
          };
        }

        return {
          success: false,
          message: this.sanitizeErrorMessage(message || "Failed to process password reset request"),
        };
      }

      return {
        success: false,
        message: "An unexpected error occurred",
      };
    }
  }

  /**
   * Confirm password reset using token (for email-based reset)
   */
  async confirmPasswordResetWithToken(
    token: string,
    newPassword: string
  ): Promise<{
    success: boolean;
    message?: string;
  }> {
    try {
      // Validate token
      if (!token || token.trim().length === 0) {
        return {
          success: false,
          message: "Reset token is required",
        };
      }

      // Validate password
      const passwordValidation = InputSanitizer.isValidPassword(newPassword);
      if (!passwordValidation.isValid) {
        return {
          success: false,
          message: passwordValidation.errors.join("; "),
        };
      }

      // Send token in body for security (not in URL)
      const response = await axiosInstance.post('/auth/confirm-reset', {
        token,
        newPassword,
      });

      return {
        success: true,
        message: response.data.message || "Password reset successfully",
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message;

        if (status === 400) {
          return {
            success: false,
            message: this.sanitizeErrorMessage(message || "Invalid or expired reset token"),
          };
        }

        if (status === 429) {
          return {
            success: false,
            message: "Too many attempts. Please request a new password reset.",
          };
        }

        return {
          success: false,
          message: this.sanitizeErrorMessage(message || "Failed to reset password"),
        };
      }

      return {
        success: false,
        message: "An unexpected error occurred",
      };
    }
  }

  /**
   * Confirm password reset using OTP (for phone-based reset)
   */
  async confirmPasswordResetWithOtp(
    userContact: string,
    otp: string,
    newPassword: string
  ): Promise<{
    success: boolean;
    message?: string;
  }> {
    try {
      // Sanitize and validate user contact
      const sanitizedContact = userContact.trim();
      const isEmail = InputSanitizer.isValidEmail(sanitizedContact);
      const isPhone = InputSanitizer.isValidPhoneNumber(sanitizedContact);

      if (!isEmail && !isPhone) {
        return {
          success: false,
          message: "Please enter a valid email address or phone number",
        };
      }

      // Validate OTP format
      if (!otp || !otp.match(/^\d{6}$/)) {
        return {
          success: false,
          message: "OTP must be 6 digits",
        };
      }

      // Validate password
      const passwordValidation = InputSanitizer.isValidPassword(newPassword);
      if (!passwordValidation.isValid) {
        return {
          success: false,
          message: passwordValidation.errors.join("; "),
        };
      }

      const response = await axiosInstance.post('/auth/confirm-reset-otp', {
        userContact: sanitizedContact,
        otp,
        newPassword,
      });

      return {
        success: true,
        message: response.data.message || "Password reset successfully",
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message;

        if (status === 400) {
          return {
            success: false,
            message: this.sanitizeErrorMessage(message || "Invalid or expired OTP"),
          };
        }

        if (status === 429) {
          return {
            success: false,
            message: "Too many attempts. Please request a new password reset.",
          };
        }

        return {
          success: false,
          message: this.sanitizeErrorMessage(message || "Failed to reset password"),
        };
      }

      return {
        success: false,
        message: "An unexpected error occurred",
      };
    }
  }

  /**
   * Resend password reset (works for both email and phone)
   */
  async resendPasswordReset(userContact: string): Promise<{
    success: boolean;
    message?: string;
  }> {
    // Reuse the requestPasswordReset method
    return this.requestPasswordReset(userContact);
  }
}

export const authService = new AuthService();
export { InputSanitizer };
