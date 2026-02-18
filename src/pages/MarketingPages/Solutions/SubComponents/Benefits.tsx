const Benefits = () => {
  return (
    <div>
      <section className="mt-20 sm:mt-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-primary-light dark:text-text-secondary-light">
            Core Benefits of the MediSecure Platform
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 dark:bg-secondary/90 text-light">
              <span className="material-symbols-outlined text-3xl">speed</span>
            </div>
            <h3 className="text-xl font-bold text-text-primary-light dark:text-text-secondary-light">
              Increased Efficiency
            </h3>
            <p className="mt-2 text-text-secondary-light">
              Automate routine tasks and data analysis to free up valuable
              clinical time. Experience up to a 30% reduction in admin time.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 dark:bg-secondary/90 text-light">
              <span className="material-symbols-outlined text-3xl">
                verified
              </span>
            </div>
            <h3 className="text-xl font-bold text-text-primary-light dark:text-text-secondary-light">
              Improved Patient Outcomes
            </h3>
            <p className="mt-2 text-text-secondary-light">
              Leverage AI for enhanced diagnostic accuracy and personalized
              treatment planning, leading to better care.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 dark:bg-secondary/90 text-light">
              <span className="material-symbols-outlined text-3xl">
                integration_instructions
              </span>
            </div>
            <h3 className="text-xl font-bold text-text-primary-light">
              Seamless Integration
            </h3>
            <p className="mt-2 text-text-secondary-light">
              Our platform integrates smoothly with your existing EHR and
              clinical systems, ensuring a frictionless workflow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
