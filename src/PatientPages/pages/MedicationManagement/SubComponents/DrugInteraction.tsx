import React from "react";

const DrugInteraction = () => {
  return (
    <div className="col-span-12 xl:col-span-4 flex flex-col gap-6">
      <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
        <h3 className="text-lg font-semibold mb-4 dark:text-secondary">
          Drug Interaction Checker
        </h3>
        <p className="text-sm text-text-light-secondary dark:text-white mb-4">
          Check for potential interactions between your current medications and
          a new one.
        </p>
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium mb-1 block dark:text-secondary">
              Current Medications
            </label>
            <div className="p-3 rounded-lg bg-background-light dark:text-white dark:bg-background-dark text-sm">
              Lisinopril, Atorvastatin, Metformin
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block dark:text-secondary">
              New Medication
            </label>
            <input
              className="form-input w-full rounded-lg bg-background-light dark:bg-background-dark placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary h-10 border-none px-4 text-sm dark:text-white"
              id="new-med"
              placeholder="e.g., Ibuprofen"
              type="text"
            />
          </div>
          <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold w-full hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-base">science</span>
            <span>Check Interactions</span>
          </button>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex dark:text-white items-start gap-3 p-3 rounded-lg bg-warning-light/10 text-warning-dark dark:text-warning-light border border-warning-light/20">
            <span className="material-symbols-outlined text-warning-light mt-0.5">
              warning
            </span>
            <div className="flex flex-col">
              <p className=" text-sm">Moderate Interaction</p>
              <p className="text-xs">
                Atorvastatin &amp; Grapefruit Juice: May increase risk of side
                effects. Consult your doctor.
              </p>
            </div>
          </div>
          <div className="flex dark:text-white items-start gap-3 p-3 rounded-lg bg-critical-light/10 text-critical-dark dark:text-critical-light border border-critical-light/20">
            <span className="dark:text-white material-symbols-outlined text-critical-light mt-0.5">
              dangerous
            </span>
            <div className="flex flex-col">
              <p className="font-semibold text-sm dark:text-white">
                Critical Interaction
              </p>
              <p className="text-xs dark:text-white">
                Lisinopril &amp; Potassium Supplements: Can lead to high
                potassium levels. Avoid combination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugInteraction;
