import React from "react";
import App from "../../../App";
import AppLayout from "../../../layout/AppLayout/AppLayout";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();
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
                      data-alt="Abstract image of healthcare technology with a stethoscope on a laptop."
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
                          Secure, compliant, and personalized healthcare
                          assistance at your fingertips.
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-center justify-center bg-background-light p-4 py-12 lg:w-1/2 dark:bg-background-dark">
                    <div className="w-full max-w-md space-y-6">
                      <div className="flex px-4 py-3">
                        <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-slate-200/80 p-1.5 dark:bg-slate-800">
                          <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-background-light has-[:checked]:shadow-md has-[:checked]:text-[#101c22] dark:has-[:checked]:bg-slate-700 dark:has-[:checked]:text-slate-50 text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal transition-all">
                            <span className="truncate">Login</span>
                            {/* <input className="invisible w-0" name="auth-form" type="radio" value="Login"/> */}
                          </label>
                          <div
                            onClick={() => navigate("/signup")}
                            className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-background-light has-[:checked]:shadow-md has-[:checked]:text-[#101c22] dark:has-[:checked]:bg-slate-700 dark:has-[:checked]:text-slate-50 text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal transition-all"
                          >
                            <span className="truncate">Sign Up</span>
                            <input
                              className="invisible w-0"
                              name="auth-form"
                              type="radio"
                              value="Sign Up"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-center px-4">
                        <h1 className="text-3xl font-bold text-[#101c22] dark:text-white">
                          Create Your Account
                        </h1>
                        <p
                          className="mt-2 text-sm text-slate-600 dark:text-slate-400 font-medium text-primary hover:underline"
                          onClick={() => navigate("/login")}
                        >
                          Already have an account? Log In
                        </p>
                      </div>
                      <div className="flex flex-col gap-4 px-4">
                        <label className="flex flex-col min-w-40 flex-1">
                          <p className="text-sm font-medium leading-normal pb-2 dark:text-slate-300">
                            Full Name
                          </p>
                          <div className="flex w-full flex-1 items-stretch rounded-lg">
                            <div className="text-slate-400 flex border border-slate-300 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 items-center justify-center px-[15px] rounded-l-lg border-r-0">
                              <span className="material-symbols-outlined text-[20px]">
                                person
                              </span>
                            </div>
                            <input
                              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#101c22] dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 focus:border-primary/80 dark:focus:border-primary/80 h-12 placeholder:text-slate-400 p-[15px] rounded-l-none text-base font-normal leading-normal"
                              placeholder="Enter your username"
                              type="text"
                              // value=""
                            />
                          </div>
                        </label>
                        <label className="flex flex-col min-w-40 flex-1">
                          <p className="text-sm font-medium leading-normal pb-2 dark:text-slate-300">
                            Email Address
                          </p>
                          <div className="flex w-full flex-1 items-stretch rounded-lg">
                            <div className="text-slate-400 flex border border-slate-300 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 items-center justify-center px-[15px] rounded-l-lg border-r-0">
                              <span className="material-symbols-outlined text-[20px]">
                                mail
                              </span>
                            </div>
                            <input
                              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#101c22] dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 focus:border-primary/80 dark:focus:border-primary/80 h-12 placeholder:text-slate-400 p-[15px] rounded-l-none text-base font-normal leading-normal"
                              placeholder="Enter your email"
                              type="email"
                              // value=""
                            />
                          </div>
                        </label>
                        <div className="flex flex-col min-w-40 flex-1">
                          <p className="text-sm font-medium leading-normal pb-2 dark:text-slate-300">
                            Password
                          </p>
                          <div className="flex w-full flex-1 items-stretch rounded-lg">
                            <div className="text-slate-400 flex border border-slate-300 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 items-center justify-center px-[15px] rounded-l-lg border-r-0">
                              <span className="material-symbols-outlined text-[20px]">
                                lock
                              </span>
                            </div>
                            <input
                              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#101c22] dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 focus:border-primary/80 dark:focus:border-primary/80 h-12 placeholder:text-slate-400 p-[15px] rounded-l-none text-base font-normal leading-normal"
                              placeholder="Enter your password"
                              type="password"
                              // value=""
                            />
                          </div>
                          <div className="mt-2 space-y-2 px-1">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-400 w-[50%]"></div>
                              </div>
                              <p className="text-xs font-medium text-orange-500">
                                Medium
                              </p>
                            </div>
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                              <li className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-green-500 text-sm">
                                  check_circle
                                </span>{" "}
                                8+ characters
                              </li>
                              <li className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-green-500 text-sm">
                                  check_circle
                                </span>{" "}
                                1 number
                              </li>
                              <li className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-orange-400 text-sm">
                                  radio_button_unchecked
                                </span>{" "}
                                1 uppercase
                              </li>
                              <li className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-orange-400 text-sm">
                                  radio_button_unchecked
                                </span>{" "}
                                1 special character
                              </li>
                            </ul>
                          </div>
                        </div>
                        <label className="flex flex-col min-w-40 flex-1">
                          <div className="flex items-center pb-2">
                            <p className="text-sm font-medium leading-normal dark:text-slate-300">
                              Phone Number
                            </p>
                            <span className="ml-2 text-xs text-slate-400 dark:text-slate-500">
                              (Optional)
                            </span>
                          </div>
                          <div className="flex w-full flex-1 items-stretch rounded-lg">
                            <div className="text-slate-400 flex border border-slate-300 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 items-center justify-center px-[15px] rounded-l-lg border-r-0">
                              <span className="material-symbols-outlined text-[20px]">
                                phone
                              </span>
                            </div>
                            <input
                              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#101c22] dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white dark:bg-slate-800 dark:border-slate-600 focus:border-primary/80 dark:focus:border-primary/80 h-12 placeholder:text-slate-400 p-[15px] rounded-l-none text-base font-normal leading-normal"
                              placeholder="+977 987654321"
                              type="tel"
                              value=""
                            />
                          </div>
                        </label>
                        <div className="flex flex-col min-w-40 flex-1">
                          <p className="text-sm font-medium leading-normal pb-2 dark:text-slate-300">
                            I am a...
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            <label className="flex cursor-pointer rounded-lg border border-slate-300 dark:border-slate-600 p-3 has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary/50 has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10 transition-all">
                              <input
                                className="form-radio text-primary focus:ring-primary/50"
                                name="user-role"
                                type="radio"
                              />
                              <span className="ml-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                Patient
                              </span>
                            </label>
                            <label className="flex cursor-pointer rounded-lg border border-slate-300 dark:border-slate-600 p-3 has-[:checked]:border-primary has-[:checked]:ring-2 has-[:checked]:ring-primary/50 has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10 transition-all">
                              <input
                                className="form-radio text-primary focus:ring-primary/50"
                                name="user-role"
                                type="radio"
                              />
                              <span className="ml-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                                Healthcare Provider
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="space-y-3 pt-2 px-1">
                          <label className="flex items-start">
                            <input
                              className="form-checkbox h-4 w-4 rounded text-primary border-slate-400 focus:ring-primary/50 mt-0.5"
                              type="checkbox"
                            />
                            <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">
                              I agree to the{" "}
                              <a
                                className="font-medium text-primary hover:underline"
                                href="#"
                              >
                                Terms and Conditions
                              </a>
                              .
                            </span>
                          </label>
                          <label className="flex items-start">
                            <input
                              className="form-checkbox h-4 w-4 rounded text-primary border-slate-400 focus:ring-primary/50 mt-0.5"
                              type="checkbox"
                            />
                            <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">
                              I acknowledge receipt of the{" "}
                              <a
                                className="font-medium text-primary hover:underline"
                                href="#"
                              >
                                HIPAA Privacy Notice
                              </a>
                              .
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg bg-red-100 dark:bg-red-500/20 p-3 mx-4">
                        <span className="material-symbols-outlined text-red-600 dark:text-red-400">
                          error
                        </span>
                        <p className="text-sm text-red-800 dark:text-red-300">
                          An account with this email already exists.
                        </p>
                      </div>
                      <div className="flex flex-col gap-3 px-4 pt-2">
                        <button
                          className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-sm transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark"
                          onClick={() => navigate("/verification")}
                        >
                          Create Account
                        </button>
                      </div>
                      <div className="flex flex-col gap-4 px-4">
                        <div className="relative flex items-center justify-center">
                          <div className="absolute inset-x-0 h-px bg-slate-200 dark:bg-slate-700"></div>
                          <span className="relative bg-background-light dark:bg-background-dark px-3 text-sm text-slate-500 dark:text-slate-400">
                            Or sign up with
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white dark:bg-slate-800 dark:border-slate-600 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm transition-colors hover:bg-slate-50 dark:hover:bg-slate-700">
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
                            <span>Google</span>
                          </button>
                          <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white dark:bg-slate-800 dark:border-slate-600 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm transition-colors hover:bg-slate-50 dark:hover:bg-slate-700">
                            <span className="material-symbols-outlined text-base">
                              key
                            </span>
                            <span>SSO</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-amber-100 dark:bg-amber-900/30 p-4 border-t border-amber-200 dark:border-amber-800/50">
            <div className="max-w-4xl mx-auto flex items-start gap-3">
              <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 mt-0.5">
                warning
              </span>
              <div className="text-sm text-amber-800 dark:text-amber-200">
                <p className="font-bold">Medical Disclaimer</p>
                <p>
                  This platform provides AI-driven assistance and is not a
                  substitute for professional medical advice, diagnosis, or
                  treatment. Always seek the advice of your physician or other
                  qualified health provider with any questions you may have
                  regarding a medical condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SignUp;
