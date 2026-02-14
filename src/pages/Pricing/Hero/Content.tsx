type Props = {
  isAnnual: boolean;
};

const Content = ({ isAnnual }: Props) => {
  return (
    <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-8 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-primary dark:text-secondary ">
            Basic
          </h3>
          <p className="mt-2 text-subtext-light dark:text-subtext-dark">
            For individual practitioners and small clinics getting started.
          </p>
          <div className="mt-6">
            <span className="text-5xl font-black">
              {isAnnual ? "Rs.799" : "Rs.999"}
            </span>
            <span className="text-lg font-medium text-subtext-light dark:text-subtext-dark">
              {isAnnual ? "/ provider / year" : "/ provider / month"}
            </span>
          </div>
          <button className="mt-6 w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-secondary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
            <span className="truncate">Choose Basic</span>
          </button>
          <ul className="mt-8 space-y-4 grow">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary mt-1">
                check
              </span>
              <div>
                <h4 className="font-semibold">Secure Telemedicine</h4>
                <p className="text-sm text-subtext-light dark:text-subtext-dark">
                  Up to 50 consultations/month
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary mt-1">
                check
              </span>
              <div>
                <h4 className="font-semibold">Medication Management</h4>
                <p className="text-sm text-subtext-light dark:text-subtext-dark">
                  Basic adherence tracking
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary mt-1">
                check
              </span>
              <div>
                <h4 className="font-semibold">Standard EHR Integration</h4>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary mt-1">
                check
              </span>
              <div>
                <h4 className="font-semibold">Email &amp; Chat Support</h4>
              </div>
            </li>
          </ul>
        </div>
        <div className="border-2 border-primary dark:border-secondary rounded-xl p-8 flex flex-col h-full relative ring-4 ring-primary/10 dark:ring-secondary/10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary dark:bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
            Most Popular
          </div>
          <h3 className="text-2xl font-bold text-primary dark:text-secondary">
            Premium
          </h3>
          <p className="mt-2 text-subtext-light dark:text-subtext-dark">
            For growing practices that need advanced AI capabilities.
          </p>
          <div className="mt-6">
            <span className="text-5xl font-black">
              {isAnnual ? "Rs.1599" : "Rs.1999"}
            </span>
            <span className="text-lg font-medium text-subtext-light dark:text-subtext-dark">
              {isAnnual ? "/ provider / year" : "/ provider / month"}
            </span>
          </div>
          <button className="text-white mt-6 w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary dark:bg-secondary font-bold leading-normal tracking-[0.015em] hover:bg-opacity-10  transition-colors">
            <span className="truncate">Choose Premium</span>
          </button>
          <ul className="mt-8 space-y-4 grow">
            <li className="font-bold text-sm uppercase tracking-wider text-subtext-light dark:text-subtext-dark">
              Everything in Basic, plus:
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary dark:text-secondary mt-1">
                check_circle
              </span>
              <div>
                <h4 className="font-semibold">Unlimited Telemedicine</h4>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary dark:text-secondary mt-1">
                check_circle
              </span>
              <div>
                <h4 className="font-semibold">AI Diagnostics Suite</h4>
                <p className="text-sm text-subtext-light dark:text-subtext-dark">
                  Up to 100 scans/month
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary dark:text-secondary mt-1">
                check_circle
              </span>
              <div>
                <h4 className="font-semibold">Advanced Adherence Reporting</h4>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary dark:text-secondary mt-1">
                check_circle
              </span>
              <div>
                <h4 className="font-semibold">Priority Phone Support</h4>
              </div>
            </li>
          </ul>
        </div>
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-8 flex flex-col h-full bg-slate-100 dark:bg-slate-800/50">
          <h3 className="text-2xl font-bold text-primary dark:text-secondary ">
            Enterprise
          </h3>
          <p className="mt-2 text-subtext-light dark:text-subtext-dark">
            For large hospitals and healthcare systems with custom needs.
          </p>
          <div className="mt-6">
            <span className="text-4xl font-black">Custom Pricing</span>
          </div>
          <button className="mt-6 w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-accent text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
            <span className="truncate">Contact Sales</span>
          </button>
          <ul className="mt-8 space-y-4 grow">
            <li className="font-bold text-sm uppercase tracking-wider text-subtext-light dark:text-subtext-dark">
              Everything in Premium, plus:
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-accent mt-1">
                star
              </span>
              <div>
                <h4 className="font-semibold">Volume-based AI Diagnostics</h4>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-accent mt-1">
                star
              </span>
              <div>
                <h4 className="font-semibold">
                  Custom EHR &amp; API Integrations
                </h4>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-accent mt-1">
                star
              </span>
              <div>
                <h4 className="font-semibold">Dedicated Account Manager</h4>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-accent mt-1">
                star
              </span>
              <div>
                <h4 className="font-semibold">On-premise Deployment Options</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Content;
