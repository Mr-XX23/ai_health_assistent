import React from "react";
import { useNavigate } from "react-router";

const Siderbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex h-screen w-64 flex-col justify-between border-r border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-4 sticky top-0">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2 px-3 text-text-light dark:text-text-dark">
            <span className="material-symbols-outlined text-primary text-3xl">
              database
            </span>
            <h2 className="text-lg font-bold tracking-[-0.015em]">
              AI Health Assistant
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-primary/10"
              onClick={() => navigate("/admin")}
            >
              <span className="material-symbols-outlined">dashboard</span>
              <p className="text-sm font-medium">Dashboard</p>
            </a>
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-primary/10"
              onClick={() => navigate("/admin-patient-profile")}
            >
              <span className="material-symbols-outlined">group</span>
              <p className="text-sm font-medium">Patients</p>
            </a>
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-primary/10"
              href="#"
            >
              <span className="material-symbols-outlined">history</span>
              <p className="text-sm font-medium">Consultation History</p>
            </a>
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-primary/10"
              href="#"
            >
              <span className="material-symbols-outlined">bar_chart</span>
              <p className="text-sm font-medium">Reports</p>
            </a>
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-primary/10"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              <p className="text-sm font-medium">Settings</p>
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-4 flex gap-3 p-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDDi-WFrolJwGt76zO7hwmkC_m_2ynYZO9tAXF3b4CI27WNZ75mLfWkwBlPTwn39tri6IhNSHkUohZdKoyMXq-B7El_s_KSucyYeD74jb9ECLUipo6kUfUb6F-QJy4uS4O_-gXciqSMfAibajoyyr9TzP-9UWRajm6IndxwLlZcGDpcPWxRIreG9jF9SN4mvxiP8kGMME1--7OSu0GBGflw2GcSiM6RUKBaFAcoEyaykplOiW_T98N3BXF2g6bpRujKf0yRtkiKF4B5)]"
              data-alt="Profile picture of Dr. Evelyn Reed"
            ></div>
            <div className="flex flex-col">
              <h1 className="text-base font-medium">Dr. Evelyn Reed</h1>
              <p className="text-sm font-normal text-text-secondary-light dark:text-text-secondary-dark">
                Administrator
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 border-t border-border-light dark:border-border-dark pt-2">
            <a
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-primary/10"
              href="#"
            >
              <span className="material-symbols-outlined">logout</span>
              <p className="text-sm font-medium">Log Out</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Siderbar;
