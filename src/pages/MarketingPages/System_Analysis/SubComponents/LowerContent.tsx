const LowerContent = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Quantifiable Impact of AI Integration
          </h2>
          <p className="mt-4 text-lg dark:text-gray-400">
            The implementation of MediSecure's AI delivers measurable
            improvements across key areas of clinical practice, enhancing
            efficiency, accuracy, and patient care.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="dark:bg-slate-700 p-8 rounded-xl text-center flex flex-col items-center shadow-lg">
            <span className="material-symbols-outlined !text-5xl text-primary dark:text-secondary">
              speed
            </span>
            <p className="mt-4 text-5xl font-extrabold text-primary dark:text-secondary">
              40%
            </p>
            <h3 className="mt-2 text-lg font-semibold">
              Reduction in Diagnostic Time
            </h3>
            <p className="mt-2 dark:text-gray-400">
              AI-powered analysis accelerates the review process, allowing
              clinicians to reach diagnoses faster.
            </p>
          </div>
          <div className="dark:bg-slate-700 p-8 rounded-xl text-center flex flex-col items-center shadow-lg">
            <span className="material-symbols-outlined !text-5xl text-primary dark:text-secondary">
              check_circle
            </span>
            <p className="mt-4 text-5xl font-extrabold text-primary dark:text-secondary">
              25%
            </p>
            <h3 className="mt-2 text-lg font-semibold">
              Increase in Early Detection Rates
            </h3>
            <p className="mt-2 dark:text-gray-400">
              Our models identify subtle indicators often missed in early
              stages, improving patient prognosis.
            </p>
          </div>
          <div className="dark:bg-slate-700 p-8 rounded-xl text-center flex flex-col items-center shadow-lg">
            <span className="material-symbols-outlined text-primary dark:text-secondary">
              person_alert
            </span>
            <p className="mt-4 text-5xl font-extrabold text-primary dark:text-secondary">
              30%
            </p>
            <h3 className="mt-2 text-lg font-semibold">
              Decrease in Administrative Burden
            </h3>
            <p className="mt-2 dark:text-gray-400">
              Automation of routine tasks frees up valuable clinician time to
              focus on patient-centric care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowerContent;
