import React from "react";

const Vaccination = () => {
  const medications = [
    {
      name: "Walks",
      time: "7:00am",
      frequency: "Daily",
      status: "Active",
    },
    {
      name: "Stretching",
      time: "8:30am",
      frequency: "Daily",
      status: "Active",
    },
    {
      name: "Meditaion",
      time: "6:00am",
      frequency: "15min",
      status: "Active",
    },
  ];
  return (
    <div>
      <div className="bg-white dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700 mt-8">
        <div className="flex justify-between items-center px-6 pt-5 pb-3 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-charcoal dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
            Your daily activity
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 rounded-l-lg" scope="col">
                  Exercise
                </th>
                <th className="px-6 py-3" scope="col">
                  Time
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
                  <td className="px-6 py-4 dark:text-white">{item.time}</td>
                  <td className="px-6 py-4 dark:text-white">
                    {item.frequency}
                  </td>
                  <td className="px-6 py-4 dark:text-secondary">
                    <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-secondary/10 dark:text-secondary">
                      {item.status}
                    </span>
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

export default Vaccination;
