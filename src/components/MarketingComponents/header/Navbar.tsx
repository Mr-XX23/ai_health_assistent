import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { useAuth } from "../../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

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

  const handleLogout = async () => {
    await logout();
    navigate("/");
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 ">
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
                    clipRule="evenodd"
                    d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                    fill="currentColor"
                    fillRule="evenodd"
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
    absolute -bottom-1 left-0 h-0.5 w-full bg-primary dark:bg-secondary transform transition-transform duration-500 origin-left
    ${isActive ? "scale-x-100  " : "scale-x-0 group-hover:scale-x-100 "}
  `}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="hidden xl:flex gap-2">
              <button
                onClick={() => handleNavigate("/message")}
                className="h-10 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-opacity-90"
              >
                Request a Demo
              </button>
              {isAuthenticated ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="h-10 px-4 rounded-lg bg-slate-200 dark:bg-slate-700 text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-600"
                  >
                    Logout
                  </button>
                  <button
                    onClick={() => handleNavigate("/dashboard")}
                    className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-opacity-90 transition-colors"
                    title={user?.username || "Profile"}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      person
                    </span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleNavigate("/login")}
                  className="h-10 px-4 rounded-lg bg-slate-200 dark:bg-slate-700 text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-600"
                >
                  Login
                </button>
              )}
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
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) => `
                    block w-full text-left text-sm font-medium
                    ${
                      isActive
                        ? "text-primary dark:text-secondary font-semibold"
                        : "hover:text-primary dark:hover:text-secondary"
                    }
                    `}
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={() => handleNavigate("/message")}
                  className="h-10 rounded-lg bg-primary text-white text-sm font-bold "
                >
                  Request a Demo
                </button>
                {isAuthenticated ? (
                  <>
                    <button
                      onClick={handleLogout}
                      className="h-10 rounded-lg bg-slate-200 dark:bg-slate-700 text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-600"
                    >
                      Logout
                    </button>
                    <button
                      onClick={() => handleNavigate("/dashboard")}
                      className="h-10 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary text-sm font-bold flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        person
                      </span>
                      {user?.username || "Profile"}
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleNavigate("/login")}
                    className="h-10 rounded-lg bg-slate-200 dark:bg-slate-700 text-sm font-bold"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
