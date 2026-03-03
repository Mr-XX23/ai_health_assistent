import React, { useState } from "react";
import AppLayout from "../../../layout/AppLayout/AppLayout";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import Password from "../../../components/MarketingComponents/inputField/Password";
import Email from "../../../components/MarketingComponents/inputField/Email";
import Slider from "../components/Slider";
import EmailPassword from "../../../components/inputField/EmailPassword";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const result = await login(email, password);

      if (result.success && result.user) {
        // Get the path user was trying to access
        const from = (location.state as { from?: { pathname: string } })?.from?.pathname;

        if (from) {
          navigate(from, { replace: true });
        } else {
          // RACE CONDITION FIX: Use user from login result, not state
          // Immediate navigation based on role without setTimeout
          if (result.user.role === 'ADMIN') {
            navigate('/admin', { replace: true });
          } else if (result.user.role === 'HEALTHCARE_PROVIDER') {
            navigate('/docter-dashboard', { replace: true });
          } else {
            navigate('/', { replace: true });
          }
        }
      } else {
        setError(result.message || 'Login failed');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <AppLayout>
        <div>
          <div className="bg-background-light dark:bg-background-dark font-display text-background-dark dark:text-slate-200">
            <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
              <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1">
                  <div className="layout-content-container flex flex-col flex-1">
                    <div className="flex flex-1 flex-col lg:flex-row">
                      {/* <!-- Left Branding Column --> */}
                      <div className="relative hidden w-full flex-col items-center justify-center gap-6 bg-primary/20 p-8 lg:flex lg:w-1/2 dark:bg-background-dark">
                        <div
                          className="absolute inset-0 z-0 bg-cover bg-center opacity-10 dark:opacity-20 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDootRbF6XIUCgRdN48Ul1TTegsLXDbbAffF1Oqt-1GBGoSmbz49sABZJSHK-R3gjf6_70ctUPNsTgYJ-Z_8XgDayzPpKoBHlHyMTpvhnRYCux1RjmNMQNtXlI3aDMPTpJs5KcaHbX-0CmstLK__RrsJYB6jJ0SUNyfSZCKidCTjigkzFh--9bcugor7T5R03wJOcPAS6jlBgKj7ir3tltKZHIvwvRLsdUjbIix5dxbvXx0xkCAwgmVyWueBLSrrlunZVIXOE2joCEv)]"
                          data-alt="Abstract image of healthcare technology with a stethoscope on a laptop."
                        ></div>
                        <div className="relative z-10 flex flex-col gap-8 max-w-md text-center text-background-dark dark:text-slate-100">
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
                              Smarter Healthcare, Simpler Access. Log in or
                              create an account to get started.
                            </h2>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Right Form Column --> */}
                      <div className="flex w-full flex-1 flex-col items-center justify-center bg-background-light p-4 py-12 lg:w-1/2 dark:bg-background-dark">
                        <div className="w-full  lg:max-w-xl max-w-md space-y-6">
                          {/* <!-- Segmented Buttons / Tabs --> */}
                          <Slider />
                          {/* <!-- Form Content --> */}
                          <form className="flex flex-col gap-4 px-4" onSubmit={handleLogin}>
                            {/* <!-- Email Address Field --> */}
                            <Email value={email} onChange={setEmail} disabled={isLoading} />

                            {/* <!-- Password Field --> */}
                            <Password value={password} onChange={setPassword} disabled={isLoading} />

                            {/* <!-- Error Display --> */}
                            {error && (
                              <div className="flex items-center gap-2 rounded-lg bg-red-100 dark:bg-red-500/20 p-3">
                                <span className="material-symbols-outlined text-red-600 dark:text-red-400">
                                  error
                                </span>
                                <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
                              </div>
                            )}

                            {/* <!-- Forgot Password Link --> */}
                            <span onClick={() => navigate("/forgot-password")}>
                              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal pb-3 pt-1 px-1 text-right underline cursor-pointer hover:text-primary transition-colors">
                                Forgot Password?
                              </p>
                            </span>

                            {/* <!-- Primary CTA Button --> */}
                            <div className="flex flex-col gap-3 px-1 py-3">
                              <button
                                type="submit"
                                disabled={isLoading}
                                className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-sm transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                {isLoading ? (
                                  <>
                                    <span className="material-symbols-outlined animate-spin mr-2">
                                      hourglass_empty
                                    </span>
                                    Logging in...
                                  </>
                                ) : (
                                  "Login"
                                )}
                              </button>
                            </div>
                          </form>
                          {/* <!-- Social Sign-On --> */}
                          <div className="flex flex-col gap-4 px-4">
                            <div className="relative flex items-center justify-center">
                              <div className="absolute inset-x-0 h-px bg-slate-200 dark:bg-slate-700"></div>
                              <span className="relative bg-background-light dark:bg-background-dark px-3 text-sm text-slate-500 dark:text-slate-400">
                                Or continue with
                              </span>
                            </div>
                            <button className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-background-light dark:bg-slate-800 dark:border-slate-600 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm transition-colors hover:bg-slate-100 dark:hover:bg-slate-700">
                              <svg
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M22.56 12.25C22.56 11.45 22.49 10.68 22.36 9.92H12.27V14.2H18.2C17.93 15.77 17.02 17.11 15.65 18.04V20.73H19.46C21.46 18.98 22.56 16.03 22.56 12.25Z"
                                  fill="#4285F4"
                                ></path>
                                <path
                                  d="M12.27 23C15.11 23 17.5 22.14 19.46 20.73L15.65 18.04C14.69 18.69 13.56 19.08 12.27 19.08C9.86 19.08 7.8 17.51 6.96 15.32H3.06V18.1C4.96 21.09 8.35 23 12.27 23Z"
                                  fill="#34A853"
                                ></path>
                                <path
                                  d="M6.96 15.32C6.72 14.65 6.58 13.93 6.58 13.2C6.58 12.47 6.72 11.75 6.96 11.08V8.29H3.06C2.26 9.94 1.77 11.51 1.77 13.2C1.77 14.89 2.26 16.46 3.06 18.1L6.96 15.32Z"
                                  fill="#FBBC05"
                                ></path>
                                <path
                                  d="M12.27 7.32C13.71 7.32 14.99 7.84 15.99 8.76L19.54 5.22C17.5 3.42 15.11 2.4 12.27 2.4C8.35 2.4 4.96 4.91 3.06 8.29L6.96 11.08C7.8 8.89 9.86 7.32 12.27 7.32Z"
                                  fill="#EA4335"
                                ></path>
                              </svg>
                              <span>Continue with Google</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default LoginPage;
