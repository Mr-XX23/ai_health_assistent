import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col w-[240px] p-4 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark flex-shrink-0">
        <div className="flex items-center gap-2 px-3 mb-8">
          <span className="material-symbols-outlined text-primary text-3xl">
            health_and_safety
          </span>
          <h2 className="text-lg font-bold">AI Health</h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg[url(https://lh3.googleusercontent.com/aida-public/AB6AXuBXgdR9fgxacnA8bv-FOXrmQl3rngBtUSt3sVHP-7x1lh9acKjucsLtemUYApawkGcdjSJ_HQT3zu68yWpnlP2XhD53h007Q7mRs_voOLnjONn5L8nfg5r3SF1fxBeKrKbRKGMPL3WEOWPE72AxijFI-kbihju6BFbanVtdVYp-KQOLhd6c6GB9kR3rkK8cFxWCOngi_vh2HdDZWj2NGShV5u9pAOHxhzHlCxGHCew54tH4-Pz11_NHxTyUz3imp-2nxc24VsIZ4ZS0)]"
              data-alt="User profile picture of Maria Garcia"
            ></div>
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-base font-medium truncate">Maria Garcia</h1>
              <p className="text-xs font-normal text-text-light-secondary dark:text-text-dark-secondary truncate">
                maria.g@email.com
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary"
              href="#"
            >
              <span className="material-symbols-outlined fill">dashboard</span>
              <p className="text-sm font-medium">Dashboard</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200 text-text-light-primary dark:text-text-dark-primary"
              href="#"
            >
              <span className="material-symbols-outlined">folder_managed</span>
              <p className="text-sm font-medium">Medical History</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200 text-text-light-primary dark:text-text-dark-primary"
              href="#"
            >
              <span className="material-symbols-outlined">medication</span>
              <p className="text-sm font-medium">Medications</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200 text-text-light-primary dark:text-text-dark-primary"
              href="#"
            >
              <span className="material-symbols-outlined">stethoscope</span>
              <p className="text-sm font-medium">Symptom Checker</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200 text-text-light-primary dark:text-text-dark-primary"
              href="#"
            >
              <span className="material-symbols-outlined">calendar_month</span>
              <p className="text-sm font-medium">Appointments</p>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200 text-text-light-primary dark:text-text-dark-primary"
              href="#"
            >
              <span className="material-symbols-outlined">chat</span>
              <p className="text-sm font-medium">Messages</p>
            </a>
          </div>
        </div>
        <div className="mt-auto">
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200 text-text-light-primary dark:text-text-dark-primary"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium">Settings</p>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200 text-text-light-primary dark:text-text-dark-primary"
            href="#"
          >
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium">Logout</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
