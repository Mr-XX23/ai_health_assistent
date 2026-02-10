// Input sanitization and validation utilities
class InputSanitizer {
  /**
   * Sanitize email input - remove dangerous characters and trim whitespace
   */
  static sanitizeEmail(email: string): string {
    return email
      .trim()
      .toLowerCase()
      .replace(/[<>\"'`;()]/g, "");
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
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
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
  userRole: "patient" | "provider";
}

export interface RegisterResponse {
  email: string;
  message: string;
  success: boolean;
  userId: string;
  username: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

class AuthService {
  private baseURL = "http://localhost:8080/api/v1";
  private timeout = 10000; // 10 seconds timeout for security

  /**
   * Validate all input fields before sending to API
   */
  private validateInput(data: RegisterRequest): {
    isValid: boolean;
    errors: ValidationError[];
  } {
    const errors: ValidationError[] = [];

    // Validate email
    if (!data.email || !InputSanitizer.isValidEmail(data.email)) {
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

    // Validate phone number
    if (
      !data.phoneNumber ||
      !InputSanitizer.isValidPhoneNumber(data.phoneNumber)
    ) {
      errors.push({
        field: "phoneNumber",
        message: "Please enter a valid phone number",
      });
    }

    // Validate user role
    if (!data.userRole || !["patient", "provider"].includes(data.userRole)) {
      errors.push({
        field: "userRole",
        message:
          "Please select whether you are a Patient or Healthcare Provider",
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
        password: data.password, // Never sanitize passwords - they should be used as-is
        phoneNumber: InputSanitizer.sanitizePhoneNumber(data.phoneNumber),
        userRole: data.userRole, // No sanitization needed for user role - it's a safe enum
      };

      // Validate inputs
      const validation = this.validateInput(sanitizedData);
      if (!validation.isValid) {
        return {
          success: false,
          errors: validation.errors,
        };
      }

      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      try {
        const response = await fetch(`${this.baseURL}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest", // CSRF protection
          },
          body: JSON.stringify(sanitizedData),
          signal: controller.signal,
          credentials: "include", // Include cookies for session management
        });

        clearTimeout(timeoutId);

        // Handle different response statuses
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));

          if (response.status === 409) {
            return {
              success: false,
              errors: [
                {
                  field: "email",
                  message:
                    errorData.message ||
                    "An account with this email already exists",
                },
              ],
            };
          }

          if (response.status === 400) {
            return {
              success: false,
              errors: [
                {
                  field: "general",
                  message: errorData.message || "Invalid registration data",
                },
              ],
            };
          }

          return {
            success: false,
            message:
              errorData.message || "Registration failed. Please try again.",
          };
        }

        const responseData: RegisterResponse = await response.json();

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
        clearTimeout(timeoutId);

        if (error instanceof Error) {
          if (error.name === "AbortError") {
            return {
              success: false,
              message: "Registration request timed out. Please try again.",
            };
          }
          return {
            success: false,
            message:
              error.message || "Network error occurred during registration",
          };
        }

        return {
          success: false,
          message: "An unexpected error occurred",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "An unexpected error occurred during validation",
      };
    }
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
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) strength++;

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
}

export const authService = new AuthService();
export { InputSanitizer };
