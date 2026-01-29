import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import Profile from "../Profile/Profile";
import Logo from "../Logo/Logo";

const Siderbar = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const navItems = [
    { lable: "Dashboard", path: "/admin", icon: "dashboard" },
    { lable: "Patients", path: "/admin-patient-page", icon: "history" },
    { lable: "Consultation History", path: "", icon: "group" },
    { lable: "Reports", path: "", icon: "bar_chart" },
    { lable: "Settings", path: "", icon: "settings" },
  ];

  return (
    <div>
      <div className="hidden xl:flex h-screen w-64 flex-col justify-between border-r border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-4 sticky top-0">
        <div className="flex flex-col gap-8">
          <Logo />

          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.lable}
                to={item.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-primary/10
                 ${
                   location.pathname === item.path
                     ? "text-black dark:text-white "
                     : "text-secondary hover:text-primary dark:hover:text-primary dark:hover:text-secondary"
                 }
                  `}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <p className="text-sm font-medium">{item.lable}</p>
              </Link>
            ))}
          </div>
        </div>
        <Profile />
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
      {isOpen && (
        <div className="xl:hidden  border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark">
          <div className="flex flex-col gap-2 ">
            {navItems.map((item) => (
              <NavLink
                key={item.lable}
                to={item.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-primary/10
                 ${
                   location.pathname === item.path
                     ? "text-black dark:text-white "
                     : "text-secondary hover:text-primary dark:hover:text-primary dark:hover:text-secondary"
                 }
                  `}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <p className="text-sm font-medium">{item.lable}</p>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Siderbar;
