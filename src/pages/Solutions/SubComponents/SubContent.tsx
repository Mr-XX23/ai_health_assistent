import React from "react";

const SubContent = () => {
  return (
    <>
      <section className="mt-20 sm:mt-28 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-primary-light">
            Trusted by Healthcare Professionals
          </h2>
        </div>
        <div className="p-8 rounded-xl bg-background-light border border-border-light">
          <div className="flex flex-col items-center text-center">
            <img
              className="w-20 h-20 rounded-full object-cover mb-4"
              data-alt="Photo of a smiling female doctor in a white coat."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-zP1AeKsSRGMWneccxbYhohbErv6z0q1TtUxl1GAvg_bgLBgIFvNaM_4At-ZRdkq5pGup--oVB2Fj6sDkBjvFZMl0f_8rbZBHRLxV_oTwXEd62NWXMW2uWIn2kIcqKlMMG8ZTCZGCnUXhUEePboY-6w3u7kwyJPiRJfEBkvuKIlz7ZphObtJlRFCdSWu9NmzDcCupiiWUYFTMUaJzdvBshKEMPL_V6DobPvEQVfmWLu87ahaZXRrZYMGC2J4r5beyk-Qo-pnTQ3C_"
            />
            <blockquote className="text-xl italic text-text-primary-light">
              "MediSecure has become an indispensable part of our workflow. The
              AI assistant saves us hours daily, allowing us to focus more on
              patient interaction and critical decision-making."
            </blockquote>
            <footer className="mt-6">
              <p className="font-bold text-text-primary-light">
                Dr. Eleanor Vance
              </p>
              <p className="text-sm text-text-secondary-light">
                Head of Cardiology, General Hospital
              </p>
            </footer>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            <button
              aria-label="Testimonial 1"
              className="w-3 h-3 rounded-full bg-primary"
            ></button>
            <button
              aria-label="Testimonial 2"
              className="w-3 h-3 rounded-full bg-border-light hover:bg-primary/50"
            ></button>
            <button
              aria-label="Testimonial 3"
              className="w-3 h-3 rounded-full bg-border-light hover:bg-primary/50"
            ></button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubContent;
