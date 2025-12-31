import React from "react";
import AppLayout from "../../../layout/AppLayout/AppLayout";
import { useNavigate } from "react-router";

const PasswordUpdated = () => {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <>
        <div className="font-display">
          <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
              <div className="px-4 md:px-10 lg:px-20 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
                  <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-4 md:px-10 py-3">
                    <div className="flex items-center gap-4 text-slate-800 dark:text-slate-200">
                      <div className="size-6 text-primary">
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
                      <h2 className="text-slate-800 dark:text-slate-200 text-lg font-bold leading-tight tracking-[-0.015em]">
                        AI Healthcare Assistant
                      </h2>
                    </div>
                  </header>
                  <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 md:py-24">
                    <div className="w-full max-w-lg rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark p-8 md:p-12 text-center shadow-sm">
                      <div className="flex justify-center mb-6">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-success">
                          <span className="material-symbols-outlined !text-5xl">
                            check_circle
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 p-4">
                        <p className="text-slate-800 dark:text-slate-100 text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                          Password Updated Successfully
                        </p>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                        Your password has been changed. Please use your new
                        password the next time you log in to access your account
                        securely.
                      </p>
                      <div className="flex px-4 py-5 justify-center">
                        <button
                          className="flex w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-slate-50 text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors"
                          onClick={() => navigate("/login")}
                        >
                          <span
                            className="truncate"
                            onClick={() => navigate("/login")}
                          >
                            Proceed to Login
                          </span>
                        </button>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-500 mt-4">
                        For your security, you have been logged out of all other
                        active sessions.
                      </p>
                    </div>
                  </main>
                  <footer className="w-full mt-auto py-6 border-t border-slate-200 dark:border-slate-800 text-center">
                    <div className="flex justify-center gap-6 text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                      <span className="" onClick={() => navigate("/contact")}>
                        Help Center
                      </span>
                      <span onClick={() => navigate("/contact")}>
                        Contact Support
                      </span>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </AppLayout>
  );
};

export default PasswordUpdated;
