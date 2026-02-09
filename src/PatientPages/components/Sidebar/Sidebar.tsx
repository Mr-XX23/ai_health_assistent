import React from "react";
import { NavLink } from "react-router";

const Sidebar = ({ onClick }: { onClick?: () => void }) => {
  const navItes = [
    { lable: "Dashboard", path: "/patient-dashboard", icon: "dashboard" },
    {
      lable: "Medical History",
      path: "/patient-medical-history",
      icon: "folder_managed",
    },
    { lable: "Medications", path: "/patient-medications", icon: "medication" },
    {
      lable: "Find Specailist",
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
    <div>
      <div className="flex flex-col w-[240px] p-4 bg-card-light dark:bg-card-dark flex-shrink-0">
        <div className="flex items-center gap-2 px-3 mb-8">
          <span className="material-symbols-outlined text-primary text-3xl">
            health_and_safety
          </span>
          <h2 className="text-lg font-bold dark:text-secondary">AI Health</h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuBXgdR9fgxacnA8bv-FOXrmQl3rngBtUSt3sVHP-7x1lh9acKjucsLtemUYApawkGcdjSJ_HQT3zu68yWpnlP2XhD53h007Q7mRs_voOLnjONn5L8nfg5r3SF1fxBeKrKbRKGMPL3WEOWPE72AxijFI-kbihju6BFbanVtdVYp-KQOLhd6c6GB9kR3rkK8cFxWCOngi_vh2HdDZWj2NGShV5u9pAOHxhzHlCxGHCew54tH4-Pz11_NHxTyUz3imp-2nxc24VsIZ4ZS0)]"
              data-alt="User profile picture of Maria Garcia"
            ></div>
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-base font-medium truncate dark:text-white">
                Maria Garcia
              </h1>
              <p className="text-xs font-normal text-text-light-secondary dark:text-secondary truncate">
                maria.g@email.com
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex flex-col gap-2 mt-4">
              {navItes.map((item) => (
                <NavLink
                  key={item.lable}
                  to={item.path}
                  onClick={onClick}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg
                  ${
                    isActive
                      ? "bg-primary/10 text-primary dark:text-secondary"
                      : "hover:bg-primary/10 dark:hover:text-secondary/40 hover:text-primary transition-colors duration-200 text-text-light-primary dark:text-gray-500 "
                  }
                  `
                  }
                >
                  <span className="material-symbols-outlined fill">
                    {item.icon}
                  </span>
                  <p className="text-sm font-medium">{item.lable}</p>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
