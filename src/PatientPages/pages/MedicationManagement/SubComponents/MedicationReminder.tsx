import React from "react";

const MedicationReminder = () => {
  return (
    <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
      <h3 className="text-lg font-semibold mb-4 dark:text-secondary">
        Medication Reminders
      </h3>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-ce   nter p-3 rounded-lg bg-background-light dark:bg-background-dark">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary dark:text-green-400c fill">
              check_circle
            </span>
            <div>
              <p className="font-medium  dark:text-secondary">
                Lisinopril (10mg)
              </p>
              <p className="text-sm text-text-light-secondary dark:text-secondary">
                Taken at 8:00 AM
              </p>
            </div>
          </div>
          <span className="text-sm font-medium text-text-light-secondary dark:text-secondary">
            Morning
          </span>
        </div>
        <div className="flex justify-between items-center p-3 rounded-lg bg-background-light dark:bg-background-dark">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-yellow-400 animate-pulse">
              notifications_active
            </span>
            <div>
              <p className="font-medium dark:text-secondary">
                Metformin (500mg)
              </p>
              <p className="text-sm text-text-light-secondary dark:text-secondary">
                Due now
              </p>
            </div>
          </div>
          <button className="rounded-lg h-8 px-3 bg-primary text-white text-xs font-bold hover:opacity-90 transition-opacity">
            Mark as Taken
          </button>
        </div>
        <div className="flex justify-between items-center p-3 rounded-lg bg-background-light dark:bg-background-dark">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-text-light-secondary dark:text-primary">
              alarm
            </span>
            <div>
              <p className="font-medium dark:text-secondary">
                Atorvastatin (20mg)
              </p>
              <p className="text-sm text-text-light-secondary dark:text-secondary">
                Due at 9:00 PM
              </p>
            </div>
          </div>
          <span className="text-sm font-medium text-text-light-secondary dark:text-secondary">
            Evening
          </span>
        </div>
      </div>
    </div>
  );
};

export default MedicationReminder;
