import React from "react";

const EndingContent = () => {
  return (
    <div>
      <section className="mt-20 sm:mt-28 bg-background-light rounded-xl p-10 lg:p-16 text-center max-w-5xl mx-auto border border-border-light">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-primary-light">
          Ready to Revolutionize Your Practice?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary-light">
          Discover how MediSecure can be tailored to meet your specific clinical
          needs. Schedule a personalized demo with our team today.
        </p>
        <div className="mt-10">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:opacity-90 transition-opacity">
            <span className="truncate">Request a Demo</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default EndingContent;
