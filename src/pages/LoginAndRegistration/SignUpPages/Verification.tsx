import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import AppLayout from "../../../layout/AppLayout/AppLayout";

const Verification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [resendTimer, setResendTimer] = useState(0);
  const [userEmail, setUserEmail] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  // Extract email and userId from navigation state
  useEffect(() => {
    const state = location.state as { email?: string; userId?: string } | null;
    if (state?.email) {
      setUserEmail(state.email);
    }
    if (state?.userId) {
      setUserId(state.userId);
    } else {
      // If no userId provided, redirect back to signup
      navigate("/signup");
    }
  }, [location, navigate]);

  // Handle OTP input
  const handleOtpChange = (value: string, index: number) => {
    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only keep last digit if pasted multiple chars

    setOtp(newOtp);
    setError("");

    // Auto-focus next input if value is entered
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        // If current field has value, clear it
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // If current field is empty, move to previous and clear it
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        const prevInput = document.getElementById(`otp-${index - 1}`);
        prevInput?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  // Handle form submission
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      setError("Please enter all 6 digits");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // TODO: Replace with actual verification API endpoint
      const response = await fetch(
        `http://localhost:8080/api/v1/auth/verify-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: JSON.stringify({
            userId,
            code: otpCode,
          }),
          credentials: "include",
        },
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        setError(errorData.message || "Verification failed. Please try again.");
        setIsLoading(false);
        return;
      }

      // Success - navigate to dashboard or next page
      navigate("/patient-dashboard");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred during verification",
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Handle resend code
  const handleResend = async () => {
    if (resendTimer > 0) return;

    setIsLoading(true);
    setError("");

    try {
      // TODO: Replace with actual resend API endpoint
      const response = await fetch(
        `http://localhost:8080/api/v1/auth/resend-verification`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: JSON.stringify({
            userId,
          }),
          credentials: "include",
        },
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        setError(
          errorData.message || "Failed to resend code. Please try again.",
        );
        setIsLoading(false);
        return;
      }

      // Start resend timer
      setResendTimer(60);
      setOtp(["", "", "", "", "", ""]);

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
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to resend verification code",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="font-display bg-background-light dark:bg-background-dark text-text-primary dark:text-gray-200">
        <div className="relative flex h-auto min-h-screen w-full flex-col items-center justify-center p-4 lg:p-8 overflow-x-hidden">
          <div className="w-full max-w-4xl">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Panel: Instructions */}
                <div className="bg-primary/5 dark:bg-primary/10 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="material-symbols-outlined text-primary">
                      health_and_safety
                    </span>
                    <h2 className="text-xl font-bold text-text-primary dark:text-white">
                      HealthAI
                    </h2>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary dark:text-white mb-2">
                    Almost there!
                  </h3>
                  <p className="text-text-secondary dark:text-gray-300 mb-8">
                    Follow these simple steps to secure your account.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-icon-muted/20 text-icon-muted">
                        <span className="material-symbols-outlined !text-2xl">
                          mail
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary dark:text-white">
                          Step 1: Check Your Inbox
                        </h4>
                        <p className="text-sm text-text-secondary dark:text-gray-400">
                          We've sent a 6-digit code to your email address.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-icon-muted/20 text-icon-muted">
                        <span className="material-symbols-outlined !text-2xl">
                          pin
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary dark:text-white">
                          Step 2: Enter the 6-Digit Code
                        </h4>
                        <p className="text-sm text-text-secondary dark:text-gray-400">
                          Type the code into the fields on the right.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-icon-muted/20 text-icon-muted">
                        <span className="material-symbols-outlined !text-2xl">
                          verified_user
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary dark:text-white">
                          Step 3: You're All Set!
                        </h4>
                        <p className="text-sm text-text-secondary dark:text-gray-400">
                          Once verified, you'll get full access to your account.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel: Action */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h1 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-white mb-2">
                    Check your email
                  </h1>
                  <p className="text-text-secondary dark:text-gray-300 mb-8">
                    We've sent a verification code to{" "}
                    <span className="font-medium text-primary">
                      {userEmail || "your email address"}
                    </span>
                    .
                  </p>

                  {error && (
                    <div className="mb-6 p-3 bg-red-100 dark:bg-red-500/20 rounded-lg border border-red-300 dark:border-red-500">
                      <p className="text-sm text-red-700 dark:text-red-300 flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">
                          error
                        </span>
                        {error}
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleVerify} className="w-full">
                    <label
                      className="text-sm font-medium text-text-secondary dark:text-gray-300 mb-2 block"
                      htmlFor="otp-0"
                    >
                      Verification Code
                    </label>
                    <div className="flex justify-start py-3 gap-2 sm:gap-3">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`otp-${index}`}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) =>
                            handleOtpChange(e.target.value, index)
                          }
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          disabled={isLoading}
                          className="flex h-14 w-12 text-center text-lg font-bold focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 rounded bg-background-light dark:bg-gray-700 dark:text-white focus:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      ))}
                    </div>

                    <div className="flex pt-6">
                      <button
                        type="submit"
                        disabled={isLoading || otp.some((d) => !d)}
                        className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            <span className="material-symbols-outlined animate-spin mr-2">
                              hourglass_empty
                            </span>
                            Verifying...
                          </>
                        ) : (
                          <span className="truncate">Verify Account</span>
                        )}
                      </button>
                    </div>
                  </form>

                  <div className="text-center mt-6">
                    <p className="text-text-secondary dark:text-gray-400 text-sm font-normal leading-normal">
                      Didn't receive the code?{" "}
                      <button
                        onClick={handleResend}
                        disabled={resendTimer > 0 || isLoading}
                        className="font-bold text-primary hover:underline disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                      >
                        Resend Code
                      </button>
                      {resendTimer > 0 && (
                        <span className="text-primary"> ({resendTimer}s)</span>
                      )}
                    </p>
                  </div>

                  <div className="text-center mt-4">
                    <button
                      onClick={() => navigate("/signup")}
                      className="text-sm text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-primary/90 hover:underline transition-colors flex items-center justify-center gap-1 mx-auto"
                    >
                      <span className="material-symbols-outlined !text-base">
                        arrow_back
                      </span>
                      Use a different email address
                    </button>
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
