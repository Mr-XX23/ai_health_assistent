const Qns = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-primary/10 dark:bg-primary/20   p-8 sm:p-12 rounded-xl text-center">
        <h2 className="text-3xl font-black text-primary dark:text-white">
          Not sure which plan is right for you?
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-subtext-light dark:text-subtext-dark">
          Explore MediSecure with a personalized demo or a 14-day free trial of
          our Premium plan. No credit card required.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="flex min-w-[84px] w-full sm:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-accent text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
            <span className="truncate">Request a Demo</span>
          </button>
          <button className="flex min-w-[84px] w-full sm:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-background-light dark:bg-slate-700 text-base font-bold leading-normal tracking-[0.015em] hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
            <span className="truncate">Start Free Trial</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Qns;
