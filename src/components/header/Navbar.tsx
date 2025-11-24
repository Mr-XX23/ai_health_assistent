import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="size-6 text-primary">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-[-0.015em] cursor-pointer" onClick={() => navigate("/")}>
                MediSecure
              </h2>
            </div>
            <div className="hidden md:flex flex-1 justify-center items-center gap-9">
              <button
                className="text-sm font-medium hover:text-primary dark:hover:text-secondary"
                onClick={() => navigate("/")}
              >
                Home
              </button>
              <button
                className="text-sm font-medium hover:text-primary dark:hover:text-secondary"
                onClick={() => navigate("/solutions")}
              >
                Solutions
              </button>
              <button
                className="text-sm font-medium hover:text-primary dark:hover:text-secondary"
                onClick={() => navigate("/analysis")}
              >
                AI Symptoms Analyser
              </button>
              <button
                className="text-sm font-medium hover:text-primary dark:hover:text-secondary"
                onClick={() => navigate("/features")}
              >
                Features
              </button>
              <button
                className="text-sm font-medium hover:text-primary dark:hover:text-secondary"
                onClick={() => navigate("/security")}
              >
                Security
              </button>
              <button
                className="text-sm font-medium hover:text-primary dark:hover:text-secondary"
                onClick={() => navigate("/pricing")}
              >
                Pricing
              </button>
              <button
                className="text-sm font-medium hover:text-primary dark:hover:text-secondary"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
            <div className="hidden md:flex gap-2">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                <span className="truncate">Request a Demo</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 dark:bg-slate-700 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                <span className="truncate">Login</span>
              </button>
            </div>
            <div className="md:hidden">
              <button className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
