import React from "react";

const BloodPressure = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-center" scope="col">
                Date
              </th>
              <th className="px-6 py-3 text-center" scope="col">
                Systolic (mmHg)
              </th>
              <th className="px-6 py-3 text-center" scope="col">
                Diastolic (mmHg)
              </th>
              <th className="px-6 py-3 text-center" scope="col">
                Heart Rate (bpm)
              </th>
              <th className="px-6 py-3 text-center" scope="col">
                Status
              </th>
            </tr>
          </thead>

          <tr className="bg-white dark:bg-gray-900/50 border-b dark:border-gray-700">
            <td className="px-6 py-4 font-medium text-charcoal dark:text-white text-center">
              2024-05-10
            </td>
            <td className="px-6 py-4 text-center">122</td>
            <td className="px-6 py-4 text-center">78</td>
            <td className="px-6 py-4 text-center">72</td>
            <td className="px-6 py-4 text-center">
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-success/20 text-success">
                Normal
              </span>
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-900/50 border-b dark:border-gray-700 ">
            <td className="px-6 py-4 font-medium text-charcoal dark:text-white text-center">
              2024-04-15
            </td>
            <td className="px-6 py-4 text-center">128</td>
            <td className="px-6 py-4 text-center">82</td>
            <td className="px-6 py-4 text-center">75</td>
            <td className="px-6 py-4 text-center">
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-warning/20 text-warning ">
                Elevated
              </span>
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-900/50 ">
            <td className="px-6 py-4 font-medium text-charcoal dark:text-white text-center">
              2024-03-20
            </td>
            <td className="px-6 py-4 text-center">118</td>
            <td className="px-6 py-4 text-center">75</td>
            <td className="px-6 py-4 text-center">68</td>
            <td className="px-6 py-4 text-center">
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-success/20 text-success ">
                Normal
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default BloodPressure;
