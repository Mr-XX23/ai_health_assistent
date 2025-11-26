import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tighter text-primary">
            AI System Analysis
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-subtext-light">
            Explore the sophisticated technology, robust security measures, and
            innovative models that power the MediSecure platform, ensuring trust
            and transparency in every interaction.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
