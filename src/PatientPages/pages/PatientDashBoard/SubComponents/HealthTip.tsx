import React from "react";

const HealthTip = () => {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
      <h3 className="text-lg font-semibold dark:text-secondary">
        Health Tips / AI Recommendations
      </h3>
      <ul className="flex flex-col gap-3">
        <li className="flex items-start gap-4">
          <div className="flex items-center justify-center size-9 rounded-full bg-primary/10 mt-1 flex-shrink-0">
            <span className="material-symbols-outlined text-primary text-xl">
              local_dining
            </span>
          </div>
          <div>
            <p className="font-medium text-sm dark:text-secondary">
              Consider reducing sodium intake to better manage blood pressure.
            </p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="flex items-center justify-center size-9 rounded-full bg-secondary/20 mt-1 flex-shrink-0">
            <span className="material-symbols-outlined text-secondary text-xl">
              directions_walk
            </span>
          </div>
          <div>
            <p className="font-medium text-sm dark:text-secondary">
              Your activity levels were low yesterday. Try a 20-minute walk
              today.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HealthTip;
