import React from "react";
import { NavLink } from "react-router";

const Hero = () => {
  return (
    <>
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-black leading-tight tracking-tighter text-text-primary-light sm:text-5xl lg:text-6xl">
          Transforming Healthcare Decisions with AI-Powered Insights.
        </h1>
        <p className="mt-6 text-lg text-text-secondary-light">
          Empower your clinical workflow with intelligent assistance, leading to
          faster, more accurate patient outcomes.
        </p>
        <div className="mt-10">
          <NavLink
            to={"/message"}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary dark:bg-secondary text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:opacity-90 transition-opacity"
          >
            <span className="truncate">See Our Solutions in Action</span>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Hero;
