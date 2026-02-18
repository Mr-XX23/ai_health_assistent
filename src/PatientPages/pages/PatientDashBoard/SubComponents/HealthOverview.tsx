import React from "react";

const HealthOverview = () => {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold dark:text-secondary">
            Health Overview
          </h3>
          <p className="text-sm text-text-light-secondary dark:text-white">
            Your wellness at a glance.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-green-500 text-sm">
            verified
          </span>
          <span className="text-sm font-medium dark:text-secondary">
            Last check-up: 08/15/2023
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around gap-6 text-center">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              className="text-border-light dark:text-border-dark"
              cx="50"
              cy="50"
              fill="transparent"
              r="45"
              stroke="currentColor"
              stroke-width="8"
            ></circle>
            <circle
              className="text-primary"
              cx="50"
              cy="50"
              fill="transparent"
              r="45"
              stroke="currentColor"
              stroke-dasharray="283"
              stroke-dashoffset="56"
              stroke-linecap="round"
              stroke-width="8"
            ></circle>
          </svg>
          <div className="absolute flex flex-col">
            <span className="text-3xl font-bold dark:text-secondary">85</span>
            <span className="text-xs text-text-light-secondary dark:text-secondary">
              Health Score
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
              <span className="material-symbols-outlined text-primary dark:text-secondary">
                blood_pressure
              </span>
            </div>
            <div>
              <p className="font-semibold dark:text-secondary">
                Blood Pressure
              </p>
              <p className="text-sm text-text-light-secondary dark:text-white">
                120/80 mmHg
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-full bg-secondary/20">
              <span className="material-symbols-outlined text-secondary">
                cardiology
              </span>
            </div>
            <div>
              <p className="font-semibold dark:text-secondary">Heart Rate</p>
              <p className="text-sm text-text-light-secondary dark:text-white">
                72 bpm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthOverview;
