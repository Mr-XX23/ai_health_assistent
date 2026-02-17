import { useState } from "react";
import AppLayout from "../../../layout/AppLayout/AppLayout";
import { useNavigate } from "react-router";
import { authService, InputSanitizer } from "../../../services/authService";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [userContact, setUserContact] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [resetMethod, setResetMethod] = useState<"email" | "phone" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validate input
    if (!userContact.trim()) {
      setError("Please enter your email or phone number");
      return;
    }

    const trimmedContact = userContact.trim();
    const isEmail = InputSanitizer.isValidEmail(trimmedContact);
    const isPhone = InputSanitizer.isValidPhoneNumber(trimmedContact);

    if (!isEmail && !isPhone) {
      setError("Please enter a valid email address or phone number");
      return;
    }

    setLoading(true);

    try {
      const result = await authService.requestPasswordReset(trimmedContact);

      if (result.success) {
        setSuccess(true);
        setResetMethod(result.resetMethod || null);

        // If phone, navigate to set password page after short delay
        if (result.resetMethod === "phone") {
          setTimeout(() => {
            navigate("/set-password", {
              state: { userContact: trimmedContact, resetMethod: "phone" },
            });
          }, 2000);
        }
      } else {
        setError(result.message || "Failed to send reset instructions");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="bg-background-light dark:bg-background-dark font-display text-[#101c22] dark:text-slate-200">
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <div className="flex flex-1">
              <div className="layout-content-container flex flex-col flex-1">
                <div className="flex flex-1 flex-col lg:flex-row">
                  <div className="relative hidden w-full flex-col items-center justify-center gap-6 bg-primary/20 p-8 lg:flex lg:w-1/2 dark:bg-background-dark">
                    <div
                      className="absolute inset-0 z-0 bg-cover bg-center opacity-10 dark:opacity-20 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDootRbF6XIUCgRdN48Ul1TTegsLXDbbAffF1Oqt-1GBGoSmbz49sABZJSHK-R3gjf6_70ctUPNsTgYJ-Z_8XgDayzPpKoBHlHyMTpvhnRYCux1RjmNMQNtXlI3aDMPTpJs5KcaHbX-0CmstLK__RrsJYB6jJ0SUNyfSZCKidCTjigkzFh--9bcugor7T5R03wJOcPAS6jlBgKj7ir3tltKZHIvwvRLsdUjbIix5dxbvXx0xkCAwgmVyWueBLSrrlunZVIXOE2joCEv)]"
                      data-alt="Abstract image of healthcare technology with a stethoscope on a laptop. "
                    ></div>
                    <div className="relative z-10 flex flex-col gap-8 max-w-md text-center text-[#101c22] dark:text-slate-100">
                      <div className="flex items-center justify-center gap-3">
                        <span className="material-symbols-outlined text-4xl text-primary">
                          health_and_safety
                        </span>
                        <span className="text-2xl font-bold">HealthAI</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-black leading-tight tracking-tight lg:text-5xl">
                          Your Intelligent Health Partner
                        </h1>
                        <h2 className="text-base font-normal leading-normal text-slate-700 dark:text-slate-300">
                          Smarter Healthcare, Simpler Access. Recover your
                          account securely.
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-center justify-center bg-background-light p-4 py-12 lg:w-1/2 dark:bg-background-dark">
                    <div className="w-full max-w-sm space-y-8">
                      <div className="text-center px-4">
                        <h2 className="text-3xl font-bold tracking-tight text-[#101c22] dark:text-slate-100">
                          Forgot Your Password?
                        </h2>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                          No problem. Enter your email or phone number below
                          and we'll send you instructions to reset it.
                        </p>
                      </div>

                      {success && (
                        <div className="mx-4 rounded-lg bg-success/10 border border-success/20 p-4">
                          <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-success text-xl">
                              check_circle
                            </span>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-success">
                                {resetMethod === "email"
                                  ? "Check your email"
                                  : "OTP sent successfully"}
                              </p>
                              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                {resetMethod === "email"
                                  ? "We've sent password reset instructions to your email."
                                  : "Please check your phone for the OTP. Redirecting..."}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {error && (
                        <div className="mx-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4">
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

                      <form onSubmit={handleSubmit} className="flex flex-col gap-6 px-4">
                        <label className="flex flex-col min-w-40 flex-1">
                          <p className="text-sm font-medium leading-normal pb-2 dark:text-slate-300">
                            Email or Phone Number
                          </p>
                          <div className="flex w-full flex-1 items-stretch rounded-lg">
                            <div className="text-slate-400 flex border border-slate-300 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 items-center justify-center px-[15px] rounded-l-lg border-r-0">
                              <span className="material-symbols-outlined text-[20px]">
                                {userContact.includes("@") ? "mail" : "phone"}
                              </span>
                            </div>
                            <input
                              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#101c22] dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 focus:border-primary/80 dark:focus:border-primary/80 h-12 placeholder:text-slate-400 p-[15px] rounded-l-none text-base font-normal leading-normal"
                              placeholder="Enter your email or phone number"
                              type="text"
                              value={userContact}
                              onChange={(e) => setUserContact(e.target.value)}
                              disabled={loading || success}
                            />
                          </div>
                        </label>
                        <div className="flex flex-col gap-3 pt-2">
                          <button
                            type="submit"
                            disabled={loading || success}
                            className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-sm transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {loading ? (
                              <span className="flex items-center gap-2">
                                <span className="material-symbols-outlined animate-spin">
                                  progress_activity
                                </span>
                                Sending...
                              </span>
                            ) : (
                              "Send Reset Instructions"
                            )}
                          </button>
                        </div>
                        <div className="text-center">
                          <a
                            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors cursor-pointer"
                            onClick={() => navigate("/login")}
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              arrow_back
                            </span>
                            <span>Back to Login</span>
                          </a>
                        </div>
                      </form>
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

export default ForgetPassword;
