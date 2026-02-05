const SystemProcess = () => {
  return (
    <>
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20"
        id="ehr"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-primary dark:text-secondary">
              Seamless Data, Unified Care
            </h2>
            <p className="text-subtext-light dark:text-subtext-dark text-lg">
              Break down data silos. MediSecure securely syncs with existing
              Electronic Health Record (EHR) systems, ensuring a single source
              of truth for patient data. Our platform promotes interoperability,
              streamlines clinical workflows, and provides a holistic view of
              the patient journey.
            </p>
            <div className="flex min-w-[84px] max-w-[480px] w-fit">
              <button className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-secondary text-white text-base font-bold tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                <span className="truncate">Learn About Integration</span>
              </button>
            </div>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl md:order-1 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuAYtTFPwIaZFJHyQQZZJzHD9GiwXd6hwj32QqH6yRs6Z5fd9V88Yq1zGFXXb7FpABPntuQl3rrFX9HEiZbHe8XQdYgoguf-H17WLv266FemhzbgP_hi-OsZfwnOBbONTeptWHCaXnaNgKPOeufwWrj25JBoN04AZlG0Uwffp8HmegAWZNX0MwTkZlwK-FWi0HOeB196HSfVArjHA_4ev3pt0lmfiHh5-1AgPnKgu6K5MRPC2zegBuhvjYoKdIOdsxUFHbw_wT-K6pjl)]"
            data-alt="Abstract visualization of interconnected data points and networks."
          ></div>
        </div>
        <div className="mt-16 bg-slate-100 dark:bg-slate-800 p-8 rounded-xl">
          <h3 className="text-2xl font-bold tracking-tight text-center">
            A True Single Source of Truth
          </h3>
          <p className="text-subtext-light dark:text-subtext-dark mt-2 text-center max-w-2xl mx-auto">
            Our integration architecture ensures that data from all MediSecure
            solutions flows back into your core EHR, creating a comprehensive
            patient record.
          </p>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="text-center p-4">
              <p className="text-lg font-bold">AI Diagnostics</p>
              <span className="material-symbols-outlined text-4xl text-primary dark:text-secondary my-2">
                arrow_downward
              </span>
            </div>
            <div className="text-center p-4">
              <p className="text-lg font-bold">Telemedicine Notes</p>
              <span className="material-symbols-outlined text-4xl text-primary dark:text-secondary my-2">
                arrow_downward
              </span>
            </div>
            <div className="flex items-center justify-center p-6 bg-primary/10 dark:bg-secondary/10  dark:bg-primary/20 rounded-full my-4 md:my-0">
              <span className="material-symbols-outlined text-5xl text-primary dark:text-secondary">
                database
              </span>
            </div>
            <div className="text-center p-4">
              <p className="text-lg font-bold">Medication Logs</p>
              <span className="material-symbols-outlined text-4xl text-primary dark:text-secondary my-2">
                arrow_upward
              </span>
            </div>
            <div className="text-center p-4">
              <p className="text-lg font-bold">Patient Data</p>
              <span className="material-symbols-outlined text-4xl text-primary dark:text-secondary my-2">
                arrow_upward
              </span>
            </div>
          </div>
          <p className="text-center mt-4 font-bold text-xl">
            Your Existing EHR System
          </p>
        </div>
      </section>
    </>
  );
};
export default SystemProcess;
