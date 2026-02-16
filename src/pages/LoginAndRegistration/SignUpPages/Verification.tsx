import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import AppLayout from "../../../layout/AppLayout/AppLayout";
import { authService } from "../../../services/authService";

interface VerificationState {
  userId: string;
  email: string | null;
  phoneNumber: string | null;
  emailVerificationSent: boolean;
  smsVerificationSent: boolean;
}

type VerificationStep = "email-waiting" | "phone-otp" | "completed";

const Verification = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get registration data from navigation state
  const state = location.state as VerificationState | null;

  // Redirect if no state provided
  useEffect(() => {
    if (!state || !state.userId) {
      navigate("/signup", { replace: true });
    }
  }, [state, navigate]);

  // Verification flow state
  const [currentStep, setCurrentStep] = useState<VerificationStep>("email-waiting");
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);

  // OTP input state
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [resendTimer, setResendTimer] = useState(0);

  // Polling state
  const [isPolling, setIsPolling] = useState(false);
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pollingAttemptsRef = useRef(0);
  const maxPollingAttempts = 60; // 5 minutes max (with exponential backoff)

  // Determine initial step based on what was sent
  useEffect(() => {
    if (!state) return;

    if (state.emailVerificationSent && state.smsVerificationSent) {
      // Both sent → start with email waiting
      setCurrentStep("email-waiting");
    } else if (state.emailVerificationSent) {
      // Email only → email waiting
      setCurrentStep("email-waiting");
    } else if (state.smsVerificationSent) {
      // Phone only → go directly to OTP
      setCurrentStep("phone-otp");
    }
  }, [state]);

  /**
   * Start polling for email verification status
   * Uses exponential backoff: starts at 3s, increases to 5s, then 10s
   */
  const startEmailVerificationPolling = () => {
    if (isPolling || !state) return;

    setIsPolling(true);
    pollingAttemptsRef.current = 0;

    const pollEmailStatus = async () => {
      try {
        pollingAttemptsRef.current += 1;

        const result = await authService.checkVerificationStatus(state.userId);

        if (result.success && result.emailVerified) {
          // Email verified! Stop polling and transition
          stopPolling();
          handleEmailVerificationSuccess();
        } else if (pollingAttemptsRef.current >= maxPollingAttempts) {
          // Max attempts reached - stop polling but keep UI active
          stopPolling();
          console.log("Email verification polling stopped after max attempts");
        } else {
          // Calculate next polling interval with exponential backoff
          const nextInterval = calculatePollingInterval(pollingAttemptsRef.current);

          // Schedule next poll
          pollingIntervalRef.current = setTimeout(pollEmailStatus, nextInterval);
        }
      } catch (error) {
        console.error("Error polling email verification status:", error);
        // Continue polling even on error (network issues are temporary)
        if (pollingAttemptsRef.current < maxPollingAttempts) {
          const nextInterval = calculatePollingInterval(pollingAttemptsRef.current);
          pollingIntervalRef.current = setTimeout(pollEmailStatus, nextInterval);
        } else {
          stopPolling();
        }
      }
    };

    // Start first poll immediately
    pollEmailStatus();
  };

  /**
   * Calculate polling interval with exponential backoff
   * 0-10 attempts: 3 seconds
   * 11-30 attempts: 5 seconds
   * 31+ attempts: 10 seconds
   */
  const calculatePollingInterval = (attemptCount: number): number => {
    if (attemptCount <= 10) {
      return 3000; // 3 seconds for first minute
    } else if (attemptCount <= 30) {
      return 5000; // 5 seconds for next 1.5 minutes
    } else {
      return 10000; // 10 seconds after that
    }
  };

  /**
   * Stop polling
   */
  const stopPolling = () => {
    if (pollingIntervalRef.current) {
      clearTimeout(pollingIntervalRef.current);
      pollingIntervalRef.current = null;
    }
    setIsPolling(false);
  };

  /**
   * Handle successful email verification
   */
  const handleEmailVerificationSuccess = () => {
    // CRITICAL: Stop polling immediately to prevent background requests
    stopPolling();

    setEmailVerified(true);
    setSuccess("Email verified successfully! 🎉");

    // If phone verification needed, move to phone OTP
    if (state!.smsVerificationSent && !phoneVerified) {
      setTimeout(() => {
        setCurrentStep("phone-otp");
        setSuccess("");
      }, 1500);
    } else {
      // No phone needed, we're done
      setCurrentStep("completed");
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  /**
   * Start polling when email waiting screen is shown
   */
  useEffect(() => {
    if (currentStep === "email-waiting" && state?.emailVerificationSent) {
      startEmailVerificationPolling();
    }

    // Cleanup on unmount or step change
    return () => {
      stopPolling();
    };
  }, [currentStep, state?.emailVerificationSent]);

  // Handle OTP input
  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only digits

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Take last digit only
    setOtp(newOtp);
    setError("");

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Submit phone OTP
  const handleVerifyPhone = async () => {
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      setError("Please enter all 6 digits");
      return;
    }

    setIsLoading(true);
    setError("");

    const result = await authService.verifyPhone(state!.userId, otpCode);

    if (result.success) {
      setPhoneVerified(true);
      setSuccess("Phone number verified successfully!");

      // If email was already verified or not needed, mark as completed
      if (emailVerified || !state!.emailVerificationSent) {
        setCurrentStep("completed");
        setTimeout(() => navigate("/login"), 2000);
      }
    } else {
      setError(result.message || "Invalid OTP");
    }

    setIsLoading(false);
  };

  // Resend email verification
  const handleResendEmail = async () => {
    setResendTimer(60);
    const result = await authService.resendEmailVerification(state!.userId);

    if (result.success) {
      setSuccess("Verification email resent!");
    } else {
      setError(result.message || "Failed to resend email");
    }

    // Countdown timer
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Resend phone OTP
  const handleResendOtp = async () => {
    setResendTimer(60);
    const result = await authService.resendPhoneVerification(state!.userId);

    if (result.success) {
      setSuccess("New OTP sent!");
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } else {
      setError(result.message || "Failed to send OTP");
    }

    // Countdown timer
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Manual email verification (fallback)
  // Note: This is now primarily a fallback since automatic polling handles verification
  const handleEmailVerified = () => {
    handleEmailVerificationSuccess();
  };

  // Skip verification after one method verified
  const handleSkip = () => {
    navigate("/login");
  };

  if (!state) return null;

  return (
    <AppLayout>
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 font-display text-slate-800 dark:text-slate-100 min-h-screen">
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <div className="flex flex-1">
              <div className="layout-content-container flex flex-col flex-1">
                <div className="flex flex-1 flex-col lg:flex-row">

                  {/* Left Panel - Instructions */}
                  <div className="relative hidden w-full flex-col items-center justify-center gap-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-12 lg:flex lg:w-1/2 dark:from-primary/20 dark:via-primary/10">
                    <div className="relative z-10 flex flex-col gap-10 max-w-lg">
                      {/* Logo & Branding */}
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-2xl">
                          <span className="material-symbols-outlined text-5xl text-primary">
                            health_and_safety
                          </span>
                        </div>
                        <span className="text-3xl font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                          HealthAI
                        </span>
                      </div>

                      {/* Dynamic Title */}
                      <div className="text-center space-y-3">
                        <h1 className="text-4xl font-black leading-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                          {currentStep === "email-waiting" && "Verify Your Email"}
                          {currentStep === "phone-otp" && "Verify Your Phone"}
                          {currentStep === "completed" && "you're All Set!"}
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                          {currentStep === "email-waiting" && "Checking your email verification status automatically"}
                          {currentStep === "phone-otp" && "Enter the code we sent to your phone"}
                          {currentStep === "completed" && "Your account is ready to use"}
                        </p>
                      </div>

                      {/* Step by Step Instructions */}
                      <div className="space-y-5 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
                        {currentStep === "email-waiting" && (
                          <>
                            <div className="flex items-start gap-4 p-4 bg-primary/5 dark:bg-primary/10 rounded-xl">
                              <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                                <span className="material-symbols-outlined text-2xl text-primary">mail</span>
                              </div>
                              <div className="flex-1">
                                <p className="font-bold text-slate-900 dark:text-slate-100 mb-1">Step 1: Check Your Inbox</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                  We've sent a verification link to <span className="font-semibold text-primary">{state.email}</span>
                                </p>
                              </div>
                            </div>
                            {state.smsVerificationSent && (
                              <div className="flex items-start gap-4 p-4 bg-slate-100/50 dark:bg-slate-700/30 rounded-xl">
                                <div className="p-2 bg-slate-200 dark:bg-slate-600 rounded-lg">
                                  <span className="material-symbols-outlined text-2xl text-slate-600 dark:text-slate-300">smartphone</span>
                                </div>
                                <div className="flex-1">
                                  <p className="font-bold text-slate-900 dark:text-slate-100 mb-1">Step 2: Verify Phone Number</p>
                                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    After email verification, you'll receive an SMS code
                                  </p>
                                </div>
                              </div>
                            )}
                          </>
                        )}

                        {currentStep === "phone-otp" && (
                          <div className="flex items-start gap-4 p-4 bg-primary/5 dark:bg-primary/10 rounded-xl">
                            <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                              <span className="material-symbols-outlined text-2xl text-primary">sms</span>
                            </div>
                            <div className="flex-1">
                              <p className="font-bold text-slate-900 dark:text-slate-100 mb-1">Enter Your Code</p>
                              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                Check your messages for the 6-digit code sent to <span className="font-semibold text-primary">{state.phoneNumber}</span>
                              </p>
                            </div>
                          </div>
                        )}

                        {currentStep === "completed" && (
                          <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                            <div className="p-2 bg-green-100 dark:bg-green-800/50 rounded-lg">
                              <span className="material-symbols-outlined text-2xl text-green-600 dark:text-green-400">check_circle</span>
                            </div>
                            <div className="flex-1">
                              <p className="font-bold text-slate-900 dark:text-slate-100 mb-1">Account Verified!</p>
                              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                Redirecting you to the login page...
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Security Badge */}
                      <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <span className="material-symbols-outlined text-base">lock</span>
                        <span>Secure verification • HIPAA compliant</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel - Verification Form */}
                  <div className="flex w-full flex-1 flex-col items-center justify-center p-6 py-16 lg:w-1/2 lg:p-12">
                    {/* Mobile Header - Only visible on small screens */}
                    <div className="w-full max-w-lg mb-8 lg:hidden">
                      <div className="text-center space-y-4">
                        <div className="flex items-center justify-center gap-3">
                          <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-xl">
                            <span className="material-symbols-outlined text-4xl text-primary">
                              health_and_safety
                            </span>
                          </div>
                          <span className="text-2xl font-black bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            HealthAI
                          </span>
                        </div>
                        <div>
                          <h1 className="text-2xl font-black text-slate-900 dark:text-slate-100">
                            {currentStep === "email-waiting" && "Verify Your Email"}
                            {currentStep === "phone-otp" && "Verify Your Phone"}
                            {currentStep === "completed" && "You're All Set!"}
                          </h1>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                            {currentStep === "email-waiting" && "We're automatically checking your verification status"}
                            {currentStep === "phone-otp" && "Enter the code we sent to your phone"}
                            {currentStep === "completed" && "Your account is ready to use"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full max-w-lg space-y-8">

                      {/* Email Waiting Screen */}
                      {currentStep === "email-waiting" && (
                        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
                          {/* Header Section */}
                          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 p-8 text-center border-b border-slate-200/50 dark:border-slate-700/50">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-4">
                              <span className="material-symbols-outlined text-6xl text-primary animate-pulse">
                                mark_email_unread
                              </span>
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 mb-2">
                              Check Your Email
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-3">
                              We sent a verification link to:
                            </p>
                            <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-xl">
                              <span className="material-symbols-outlined text-primary text-sm">mail</span>
                              <p className="font-bold text-primary">{state.email}</p>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="p-8 space-y-6">
                            {/* Success/Error Messages */}
                            {success && (
                              <div className="flex items-center gap-3 rounded-2xl bg-green-50 dark:bg-green-900/20 p-4 border border-green-200/50 dark:border-green-800/50 animate-fade-in">
                                <div className="p-2 bg-green-100 dark:bg-green-800/50 rounded-lg">
                                  <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-xl">
                                    check_circle
                                  </span>
                                </div>
                                <p className="text-sm font-medium text-green-800 dark:text-green-300">{success}</p>
                              </div>
                            )}

                            {error && (
                              <div className="flex items-center gap-3 rounded-2xl bg-red-50 dark:bg-red-900/20 p-4 border border-red-200/50 dark:border-red-800/50 animate-fade-in">
                                <div className="p-2 bg-red-100 dark:bg-red-800/50 rounded-lg">
                                  <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-xl">
                                    error
                                  </span>
                                </div>
                                <p className="text-sm font-medium text-red-800 dark:text-red-300">{error}</p>
                              </div>
                            )}

                            {/* Polling Status Indicator */}
                            {isPolling && (
                              <div className="flex items-center gap-3 rounded-2xl bg-blue-50 dark:bg-blue-900/20 p-4 border border-blue-200/50 dark:border-blue-800/50">
                                <div className="p-2 bg-blue-100 dark:bg-blue-800/50 rounded-lg">
                                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-xl animate-spin">
                                    autorenew
                                  </span>
                                </div>
                                <p className="text-sm font-medium text-blue-800 dark:text-blue-300">
                                  Waiting for email verification... (Auto-checking every few seconds)
                                </p>
                              </div>
                            )}

                            {/* Instructions */}
                            <div className="bg-slate-50 dark:bg-slate-700/30 rounded-2xl p-6 space-y-4">
                              <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-0.5">info</span>
                                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                  <p className="font-semibold">Important:</p>
                                  <ul className="space-y-1.5 list-disc list-inside ml-2">
                                    <li>Check your inbox and spam folder</li>
                                    <li>Click the verification link in the email</li>
                                    <li>We'll automatically detect when you're verified</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Manual Verification Button (Fallback) */}
                            <button
                              onClick={handleEmailVerified}
                              className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-white font-bold text-lg hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
                            >
                              <span className="material-symbols-outlined">check_circle</span>
                              I've Verified My Email
                            </button>

                            {/* Resend Section */}
                            <div className="text-center space-y-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                              <p className="text-sm text-slate-600 dark:text-slate-400">
                                Didn't receive the email?
                              </p>
                              <button
                                onClick={handleResendEmail}
                                disabled={resendTimer > 0}
                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-primary hover:bg-primary/10 dark:hover:bg-primary/20 disabled:text-slate-400 disabled:hover:bg-transparent transition-colors"
                              >
                                <span className="material-symbols-outlined text-base">
                                  {resendTimer > 0 ? "schedule" : "refresh"}
                                </span>
                                {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend Verification Email"}
                              </button>
                            </div>

                            {/* Alternative Action */}
                            <div className="text-center pt-2">
                              <button
                                onClick={() => navigate("/signup")}
                                className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                              >
                                Use a different email address
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Phone OTP Screen */}
                      {currentStep === "phone-otp" && (
                        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
                          {/* Header Section */}
                          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent dark:from-primary/20 dark:via-primary/10 p-8 text-center border-b border-slate-200/50 dark:border-slate-700/50">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-4">
                              <span className="material-symbols-outlined text-6xl text-primary animate-pulse">
                                smartphone
                              </span>
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100 mb-2">
                              Enter Verification Code
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-3">
                              We sent a 6-digit code to:
                            </p>
                            <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-xl">
                              <span className="material-symbols-outlined text-primary text-sm">phone</span>
                              <p className="font-bold text-primary">{state.phoneNumber}</p>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="p-8 space-y-6">
                            {/* Success/Error Messages */}
                            {success && (
                              <div className="flex items-center gap-3 rounded-2xl bg-green-50 dark:bg-green-900/20 p-4 border border-green-200/50 dark:border-green-800/50 animate-fade-in">
                                <div className="p-2 bg-green-100 dark:bg-green-800/50 rounded-lg">
                                  <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-xl">
                                    check_circle
                                  </span>
                                </div>
                                <p className="text-sm font-medium text-green-800 dark:text-green-300">{success}</p>
                              </div>
                            )}

                            {error && (
                              <div className="flex items-center gap-3 rounded-2xl bg-red-50 dark:bg-red-900/20 p-4 border border-red-200/50 dark:border-red-800/50 animate-fade-in">
                                <div className="p-2 bg-red-100 dark:bg-red-800/50 rounded-lg">
                                  <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-xl">
                                    error
                                  </span>
                                </div>
                                <p className="text-sm font-medium text-red-800 dark:text-red-300">{error}</p>
                              </div>
                            )}

                            {/* OTP Input */}
                            <div className="space-y-4">
                              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 text-center">
                                Enter the 6-digit code
                              </label>
                              <div className="flex justify-center gap-3">
                                {otp.map((digit, index) => (
                                  <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    disabled={isLoading}
                                    className="w-14 h-16 text-center text-2xl font-black rounded-xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/20 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:border-primary/50"
                                  />
                                ))}
                              </div>
                              <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                                Code expires in 10 minutes
                              </p>
                            </div>

                            {/* Action Button */}
                            <button
                              onClick={handleVerifyPhone}
                              disabled={isLoading || otp.join("").length !== 6}
                              className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-white font-bold text-lg hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-2"
                            >
                              {isLoading ? (
                                <>
                                  <span className="material-symbols-outlined animate-spin">
                                    hourglass_empty
                                  </span>
                                  Verifying...
                                </>
                              ) : (
                                <>
                                  <span className="material-symbols-outlined">verified_user</span>
                                  Verify Phone Number
                                </>
                              )}
                            </button>

                            {/* Resend Section */}
                            <div className="text-center space-y-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                              <p className="text-sm text-slate-600 dark:text-slate-400">
                                Didn't receive the code?
                              </p>
                              <button
                                onClick={handleResendOtp}
                                disabled={resendTimer > 0}
                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-primary hover:bg-primary/10 dark:hover:bg-primary/20 disabled:text-slate-400 disabled:hover:bg-transparent transition-colors"
                              >
                                <span className="material-symbols-outlined text-base">
                                  {resendTimer > 0 ? "schedule" : "refresh"}
                                </span>
                                {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend Code"}
                              </button>
                            </div>

                            {/* Skip Button - Only show if email already verified */}
                            {emailVerified && (
                              <div className="text-center pt-4 border-t border-slate-200 dark:border-slate-700 space-y-3">
                                <div className="flex items-center gap-2 justify-center text-slate-600 dark:text-slate-400">
                                  <span className="material-symbols-outlined text-base">info</span>
                                  <p className="text-sm">
                                    You can verify your phone number later
                                  </p>
                                </div>
                                <button
                                  onClick={handleSkip}
                                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                >
                                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                                  Skip for Now
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Completed Screen */}
                      {currentStep === "completed" && (
                        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
                          {/* Success Content */}
                          <div className="p-12 text-center space-y-8">
                            {/* Animated Success Icon */}
                            <div className="relative inline-flex items-center justify-center">
                              <div className="absolute w-32 h-32 bg-green-500/20 rounded-full animate-ping"></div>
                              <div className="relative w-28 h-28 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                                <span className="material-symbols-outlined text-white text-7xl">
                                  check_circle
                                </span>
                              </div>
                            </div>

                            {/* Success Message */}
                            <div className="space-y-3">
                              <h2 className="text-4xl font-black bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                                All Set!
                              </h2>
                              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                                Your account has been successfully verified. You're ready to start using HealthAI.
                              </p>
                            </div>

                            {/* Progress Indicator */}
                            <div className="bg-slate-50 dark:bg-slate-700/30 rounded-2xl p-6 space-y-4">
                              <div className="flex items-center justify-center gap-2 text-primary">
                                <span className="material-symbols-outlined animate-spin">hourglass_empty</span>
                                <span className="font-semibold">Redirecting to login...</span>
                              </div>
                              <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full animate-pulse"></div>
                              </div>
                            </div>

                            {/* Manual Navigation Option */}
                            <div className="pt-4">
                              <button
                                onClick={() => navigate("/login")}
                                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                              >
                                <span className="material-symbols-outlined text-base">login</span>
                                Go to Login Now
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Verification;
