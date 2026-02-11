import React from "react";

const DoctorPatientMedication = () => {
  const medications = [
    {
      name: "Lisinopril",
      dose: "10mg",
      frequency: "Once daily",
      status: "Active",
    },
    {
      name: "Atorvastatin",
      dose: "20mg",
      frequency: "Once daily",
      status: "Active",
    },
    {
      name: "Metformin",
      dose: "500mg",
      frequency: "Twice daily",
      status: "Active",
    },
    {
      name: "Levothyroxine",
      dose: "75mcg",
      frequency: "Once daily",
      status: "Inactive",
    },
  ];
  return (
    <div>
      <div className="bg-white dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700 mt-8">
        <div className="flex justify-between items-center px-6 pt-5 pb-3 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-charcoal dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
            Your Medications
          </h3>
          <div className="flex items-center gap-4">
            <label className="relative flex-1 sm:w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-light-secondary dark:text-gray-100 text-base">
                search
              </span>
              <input
                className="dark:text-gray-400 *:form-input w-full rounded-lg bg-gray-200 light dark:bg-gray-800 placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary h-10 border-none pl-10 pr-4 text-sm"
                placeholder="Search medications..."
                type="search"
              />
            </label>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 rounded-l-lg" scope="col">
                  Medication
                </th>
                <th className="px-6 py-3" scope="col">
                  Dosage
                </th>
                <th className="px-6 py-3" scope="col">
                  Frequency
                </th>
                <th className="px-6 py-3" scope="col">
                  Status
                </th>
                <th className="px-6 py-3 rounded-r-lg" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {medications.map((item) => (
                <tr className="bg-card-light dark:bg-card-dark border-b dark:border-border-dark last:border-b-0">
                  <th
                    className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                    scope="row"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4 dark:text-white">{item.dose}</td>
                  <td className="px-6 py-4 dark:text-white">
                    {item.frequency}
                  </td>
                  <td className="px-6 py-4 dark:text-secondary">
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-secondary/10 dark:text-secondary">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:underline font-medium dark:text-white">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorPatientMedication;
