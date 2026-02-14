import React from "react";
import { NavLink } from "react-router";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navItes = [
    { lable: "Dashboard", path: "/patient-dashboard", icon: "dashboard" },
    {
      lable: "Medical History",
      path: "/patient-medical-history",
      icon: "folder_managed",
    },
    { lable: "Medications", path: "/patient-medications", icon: "medication" },
    {
      lable: "Find Specialist",
      path: "/patient-symptom-checker",
      icon: "stethoscope",
    },
    {
      lable: "Appointments",
      path: "/patient-appointments",
      icon: "calendar_month",
    },
    { lable: "Messages", path: "/patient-messages", icon: "chat" },
    { lable: "Settings", path: "/patient-setting", icon: "settings" },
    { lable: "Logout", path: "/patient-logout", icon: "logout" },
  ];

  return (
    <>
      {/* Overlay (Mobile only) */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/80 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static top-0 left-0 h-full z-50
          w-[240px] p-4 bg-card-light dark:bg-card-dark
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="flex items-center gap-2 px-3 mb-8">
          <span className="material-symbols-outlined text-primary text-3xl">
            health_and_safety
          </span>
          <h2 className="text-lg font-bold dark:text-secondary">AI Health</h2>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="aspect-square rounded-full size-10 bg-gray-300" />
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-base font-medium truncate dark:text-white">
                Maria Garcia
              </h1>
              <p className="text-xs truncate text-text-light-secondary dark:text-secondary">
                maria.g@email.com
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            {navItes.map((item) => (
              <NavLink
                key={item.lable}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg
                  ${
                    isActive
                      ? "bg-primary/10 text-primary dark:text-secondary"
                      : "hover:bg-primary/10 dark:hover:text-white hover:text-primary transition-colors duration-200 text-text-light-primary dark:text-gray-500"
                  }`
                }
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <p className="text-sm font-medium">{item.lable}</p>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
