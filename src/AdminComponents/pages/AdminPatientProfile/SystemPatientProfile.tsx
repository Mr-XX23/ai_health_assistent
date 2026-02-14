import { useState } from "react";
import PatientSidebar from "../../../PatientComponents/components/sidebar/PatientSidebar";
import BloodPressure from "../../../PatientComponents/components/statistics/BloodPressure";
import DoctorPatientMedication from "../../../DocterComponents/components/Medicattion/DoctorPatientMedication";
import Vaccination from "../../../DocterComponents/components/Vaccination/Vaccination";
import Lifestyle from "../../../DocterComponents/components/Lifestyle/Lifestyle";

const SystemPatientProfile = () => {
  const [activeRange, setActiveRange] = useState<"6m" | "1y" | "all">("6m");

  const baseBtn =
    "text-xs font-semibold px-3 py-1 rounded-DEFAULT border transition-colors";

  const inactiveBtn =
    "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200";

  const activeBtn = "bg-primary text-white border-primary";

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-charcoal dark:text-gray-200">
      <div className="relative flex min-h-w-full">
        {/* <!-- SideNavBar --> */}
        <PatientSidebar />
        {/* <!-- Main Content --> */}
        <main className="flex-1 p-8">
          <div className="w-full max-w-6xl mx-auto">
            {/* <!-- ProfileHeader --> */}
            <div className="flex p-4 @container bg-white dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700">
              <div
                id="overview"
                className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center"
              >
                <div className="flex gap-6 items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-24 w-24 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuBwzt0xqo2PKlVlC6dxMohXgrxcKu2JzVIGf8lwSIpvRuFwu0yifO6KjWpulEodrYubgUtCSg-PAl3meLvGIU43jyS42g6Hzos7cNV5dJ1DzF3wYlqrflV1lcVbb7R-xrOqqX3AojjBdBallTp2oHztZAF_slAPrnMTVsgHE9yP2xLAjKld8wohzKKWFbV4b9_JvcTiuXBhnTmU9Tb-DLVD3pGyxMYy1nrFGeqBvBgb6lVTRgZi6g5xsRMRdugdUdyPcC2lf_INgX4b)]"
                    data-alt="Profile picture of Isabella Rossi"
                  ></div>
                  <div className="flex flex-col justify-center">
                    <p className="text-charcoal dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em]">
                      Isabella Rossi
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal">
                      Age: 34 | Blood Type: O+ | DOB: 05/12/1990
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal">
                      Primary Physician: Dr. Anya Sharma
                    </p>
                  </div>
                </div>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-800 text-charcoal dark:text-white text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <span className="truncate">Edit Profile</span>
                </button>
              </div>
            </div>
            {/* <!-- SectionHeader: At a Glance --> */}
            <div id="medical-history">
              <h2 className="text-charcoal dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">
                At a Glance
              </h2>
              {/* <!-- Stats Cards --> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
                <div className="flex flex-col gap-2 rounded-lg p-6 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                  <p className="text-charcoal dark:text-gray-200 text-base font-medium leading-normal">
                    Allergies
                  </p>
                  <p className="text-danger tracking-light text-2xl font-bold leading-tight">
                    Penicillin
                  </p>
                </div>
                <div className="flex flex-col gap-2 rounded-lg p-6 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                  <p className="text-charcoal dark:text-gray-200 text-base font-medium leading-normal">
                    Critical Conditions
                  </p>
                  <p className="text-warning tracking-light text-2xl font-bold leading-tight">
                    Asthma
                  </p>
                </div>
                <div className="flex flex-col gap-2 rounded-lg p-6 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                  <p className="text-charcoal dark:text-gray-200 text-base font-medium leading-normal">
                    Last Vitals Check
                  </p>
                  <p className="text-success tracking-light text-2xl font-bold leading-tight">
                    Yesterday
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Health Metrics Section --> */}
            <div
              id="health-metrics"
              className="bg-white dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700 mt-8"
            >
              <div className="flex justify-between items-center px-6 pt-5 pb-3 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-charcoal dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                  Health Metrics
                </h2>
                <div className="flex items-center gap-2"></div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveRange("6m")}
                    className={`${baseBtn} ${
                      activeRange === "6m" ? activeBtn : inactiveBtn
                    }`}
                  >
                    6 Months
                  </button>

                  <button
                    onClick={() => setActiveRange("1y")}
                    className={`${baseBtn} ${
                      activeRange === "1y" ? activeBtn : inactiveBtn
                    }`}
                  >
                    1 Year
                  </button>

                  <button
                    onClick={() => setActiveRange("all")}
                    className={`${baseBtn} ${
                      activeRange === "all" ? activeBtn : inactiveBtn
                    }`}
                  >
                    All Time
                  </button>
                </div>
              </div>
              <div className="px-6 py-4">
                <div className="flex border-b border-gray-200 dark:border-gray-700">
                  <button className="px-4 py-2 text-sm font-semibold text-primary dark:text-secondary border-b-2 border-primary">
                    Vitals
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-charcoal dark:hover:text-white">
                    Lab Results
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-charcoal dark:hover:text-white">
                    Biometrics
                  </button>
                </div>
              </div>
              {/* <!-- Chart & Table --> */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-4 ">
                  Blood Pressure Over Time
                </h3>
                {/* <!-- Placeholder for a chart --> */}
                <div className="w-full h-64 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                  <img
                    className="w-full h-full object-contain p-4"
                    data-alt="A line graph showing blood pressure trends over the last year, with systolic and diastolic values plotted."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwHVuRycaByM0Ccl2ran5-fcJZQP2ALWjeaAbBL0WUhjxcfk_frEo7h8S0BsqLMO6dIyFBwt_6VtioZnK5UR_Jw4dOZL3vu6F5VqkpRFoFcuSyID039a33aji-XtLcb-kFEkdjtIgjaFi-aaCGxQFs9n29qUWS3qSbfzepsnbB8xzYjsT4SgN75REcLz0fqD9q8ZlqlYIIvr4S7FilFeMOzsS-Id18Ld_BdiB0eH3auzOECw6wKB3KEk8F5n8rzegQ1OpPs9GU3rHw"
                  />
                </div>
                {/* <!-- Data Table --> */}
                <BloodPressure />
              </div>
            </div>
            <div id="medication" className="p-6">
              <DoctorPatientMedication />
            </div>
            <div id="vaccination" className="p-6">
              <Vaccination />
            </div>
            <div id="lifestyle" className="p-6">
              <Lifestyle />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SystemPatientProfile;
