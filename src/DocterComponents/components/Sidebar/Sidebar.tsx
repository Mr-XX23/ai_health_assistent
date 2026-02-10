import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { lable: "Dashboard", path: "/docter-dashboard", icon: "dashboard" },
    {
      lable: "Appointments",
      path: "/docter-appointment",
      icon: "calendar_month",
    },
    { lable: "Patients", path: "/docter-patient", icon: "history" },
    {
      lable: "Consultation History",
      path: "/docter-consultation",
      icon: "group",
    },
    { lable: "Reports", path: "/docter-report", icon: "bar_chart" },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="flex h-full w-[260px] flex-col border-r border-slate-200 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="flex h-full flex-col justify-between p-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuCu3TXkUbnmkqQM2vrTukpxkg2kcYLRa8is5yU2MnAFDq_ubtln3EejLIBDKIi7NA7H8cszbwZUFTMebOpWaIpkjgWxfgD7qmlkJHVBsActBPAr-G89mQNzRjc40LjfCUBCl6DvvvZk5fsC1ACBpVWWV9hnvqGZKRQfEZnlx2MutP3m_JXKeNDsGaOoC1i0ybyXjt6hkknFzs0UYM9ahh5K2vgulldoxq_Bnkqb2QdkCcD3n4SYyfxsBOVkhvlEsZbbuNqEywPmR2gt)]"
                data-alt="Portrait of Dr. Emily Carter"
              ></div>
              <div className="flex flex-col">
                <h1 className="text-[#0d171b] dark:text-slate-100 text-base font-medium leading-normal">
                  Dr. Emily Carter
                </h1>
                <p className="text-primary dark:text-secondary  text-sm font-normal leading-normal">
                  Cardiologist
                </p>
              </div>
            </div>

            <div className="hidden xl:flex flex-col gap-2 mt-4">
              {navItems.map((item) => (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    ` flex items-center gap-3 px-3 py-2 rounded-lg transition-colours
  ${
    isActive
      ? " text-black bg-primary/20  dark:bg-blue-900/30 dark:text-blue-100"
      : "text-black/40    dark:text-white/50 dark:text-slate-1000 hover:bg-slate-300 dark:hover:bg-slate-800"
  }`
                  }
                >
                  <span className="material-symbols-outlined text-xl text-current">
                    {item.icon}
                  </span>
                  <p className="text-sm text-current font-medium">
                    {item.lable}
                  </p>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden xl:flex flex-col gap-1">
            <NavLink
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#0d171b] dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
              to="/docter-settings"
            >
              <span className="material-symbols-outlined text-xl!">
                settings
              </span>
              <p className="text-sm font-medium leading-normal">Settings</p>
            </NavLink>
            <NavLink
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#0d171b] dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
              to={""}
            >
              <span className="material-symbols-outlined text-xl!">
                help_outline
              </span>
              <p className="text-sm font-medium leading-normal">Help</p>
            </NavLink>
          </div>

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
                key={item.lable}
                to={item.path}
                className={({ isActive }) =>
                  ` flex items-center gap-3 px-3 py-2 rounded-lg transition-colours
  ${
    isActive
      ? " text-black bg-primary/20  dark:bg-blue-900/30 dark:text-blue-100"
      : "text-black/40    dark:text-white/50 dark:text-slate-1000 hover:bg-slate-300 dark:hover:bg-slate-800"
  }`
                }
              >
                <span className="material-symbols-outlined text-xl text-current">
                  {item.icon}
                </span>
                <p className="text-sm text-current font-medium">{item.lable}</p>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
