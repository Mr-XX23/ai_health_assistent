const EndContent = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Our Commitment to Privacy
          </h2>
          <p className="mt-4 text-lg text-light">
            We believe that transparency is the foundation of trust. Our privacy
            policies are designed to be clear and straightforward.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
          <div className=" p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold ">Privacy Policy</h3>
            <p className="mt-2 text-gray-400">
              Learn how we collect, use, and protect your data in our
              comprehensive privacy policy.
            </p>
            <a
              className="mt-6 inline-block text-primary dark:text-secondary font-bold "
              href="#"
            >
              Read Policy <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className=" p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold">Terms of Service</h3>
            <p className="mt-2 text-gray-400">
              Understand your rights and responsibilities when using the
              MediSecure platform.
            </p>
            <a
              className="mt-6 inline-block text-primary dark:text-secondary  font-bold "
              href="#"
            >
              Read Terms <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndContent;
