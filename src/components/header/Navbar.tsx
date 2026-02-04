import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Solution", path: "/solutions" },
    { label: "AI Symptoms Analyser", path: "/analysis" },
    { label: "Features", path: "/features" },
    { label: "Security", path: "/security" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact Us", path: "/contact" },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center gap-4 ">
              <div className="size-6 text-primary ">
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
              <h2
                className="text-xl font-bold tracking-[-0.015em] cursor-pointer"
                onClick={() => navigate("/")}
              >
                MediSecure
              </h2>
            </div>

            <div className="hidden xl:flex flex-1 justify-center gap-9">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) => `
                    text-sm font-mediumn relative group
                    transition-colors duration-200 
                    ${
                      isActive
                        ? "text-black dark:text-white  "
                        : "text-primary dark:text-secondary cursor-pointer "
                    }
                    `}
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span
                        className={`
    absolute -bottom-1 left-0 h-0.5 w-full bg-primary transform transition-transform duration-500 origin-left
    ${isActive ? "scale-x-100  " : "scale-x-0 group-hover:scale-x-100 "}
  `}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="hidden xl:flex gap-2">
              <button className="h-10 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-opacity-90">
                Request a Demo
              </button>
              <button
                onClick={() => handleNavigate("/login")}
                className="h-10 px-4 rounded-lg bg-slate-200 dark:bg-slate-700 text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-600"
              >
                Login
              </button>
            </div>

            {/* for mobile */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigate(item.path)}
                  className={`
                    block w-full text-left text-sm font-medium
                    ${
                      location.pathname === item.path
                        ? "text-primary font-semibold"
                        : "hover:text-primary"
                    }
                    `}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 flex flex-col gap-2">
                <button className="h-10 rounded-lg bg-primary text-white text-sm font-bold">
                  Request a Demo
                </button>
                <button
                  onClick={() => handleNavigate("/login")}
                  className="h-10 rounded-lg bg-slate-200 dark:bg-slate-700 text-sm font-bold"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
