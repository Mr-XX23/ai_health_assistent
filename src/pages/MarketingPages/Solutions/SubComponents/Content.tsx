const Content = () => {
  return (
    <>
      <section className="mt-20 sm:mt-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-primary-light">
            How Our Solutions Address Real-World Challenges
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-md text-text-secondary-light">
            Follow the journey from clinical challenge to successful outcome
            with MediSecure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col rounded-xl dark:bg-[#314158] shadow-sm overflow-hidden ">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 dark:bg-secondary/50 rounded-full text-primary-light  dark:text-secondary-light">
                  <span className="material-symbols-outlined">
                    hourglass_empty
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-primary-light">
                  The Challenge: Overcoming Diagnostic Delays
                </h3>
              </div>
              <p className="text-text-primary-light">
                A busy hospital department faced significant delays in analyzing
                patient data, impacting wait times and care delivery.
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-xl dark:bg-[#314158] shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 dark:bg-secondary/50 rounded-full text-primary-light">
                  <span className="material-symbols-outlined">
                    precision_manufacturing
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-primary-light">
                  The MediSecure Solution: AI-Powered Analysis
                </h3>
              </div>
              <p className="text-text-primary-light">
                Our AI assistant was integrated to rapidly process and highlight
                key insights from patient data, streamlining the diagnostic
                process.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col sm:flex-row items-start gap-6 rounded-xl dark:bg-[#314158] shadow-sm overflow-hidden p-6">
            <div className="p-3 bg-primary/10 dark:bg-secondary/50 rounded-full text-primary-light">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-text-primary-light">
                The Outcome: Measurable Improvements
              </h3>
              <p className="mt-2 text-text-primary-light">
                With MediSecure, the department achieved a 40% reduction in
                diagnostic turnaround time and a 15% increase in accuracy,
                leading to better patient care and resource allocation.
              </p>
              <button className="mt-4 flex items-center gap-2 text-light font-bold text-sm cursor-pointer">
                <span>Learn More</span>
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
