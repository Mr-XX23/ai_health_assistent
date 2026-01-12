import React from "react";
import AdminLayout from "../../../layout/AdminLayout/AdminLayout";
import { useNavigate } from "react-router";
import PatientList from "../../../PatientComponents/PatientList/PatientList";

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AdminLayout>
        <main className="flex flex-1 flex-col">
          {/* <!-- TopNavBar --> */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-10 py-3 bg-card-light dark:bg-card-dark sticky top-0 z-10">
            <div className="flex flex-1 items-center gap-8">
              <label className="relative flex-grow max-w-lg">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">
                  search
                </span>
                <input
                  className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Search for patients, reports..."
                  type="search"
                />
              </label>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent hover:bg-primary/10">
                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">
                  notifications
                </span>
              </button>
              <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent hover:bg-primary/10">
                <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">
                  chat_bubble
                </span>
              </button>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDk8tm0iGYUr71baoegMaaZV_zC0ytEVtv22uv7CD0Cs_Ovh3biGxFpMjnm9jFz3ldjK_8fUzZH8D6JKTy9S_2Y44w0SniXpp--s4d90ymr4eXjs8mqhuKSEKJFrYrzEDBBBY6kFim1GJbXt273Q0xJlCIs5YBdqnFfBSwsi1XoR9ifoDnu2qeUpXfU4By0lLxIJuDLfWhrRP0f4pPLMkpgdSZwQ0lLA_jeDoPfLLFcHITIAoBZjc7t9PKpvjfEdm-LO6hioKpITiPw)]"
                data-alt="Profile picture of Dr. Evelyn Reed"
              ></div>
            </div>
          </header>
          <div className="flex-1 p-8">
            {/* <!-- PageHeading --> */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-4xl font-black leading-tight tracking-[-0.033em]">
                  Dashboard
                </p>
                <p className="text-base font-normal text-text-secondary-light dark:text-text-secondary-dark">
                  Welcome back, Dr. Reed! Here's a summary of today's
                  activities.
                </p>
              </div>
              <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary/90">
                <span className="material-symbols-outlined">add</span>
                <span>Add New Patient</span>
              </button>
            </div>
            {/* <!-- Stats --> */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-2 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
                <p className="text-base font-medium">Active Patients</p>
                <p className="tracking-light text-3xl font-bold">2,453</p>
                <p className="text-sm font-medium text-success">
                  +1.2% this month
                </p>
              </div>
              <div className="flex flex-col gap-2 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
                <p className="text-base font-medium">Upcoming Consultations</p>
                <p className="tracking-light text-3xl font-bold">18</p>
                <p className="text-sm font-medium text-warning">3 urgent</p>
              </div>
              <div className="flex flex-col gap-2 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
                <p className="text-base font-medium">System Status</p>
                <p className="tracking-light text-3xl font-bold text-success">
                  Operational
                </p>
                <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">
                  All systems normal
                </p>
              </div>
            </div>
            {/* <!-- Patient Data Table Section --> */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em]">
                  Recent Active Patient
                </h2>

                <a
                  className="text-sm font-medium text-primary hover:underline"
                  onClick={() => navigate("/admin-patient-page")}
                >
                  View All Patients
                </a>
              </div>
              <PatientList />
            </div>
          </div>
        </main>
      </AdminLayout>
    </div>
  );
};

export default AdminDashboard;
