import React from "react";

const Hero = () => {
  return (
    <div className="col-span-12 flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                <span className="material-symbols-outlined text-primary">
                  medical_services
                </span>
              </div>
              <h3 className="text-lg font-bold dark:text-secondary">
                AI Symptom Checker
              </h3>
            </div>
            <p className="text-sm text-text-light-secondary dark:text-white leading-relaxed max-w-3xl">
              Analyze your symptoms with our AI to get instant health insights
              and guidance. Start a session now to understand your health better
              and receive personalized recommendations based on your input.
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold whitespace-nowrap hover:opacity-90 transition-opacity">
            <span>Start Symptom Check</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
