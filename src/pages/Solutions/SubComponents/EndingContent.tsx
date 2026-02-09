import { NavLink } from "react-router";

const EndingContent = () => {
  return (
    <div>
      <section className="mt-20 sm:mt-28 rounded-xl p-10 lg:p-16 text-center max-w-5xl mx-auto dark:bg-[#314158] background--light shadow-lg">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-light">
          Ready to Revolutionize Your Practice?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray">
          Discover how MediSecure can be tailored to meet your specific clinical
          needs. Schedule a personalized demo with our team today.
        </p>
        <div className="mt-10">
          <NavLink
            to={"/message"}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary dark:bg-secondary/80 text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:opacity-90 transition-opacity"
          >
            <span className="truncate">Request a Demo</span>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default EndingContent;
