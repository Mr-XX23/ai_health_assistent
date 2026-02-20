import { useState } from "react";
import { NavLink } from "react-router-dom";
import Profile from "../Profile/Profile";
import Logo from "../Logo/Logo";

const navItems = [
  { label: "Dashboard", path: "/admin", icon: "dashboard" },
  { label: "Patients", path: "/admin-patient-page", icon: "history" },
  { label: "Reports", path: "/reports", icon: "bar_chart" },
  { label: "Settings", path: "/settings", icon: "settings" },
];

const SidebarNav = ({ onClick }: { onClick?: () => void }) => (
  <nav className="flex flex-col gap-2">
    {navItems.map((item) => (
      <NavLink
        key={item.label}
        to={item.path}
        onClick={onClick}
        className={({ isActive }) =>
          `flex items-center gap-3 rounded-lg px-3 py-2 transition
          ${
            isActive
              ? "bg-primary/10 dark:text-white"
              : "text-secondary hover:bg-primary/10 hover:text-primary"
          }`
        }
      >
        <span className="material-symbols-outlined">{item.icon}</span>
        <span className="text-sm font-medium">{item.label}</span>
      </NavLink>
    ))}
  </nav>
);

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden xl:flex h-screen w-64 min-w-[16rem] max-w-[16rem] flex-col justify-between border-r border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-4 sticky top-0">
        <div className="flex flex-col gap-8">
          <Logo />
          <SidebarNav />
        </div>
        <Profile />
      </aside>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-label="Open menu"
        className="xl:hidden p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/80 z-40"
            onClick={() => setIsOpen(false)}
          />

          <aside className="fixed z-50 top-0 left-0 h-full w-64 bg-card-light dark:bg-card-dark p-4 flex flex-col justify-between animate-slide-in">
            <div className="flex flex-col gap-8">
              <Logo />
              <SidebarNav onClick={() => setIsOpen(false)} />
            </div>
            <Profile />
          </aside>
        </>
      )}
    </>
  );
};

export default Sidebar;
