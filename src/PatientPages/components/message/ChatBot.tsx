import React from "react";
import { NavLink, useNavigate } from "react-router";

const ChatBot = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex-grow overflow-hidden">
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <!-- div Layout --> */}
        <div className="grid h-full grid-cols-1 gap-8 py-8 lg:grid-cols-2">
          {/* <!-- Left Panel (Input/Chat) --> */}
          <div className="flex h-full flex-col rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
            <div className="border-b border-border-light dark:border-border-dark p-4">
              <div className="flex gap-2 item-center">
                <NavLink
                  to={""}
                  className="flex items-center gap-3 pt-1 rounded-DEFAULT hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={handleGoBack}
                >
                  <span className=" material-symbols-outlined">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      className="w-6 h-6 fill-gray-800 dark:fill-gray-200"
                    >
                      <path d="M360-240 120-480l240-240 56 56-144 144h488v-160h80v240H272l144 144-56 56Z" />
                    </svg>
                  </span>
                </NavLink>

                <div className="text-lg font-bold text-primary dark:text-secondary ">
                  Symptom Checker
                </div>
              </div>
              <p className="text-sm text-black dark:text-white">
                Tell us how you're feeling, and our AI will help you understand
                the potential causes.
              </p>
            </div>
            {/* <!-- Chat Interface --> */}
            <div className="flex-grow space-y-6 overflow-y-auto p-4">
              {/* <!-- AI Greeting Message --> */}
              <div className="flex items-end gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0 flex items-center justify-center bg-primary/10 dark:bg-primary/20">
                  <span className="material-symbols-outlined text-primary dark:text-secondary">
                    smart_toy
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-1 items-start">
                  <p className="text-primary dark:text-secondary text-[13px] font-medium">
                    AI Assistant
                  </p>
                  <p className="text-black dark:text-white font-normal leading-normal flex max-w-md rounded-lg px-4 py-3 bg-background-light dark:bg-background-dark ">
                    Hello! I'm here to help you understand your symptoms. To
                    start, could you please tell me who this consultation is
                    for?
                  </p>
                </div>
              </div>
              {/* <!-- User Reply --> */}
              <div className="flex items-end gap-3 justify-end">
                <div className="flex flex-1 flex-col gap-1 items-end">
                  <p className="text-primary dark:text-secondary text-[13px] font-medium">
                    You
                  </p>
                  <p className="text-black dark:text-white font-normal leading-normal flex max-w-md rounded-lg px-4 py-3 bg-primary dark:bg-secondary text-white">
                    It's for me. I'm a 32-year-old male.
                  </p>
                </div>
              </div>
              {/* <!-- AI Follow-up --> */}
              <div className="flex items-end gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 shrink-0 flex items-center justify-center bg-primary/10 dark:bg-primary/20">
                  <span className="material-symbols-outlined text-primary dark:text-secondary">
                    smart_toy
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-1 items-start">
                  <p className="text-primary dark:text-secondary text-[13px] font-medium">
                    AI Assistant
                  </p>
                  <p className="text-black dark:text-white font-normal leading-normal flex max-w-md rounded-lg px-4 py-3 bg-background-light dark:bg-background-dark">
                    Thank you. What are your primary symptoms? You can describe
                    them or select from the options below.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-border-light dark:border-border-dark p-4 space-y-4">
              {/* <!-- Quick Reply Buttons --> */}
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 text-sm font-medium text-primary dark:text-secondary border border-primary/50 rounded-full bg-primary/10 hover:bg-primary/20">
                  Headache
                </button>
                <button className="px-4 py-2 text-sm font-medium text-primary dark:text-secondary border border-primary/50 rounded-full bg-primary/10 hover:bg-primary/20">
                  Fever
                </button>
                <button className="px-4 py-2 text-sm font-medium text-primary dark:text-secondary border border-primary/50 rounded-full bg-primary/10 hover:bg-primary/20">
                  Cough
                </button>
                <button className="px-4 py-2 text-sm font-medium text-primary dark:text-secondary border border-primary/50 rounded-full bg-primary/10 hover:bg-primary/20">
                  Sore Throat
                </button>
              </div>
              {/* <!-- Input Field --> */}
              <div className="relative">
                <input
                  className="w-full dark:text-white rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark py-2.5 pl-4 pr-12 text-sm focus:border-primary focus:ring-primary dark:placeholder-secondary-text-dark"
                  placeholder="Type your symptoms here..."
                  type="text"
                />
                <button className="absolute inset-y-0 right-0 flex items-center justify-center px-4 text-primary dark:text-secondary hover:text-primary dark:text-secondary/80">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
              <p className="text-xs text-center text-primary dark:text-secondary">
                Your personal data is encrypted and secure.{" "}
                <a
                  className="text-primary dark:text-secondary underline"
                  href="#"
                >
                  Learn more
                </a>
                .
              </p>
            </div>
          </div>
          {/* <!-- Right Panel (Analysis/Output) --> */}
          <div className="flex h-full flex-col space-y-6 overflow-y-auto rounded-lg bg-surface-light dark:bg-surface-dark p-6 border border-border-light dark:border-border-dark shadow-sm">
            {/* <!-- Progress Indicator --> */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-primary dark:text-secondary">
                  Diagnostic Progress
                </p>
                <span className="text-sm font-bold text-primary dark:text-secondary">
                  25%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-background-light dark:bg-background-dark w-[25%]">
                <div className="h-2 rounded-full bg-primary"></div>
              </div>
            </div>
            {/* <!-- Summary Card --> */}
            <div className="rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-4">
              <h4 className="font-bold text-primary dark:text-secondary mb-3">
                Your Summary
              </h4>
              <div className="space-y-2 text-sm text-black dark:text-white">
                <div className="flex justify-between">
                  <span className="text-black dark:text-white">Patient:</span>{" "}
                  <span>Self (32, Male)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black dark:text-white">Symptoms:</span>{" "}
                  <span>Awaiting input...</span>
                </div>
              </div>
            </div>
            {/* <!-- Preliminary Diagnosis --> */}
            <div className="flex-grow space-y-3">
              <h4 className="font-bold text-primary dark:text-secondary">
                Preliminary Diagnosis
              </h4>
              <p className="text-sm text-black dark:text-white">
                Please provide more symptoms for an initial analysis.
              </p>
              {/* <!-- Loading Skeleton --> */}
              <div className="space-y-2 animate-pulse">
                <div className="h-12 w-full rounded-lg bg-background-light dark:bg-background-dark"></div>
                <div className="h-12 w-full rounded-lg bg-background-light dark:bg-background-dark"></div>
                <div className="h-12 w-5/6 rounded-lg bg-background-light dark:bg-background-dark"></div>
              </div>
            </div>
            {/* <!-- Risk Stratification Meter --> */}
            <div className="space-y-3">
              <h4 className="font-bold text-primary dark:text-secondary">
                Urgency Level
              </h4>
              <div className="flex items-center gap-4 rounded-lg bg-gray-500/10 p-4">
                <span className="material-symbols-outlined text-2xl text-primary dark:text-secondary">
                  hourglass_empty
                </span>
                <p className="text-sm text-black dark:text-white">
                  The urgency level will be determined as you provide more
                  information.
                </p>
              </div>
            </div>
            {/* <!-- Next Steps CTA Block --> */}
            <div className="space-y-3">
              <h4 className="font-bold text-black dark:text-white">
                Next Steps
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-primary/40 dark:bg-secondary/55 px-4 py-3 text-sm font-bold dark:text-white">
                  <span className="material-symbols-outlined">
                    person_search
                  </span>{" "}
                  Find a Doctor
                </button>
                <button className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-accent-red/30 px-4 py-3 text-sm font-bold dark:text-white">
                  <span className="material-symbols-outlined">emergency</span>{" "}
                  Emergency Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
