import React from "react";

const RecentDiagnosis = () => {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
      <div className="flex justify-between items-center">
        <h3 className=" text-lg font-semibold dark:text-secondary">
          Recent Diagnoses / AI Analysis
        </h3>
        <a
          className="text-sm font-medium text-primary hover:underline"
          href="#"
        >
          View all
        </a>
      </div>
      <ul className="flex flex-col gap-3">
        <li className="flex items-start gap-4">
          <div className="flex items-center justify-center size-9 rounded-full bg-primary/10 mt-1">
            <span className="material-symbols-outlined text-primary text-xl">
              science
            </span>
          </div>
          <div>
            <p className="font-medium dark:text-secondary">
              Blood Panel Results
            </p>
            <p className="text-sm text-text-light-secondary dark:text-secondary">
              AI analysis: All markers within normal range.
            </p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="flex items-center justify-center size-9 rounded-full bg-secondary/20 mt-1">
            <span className="material-symbols-outlined text-secondary text-xl">
              dermatology
            </span>
          </div>
          <div>
            <p className="font-medium dark:text-secondary">
              Skin Lesion Analysis
            </p>
            <p className="text-sm text-text-light-secondary dark:text-secondary">
              AI analysis: Low probability of malignancy. Follow-up recommended.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RecentDiagnosis;
