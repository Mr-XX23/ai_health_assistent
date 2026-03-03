import { useState, useEffect } from "react";
import AppLayout from "../../../layout/AppLayout/AppLayout";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { authService, InputSanitizer } from "../../../services/authService";

const SetNewPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Get user contact and reset method from navigation state (for OTP flow)
  const stateData = location.state as {
    userContact?: string;
    resetMethod?: "email" | "phone";
  } | null;

  // Get token from URL params (for email flow)
  const tokenFromUrl = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState({
    strength: "weak" as "weak" | "medium" | "strong",
    percentage: 0,
  });

  // Determine reset method
  const isOtpFlow = stateData?.resetMethod === "phone";
  const isTokenFlow = !!tokenFromUrl;

  useEffect(() => {
    // Redirect if no reset method detected
    if (!isOtpFlow && !isTokenFlow) {
      navigate("/forget-password");
    }
  }, [isOtpFlow, isTokenFlow, navigate]);

  useEffect(() => {
    if (newPassword) {
      const strength = authService.getPasswordStrength(newPassword);
      setPasswordStrength(strength);
    } else {
      setPasswordStrength({ strength: "weak", percentage: 0 });
    }
  }, [newPassword]);

  // Password validation checks
  const passwordChecks = {
    minLength: newPassword.length >= 8,
    hasLowercase: /[a-z]/.test(newPassword),
    hasUppercase: /[A-Z]/.test(newPassword),
    hasNumber: /[0-9]/.test(newPassword),
    hasSpecial: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]/.test(newPassword),
  };

  /**
   * Clear sensitive data from memory after submission
   * Security: Prevents password/OTP recovery from browser memory
   */
  const clearSensitiveData = () => {
    setNewPassword("");
    setConfirmPassword("");
    setOtp("");
    setError("");
    setPasswordStrength({ strength: "weak", percentage: 0 });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate passwords match
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Validate password strength
    const validation = InputSanitizer.isValidPassword(newPassword);
    if (!validation.isValid) {
      setError(validation.errors.join("; "));
      return;
    }

    // Validate OTP if in OTP flow
    if (isOtpFlow) {
      if (!otp || !otp.match(/^\d{6}$/)) {
        setError("Please enter a valid 6-digit OTP");
        return;
      }
    }

    setLoading(true);

    try {
      let result;

      if (isOtpFlow && stateData?.userContact) {
        // OTP-based reset
        result = await authService.confirmPasswordResetWithOtp(
          stateData.userContact,
          otp,
          newPassword
        );
      } else if (isTokenFlow && tokenFromUrl) {
        // Token-based reset
        result = await authService.confirmPasswordResetWithToken(
          tokenFromUrl,
          newPassword
        );
      } else {
        setError("Invalid password reset request");
        return;
      }

      if (result.success) {
        clearSensitiveData(); // Clear before navigation
        navigate("/update-password");
      } else {
        setError(result.message || "Failed to reset password");
        // Clear passwords on failure too (keep userContact/OTP for retry)
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      // Clear passwords on error
      setNewPassword("");
      setConfirmPassword("");
    } finally {
      setLoading(false);
    }
  };

  const getStrengthColor = () => {
    switch (passwordStrength.strength) {
      case "strong":
        return "text-green-500";
      case "medium":
        return "text-yellow-500";
      default:
        return "text-red-500";
    }
  };

  const getStrengthBgColor = () => {
    switch (passwordStrength.strength) {
      case "strong":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      default:
        return "bg-red-500";
    }
  };

  return (
    <AppLayout>
      <>
        <div className="font-display bg-background-light dark:bg-background-dark text-[#0d171b] dark:text-slate-200">
          <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-2xl">
              {/* TopNavBar */}
              <header className="flex w-full items-center justify-center gap-4 py-8">
                <div className="flex items-center gap-4 text-[#0d171b] dark:text-white">
                  <div className="size-8 text-primary">
                    <svg
                      fill="none"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    AI Healthcare Assistant
                  </h2>
                </div>
              </header>
              <main className="flex w-full flex-col gap-8 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-background-dark/50 sm:p-8 md:p-10">
                {/* PageHeading */}
                <div className="flex flex-col gap-2 text-center">
                  <p className="text-3xl font-black tracking-tight text-[#0d171b] dark:text-white sm:text-4xl">
                    Set a New Password
                  </p>
                  <p className="text-base text-[#4c809a] dark:text-slate-400">
                    {isOtpFlow
                      ? "Enter the OTP sent to your phone and create a strong, new password."
                      : "Create a strong, new password for your account."}
                  </p>
                </div>

                {error && (
                  <div className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-xl">
                        error
                      </span>
                      <p className="text-sm text-red-600 dark:text-red-400">
                        {error}
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Form Fields */}
                  <div className="grid grid-cols-1 gap-6">
                    {/* OTP Field (only for phone flow) */}
                    {isOtpFlow && (
                      <label className="flex flex-col">
                        <p className="pb-2 text-base font-medium text-[#0d171b] dark:text-slate-200">
                          Verification Code (OTP)
                        </p>
                        <div className="group flex w-full flex-1 items-stretch rounded-lg border border-[#cfdfe7] bg-slate-50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:focus-within:border-primary">
                          <input
                            className="form-input flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border-0 bg-transparent p-4 text-base text-[#0d171b] placeholder:text-[#4c809a] focus:outline-0 focus:ring-0 dark:text-white dark:placeholder:text-slate-500"
                            placeholder="Enter 6-digit OTP"
                            type="text"
                            maxLength={6}
                            value={otp}
                            onChange={(e) =>
                              setOtp(e.target.value.replace(/\D/g, ""))
                            }
                            disabled={loading}
                          />
                        </div>
                      </label>
                    )}

                    {/* New Password Field */}
                    <label className="flex flex-col">
                      <p className="pb-2 text-base font-medium text-[#0d171b] dark:text-slate-200">
                        New Password
                      </p>
                      <div className="group flex w-full flex-1 items-stretch rounded-lg border border-[#cfdfe7] bg-slate-50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:focus-within:border-primary">
                        <input
                          className="form-input flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg border-0 bg-transparent p-4 text-base text-[#0d171b] placeholder:text-[#4c809a] focus:outline-0 focus:ring-0 dark:text-white dark:placeholder:text-slate-500"
                          placeholder="Enter new password"
                          type={showPassword ? "text" : "password"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          disabled={loading}
                        />
                        <div
                          className="flex items-center justify-center pr-4 text-[#4c809a] dark:text-slate-400 cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <span className="material-symbols-outlined text-2xl">
                            {showPassword ? "visibility" : "visibility_off"}
                          </span>
                        </div>
                      </div>
                    </label>

                    {/* Confirm Password Field */}
                    <label className="flex flex-col">
                      <p className="pb-2 text-base font-medium text-[#0d171b] dark:text-slate-200">
                        Confirm New Password
                      </p>
                      <div className="group flex w-full flex-1 items-stretch rounded-lg border border-[#cfdfe7] bg-slate-50 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:focus-within:border-primary">
                        <input
                          className="form-input flex h-14 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg border-0 bg-transparent p-4 text-base text-[#0d171b] placeholder:text-[#4c809a] focus:outline-0 focus:ring-0 dark:text-white dark:placeholder:text-slate-500"
                          placeholder="Re-enter new password"
                          type={showConfirmPassword ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          disabled={loading}
                        />
                        <div
                          className="flex items-center justify-center pr-4 text-[#4c809a] dark:text-slate-400 cursor-pointer"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          <span className="material-symbols-outlined text-2xl">
                            {showConfirmPassword
                              ? "visibility"
                              : "visibility_off"}
                          </span>
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* Password Strength Indicator */}
                  {newPassword && (
                    <div className="flex flex-col gap-3 pt-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-[#0d171b] dark:text-slate-200">
                          Password Strength:{" "}
                          <span
                            className={`${getStrengthColor()} capitalize`}
                          >
                            {passwordStrength.strength}
                          </span>
                        </p>
                      </div>
                      <div className="h-2 w-full rounded-full bg-[#cfdfe7] dark:bg-slate-700">
                        <div
                          className={`h-2 rounded-full ${getStrengthBgColor()} transition-all duration-300`}
                          style={{
                            width: `${passwordStrength.percentage}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Password Requirements Checklist */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div
                      className={`flex items-center gap-2 text-sm ${
                        passwordChecks.minLength
                          ? "text-green-600 dark:text-green-500"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-base ${
                          passwordChecks.minLength
                            ? "text-green-500"
                            : "text-slate-400"
                        }`}
                      >
                        {passwordChecks.minLength
                          ? "check_circle"
                          : "radio_button_unchecked"}
                      </span>
                      <span>At least 8 characters</span>
                    </div>
                    <div
                      className={`flex items-center gap-2 text-sm ${
                        passwordChecks.hasLowercase
                          ? "text-green-600 dark:text-green-500"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-base ${
                          passwordChecks.hasLowercase
                            ? "text-green-500"
                            : "text-slate-400"
                        }`}
                      >
                        {passwordChecks.hasLowercase
                          ? "check_circle"
                          : "radio_button_unchecked"}
                      </span>
                      <span>Contains a lowercase letter</span>
                    </div>
                    <div
                      className={`flex items-center gap-2 text-sm ${
                        passwordChecks.hasUppercase
                          ? "text-green-600 dark:text-green-500"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-base ${
                          passwordChecks.hasUppercase
                            ? "text-green-500"
                            : "text-slate-400"
                        }`}
                      >
                        {passwordChecks.hasUppercase
                          ? "check_circle"
                          : "radio_button_unchecked"}
                      </span>
                      <span>Contains an uppercase letter</span>
                    </div>
                    <div
                      className={`flex items-center gap-2 text-sm ${
                        passwordChecks.hasNumber
                          ? "text-green-600 dark:text-green-500"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-base ${
                          passwordChecks.hasNumber
                            ? "text-green-500"
                            : "text-slate-400"
                        }`}
                      >
                        {passwordChecks.hasNumber
                          ? "check_circle"
                          : "radio_button_unchecked"}
                      </span>
                      <span>Contains a number</span>
                    </div>
                    <div
                      className={`flex items-center gap-2 text-sm ${
                        passwordChecks.hasSpecial
                          ? "text-green-600 dark:text-green-500"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-base ${
                          passwordChecks.hasSpecial
                            ? "text-green-500"
                            : "text-slate-400"
                        }`}
                      >
                        {passwordChecks.hasSpecial
                          ? "check_circle"
                          : "radio_button_unchecked"}
                      </span>
                      <span>Contains a special character</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={
                      loading ||
                      !newPassword ||
                      !confirmPassword ||
                      newPassword !== confirmPassword ||
                      passwordStrength.strength === "weak" ||
                      (isOtpFlow && !otp)
                    }
                    className="flex h-14 w-full items-center justify-center rounded-lg bg-primary px-6 text-base font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-offset-background-dark"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined animate-spin">
                          progress_activity
                        </span>
                        Resetting Password...
                      </span>
                    ) : (
                      "Set New Password"
                    )}
                  </button>
                </form>

                {/* Security Tips */}
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-2xl text-primary">
                      security
                    </span>
                    <h3 className="text-lg font-bold text-[#0d171b] dark:text-white">
                      Tips for a Strong Password
                    </h3>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#4c809a] dark:text-slate-400">
                    <li>
                      Avoid using personal information like your name or
                      birthday.
                    </li>
                    <li>
                      Use a unique password that you don't use on other
                      websites.
                    </li>
                    <li>
                      Consider using a password manager to generate and store
                      strong, unique passwords.
                    </li>
                  </ul>
                </div>
              </main>

              {/* Footer */}
              <footer className="w-full py-8 text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Need help?{" "}
                  <a
                    className="font-medium text-primary hover:underline cursor-pointer"
                    onClick={() => navigate("/contact")}
                  >
                    Contact Support
                  </a>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </>
    </AppLayout>
  );
};

export default SetNewPassword;
