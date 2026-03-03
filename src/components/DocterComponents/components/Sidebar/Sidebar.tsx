import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", path: "/docter-dashboard", icon: "dashboard" },
    {
      label: "Appointments",
      path: "/docter-appointment",
      icon: "calendar_month",
    },
    { label: "Patients", path: "/docter-patient", icon: "group" },
    {
      label: "Consultation History",
      path: "/docter-consultation",
      icon: "history",
    },
    { label: "Reports", path: "/docter-report", icon: "bar_chart" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="xl:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-slate-800 shadow-md"
      >
        <span className="material-symbols-outlined">
          {isOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 xl:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          top-0 left-0
          h-screen
          w-[260px]
          flex-shrink-0
          bg-white dark:bg-slate-900
          border-r border-slate-200 dark:border-slate-800
          transition-transform duration-300 ease-in-out
          z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          xl:translate-x-0
        `}
      >
        <div className="flex h-full flex-col justify-between p-5">
          {/* Top Section */}
          <div>
            {/* Profile */}
            <div className="flex gap-3 items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-slate-300" />
              <div>
                <h1 className="text-base font-semibold text-slate-800 dark:text-white">
                  Dr. Emily Carter
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Cardiologist
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  <span className="material-symbols-outlined text-xl">
                    {item.icon}
                  </span>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-2">
            <NavLink
              to="/docter-settings"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              <span className="material-symbols-outlined">settings</span>
              Settings
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
