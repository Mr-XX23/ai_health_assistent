const Hero = () => {
  return (
    <div>
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tighter">
            The Future of Healthcare, Delivered Today.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-subtext-light dark:text-subtext-dark">
            MediSecure’s AI-powered solutions empower providers and improve
            patient outcomes. Discover how our innovative technology can
            transform your practice and deliver a new standard of care.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-accent text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
              <span className="truncate">Request a Demo</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
