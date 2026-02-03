import React from "react";
import AdminLayout from "../../../layout/AdminLayout/AdminLayout";
import { useNavigate } from "react-router";
import PatientList from "../../../PatientComponents/PatientList/PatientList";
import TopBar from "../../components/TopBar/TopBar";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AdminLayout>
        <main className="flex flex-1 flex-col">
          {/* <!-- TopNavBar --> */}
          <TopBar />
          <div className="flex-1 p-8">
            {/* <!-- PageHeading --> */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-4xl font-black leading-tight tracking-[-0.033em]">
                  Dashboard
                </p>
                <p className="text-base font-normal text-text-secondary-light dark:text-text-secondary-dark">
                  Welcome back, Admin! Here's a summary of today's activities.
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
                  className="text-sm font-medium hover:underline"
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
