import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
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

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="xl:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-slate-800 shadow"
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
      <div
        className={`
          fixed xl:static
          top-0 left-0
          h-full
          w-[260px]
          bg-white dark:bg-slate-900
          border-r border-slate-200 dark:border-slate-800
          transform transition-transform duration-300
          z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          xl:translate-x-0
        `}
      >
        <div className="flex h-full flex-col justify-between p-4">
          {/* Top Section */}
          <div>
            {/* Profile */}
            <div className="flex gap-3 items-center mb-6">
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuCu3TXkUbnmkqQM2vrTukpxkg2kcYLRa8is5yU2MnAFDq_ubtln3EejLIBDKIi7NA7H8cszbwZUFTMebOpWaIpkjgWxfgD7qmlkJHVBsActBPAr-G89mQNzRjc40LjfCUBCl6DvvvZk5fsC1ACBpVWWV9hnvqGZKRQfEZnlx2MutP3m_JXKeNDsGaOoC1i0ybyXjt6hkknFzs0UYM9ahh5K2vgulldoxq_Bnkqb2QdkCcD3n4SYyfxsBOVkhvlEsZbbuNqEywPmR2gt)]"></div>
              <div>
                <h1 className="text-base font-medium text-slate-800 dark:text-slate-100">
                  Dr. Emily Carter
                </h1>
                <p className="text-sm text-primary dark:text-secondary">
                  Cardiologist
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                    ${
                      isActive
                        ? "bg-primary/20 text-black dark:bg-blue-900/30 dark:text-blue-100"
                        : "text-black/60 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  <span className="material-symbols-outlined text-xl">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-2">
            <NavLink
              to="/docter-settings"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-medium">Settings</span>
            </NavLink>

            <NavLink
              to="#"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              <span className="material-symbols-outlined">help_outline</span>
              <span className="text-sm font-medium">Help</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
