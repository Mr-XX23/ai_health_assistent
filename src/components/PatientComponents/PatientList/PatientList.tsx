import React from "react";
import { NavLink, useNavigate } from "react-router";

/**
 * PERFORMANCE: Memoized patient list to prevent unnecessary re-renders
 * Consider adding useCallback for event handlers when connecting to real data
 */
const PatientList = React.memo(() => {
  const navigate = useNavigate();

  const patients = [
    {
      name: "Liam Johnson",
      id: "PID-84321",
      lastConsultation: " 2024-05-20",
      status: "Active",
      color: "bg-green-100 text-green-800",
      profile:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDERZQGYitj_VKaOLigm5M_tnKSgVAzmuH1k3lqyJ6sQq3fX9Te6T9fV1KiB81BMia6ojCAW9JO6MkLoyT5AQYIyXMg8pvA1kWcct_ng83yQI4ypym7FAsZDpGr6mB_kOEDqHZQxzKb1ZeNGw6nAYjj8pzBuL-6tvr3ryVqFMddu7w_SxX8M6nxV-CtHgP9mWXK1X_afoOtflVTSkN3C3FgNQH_yAKrK5ppPnGKQgS0_HbslMGH2SuTey_zGEj3dqOZ5nSboUvSjPur",
    },
    {
      name: "Olivia Smith",
      id: "PID-84322",
      lastConsultation: " 2024-05-18",
      status: "Pending Review",
      color: "bg-yellow-100 text-yellow-800",
      profile:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDERZQGYitj_VKaOLigm5M_tnKSgVAzmuH1k3lqyJ6sQq3fX9Te6T9fV1KiB81BMia6ojCAW9JO6MkLoyT5AQYIyXMg8pvA1kWcct_ng83yQI4ypym7FAsZDpGr6mB_kOEDqHZQxzKb1ZeNGw6nAYjj8pzBuL-6tvr3ryVqFMddu7w_SxX8M6nxV-CtHgP9mWXK1X_afoOtflVTSkN3C3FgNQH_yAKrK5ppPnGKQgS0_HbslMGH2SuTey_zGEj3dqOZ5nSboUvSjPur",
    },
    {
      name: "Noah Williams",
      id: "PID-84323",
      lastConsultation: " 2024-05-15",
      status: "Active",
      color: "bg-green-100 text-green-800",
      profile:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDERZQGYitj_VKaOLigm5M_tnKSgVAzmuH1k3lqyJ6sQq3fX9Te6T9fV1KiB81BMia6ojCAW9JO6MkLoyT5AQYIyXMg8pvA1kWcct_ng83yQI4ypym7FAsZDpGr6mB_kOEDqHZQxzKb1ZeNGw6nAYjj8pzBuL-6tvr3ryVqFMddu7w_SxX8M6nxV-CtHgP9mWXK1X_afoOtflVTSkN3C3FgNQH_yAKrK5ppPnGKQgS0_HbslMGH2SuTey_zGEj3dqOZ5nSboUvSjPur",
    },
    {
      name: "Emma Brown",
      id: "PID-84324",
      lastConsultation: " 2024-05-12",
      status: "Inactive",
      color: "bg-red-100 text-red-800",
      profile:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDERZQGYitj_VKaOLigm5M_tnKSgVAzmuH1k3lqyJ6sQq3fX9Te6T9fV1KiB81BMia6ojCAW9JO6MkLoyT5AQYIyXMg8pvA1kWcct_ng83yQI4ypym7FAsZDpGr6mB_kOEDqHZQxzKb1ZeNGw6nAYjj8pzBuL-6tvr3ryVqFMddu7w_SxX8M6nxV-CtHgP9mWXK1X_afoOtflVTSkN3C3FgNQH_yAKrK5ppPnGKQgS0_HbslMGH2SuTey_zGEj3dqOZ5nSboUvSjPur",
    },
  ];
  return (
    <div>
      <div className="mt-4 overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border-light dark:divide-border-dark">
            <thead className="bg-background-light dark:bg-background-dark">
              <tr>
                <th
                  className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-primary dark:text-secondary"
                  scope="col"
                >
                  Patient Name
                </th>
                <th
                  className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-primary dark:text-secondary"
                  scope="col"
                >
                  Patient ID
                </th>
                <th
                  className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-primary dark:text-secondary"
                  scope="col"
                >
                  Last Consultation
                </th>
                <th
                  className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-primary dark:text-secondary"
                  scope="col"
                >
                  Status
                </th>
                <th className="relative px-6 py-3" scope="col">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light dark:divide-border-dark">
              {patients.map((item) => (
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 ">
                    <div className="flex justify-center gap-3">
                      <span className="font-medium">{item.name}</span>
                    </div>
                  </td>
                  <td className="text-center whitespace-nowrap px-6 py-4 text-sm text-black dark:text-gray-300">
                    {item.id}
                  </td>
                  <td className="text-center whitespace-nowrap px-6 py-4 text-sm text-black dark:text-gray-300">
                    {item.lastConsultation}
                  </td>
                  <td className="text-center whitespace-nowrap px-6 py-4">
                    <span
                      className={` inline-flex rounded-full bg-warning/20 px-2 text-xs font-medium leading-5 text-warning ${item.color}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td
                    className="text-center whitespace-nowrap px-6 py-4 text-sm font-medium"
                    onClick={() => navigate("/admin-patient-profile")}
                  >
                    <span className="hover:underline">View Details</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
});

PatientList.displayName = 'PatientList';

export default PatientList;
