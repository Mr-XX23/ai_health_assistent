import React from "react";

const YourMedication = () => {
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
    <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4">
        <h3 className="text-lg dark:text-secondary   font-semibold">
          Your Medications
        </h3>
        <div className="flex items-center gap-4">
          <label className="relative flex-1 sm:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-light-secondary dark:text-secondary text-base">
              search
            </span>
            <input
              className="dark:text-secondary *:form-input w-full rounded-lg bg-background-light dark:bg-background-dark placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary h-10 border-none pl-10 pr-4 text-sm"
              placeholder="Search medications..."
              type="search"
            />
          </label>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center rounded-md h-10 w-10 bg-primary/10 text-primary dark:text-secondary transition-colors">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-text-light-secondary dark:text-secondary uppercase bg-background-light dark:bg-background-dark">
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
                <td className="px-6 py-4 dark:text-white">{item.frequency}</td>
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
  );
};

export default YourMedication;
