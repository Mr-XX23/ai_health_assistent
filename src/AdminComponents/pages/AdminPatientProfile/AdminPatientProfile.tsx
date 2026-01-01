import React from "react";
import AdminLayout from "../../../layout/AdminLayout/AdminLayout";
import { useNavigate } from "react-router";

const AdminPatientProfile = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <AdminLayout>
      <div className="bg-background-light dark:bg-background-dark font-display text-charcoal dark:text-gray-200">
        <div className="relative flex min-h-screen w-full">
          {/* <!-- SideNavBar --> */}
          <aside className="sticky top-0 flex h-screen w-64 flex-col border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDIkDB6Asbi6diKCT0QuUF19fMezHAZ1CHpEBhoOui7EePp9ZfO1W1BnDvlC3jvNT0z44tBiYvuHfsWaJLiYR5ut_FZ5ojo44EpGa2MTzu920RGkfdkK1cxOPGyi-sfa-7UtfEy5n5aSwELmTrq6W8XylnQS2KO6_VO3A6ue3Jg3NerHaTGfLTE-jjV5VX6lNb8hGVQfaHgU4_YVq0POeZNBknGL2HHd8wXKr1EcsltJUtYWutOYBUN7-a53HI8b52UBq_JWYGyZQLm)]"
                  data-alt="Profile picture of Isabella Rossi"
                ></div>
                <div className="flex flex-col">
                  <h1 className="text-charcoal dark:text-gray-100 text-base font-semibold leading-normal">
                    Isabella Rossi
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                    ID: 738-49-104
                  </p>
                </div>
              </div>
              <nav className="flex flex-col gap-2 mt-4">
                <a className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT bg-primary/10 text-primary dark:bg-primary/20">
                  <span className="material-symbols-outlined fill">person</span>
                  <p className="text-sm font-medium leading-normal">Overview</p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="#"
                >
                  <span className="material-symbols-outlined">history</span>
                  <p className="text-sm font-medium leading-normal">
                    Medical History
                  </p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="#"
                >
                  <span className="material-symbols-outlined">monitoring</span>
                  <p className="text-sm font-medium leading-normal">
                    Health Metrics
                  </p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="#"
                >
                  <span className="material-symbols-outlined">pill</span>
                  <p className="text-sm font-medium leading-normal">
                    Medications
                  </p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="#"
                >
                  <span className="material-symbols-outlined">vaccines</span>
                  <p className="text-sm font-medium leading-normal">
                    Vaccinations
                  </p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="#"
                >
                  <span className=" material-symbols-outlined">
                    directions_run
                  </span>
                  <p className="text-sm font-medium leading-normal">
                    Lifestyle
                  </p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-DEFAULT hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={handleGoBack}
                >
                  <span className=" material-symbols-outlined">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e3e3e3"
                    >
                      <path d="M360-240 120-480l240-240 56 56-144 144h488v-160h80v240H272l144 144-56 56Z" />
                    </svg>
                  </span>
                  <p className="text-sm font-medium leading-normal">Return</p>
                </a>
              </nav>
            </div>
            <div className="mt-auto flex flex-col gap-4">
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Download Report</span>
              </button>
            </div>
          </aside>
          {/* <!-- Main Content --> */}
          <main className="flex-1 p-8">
            <div className="w-full max-w-6xl mx-auto">
              {/* <!-- ProfileHeader --> */}
              <div className="flex p-4 @container bg-white dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
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
              <h2 className="text-charcoal dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">
                At a Glance
              </h2>
              {/* <!-- Stats Cards --> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
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
              {/* <!-- Health Metrics Section --> */}
              <div className="bg-white dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700 mt-8">
                <div className="flex justify-between items-center px-6 pt-5 pb-3 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-charcoal dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                    Health Metrics
                  </h2>
                  <div className="flex items-center gap-2">
                    <button className="text-xs font-semibold px-3 py-1 rounded-DEFAULT bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
                      6 Months
                    </button>
                    <button className="text-xs font-semibold px-3 py-1 rounded-DEFAULT bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
                      1 Year
                    </button>
                    <button className="text-xs font-semibold px-3 py-1 rounded-DEFAULT bg-primary text-white border border-primary">
                      All Time
                    </button>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="flex border-b border-gray-200 dark:border-gray-700">
                    <button className="px-4 py-2 text-sm font-semibold text-primary border-b-2 border-primary">
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
                  <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-4">
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
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-6 py-3" scope="col">
                            Date
                          </th>
                          <th className="px-6 py-3" scope="col">
                            Systolic (mmHg)
                          </th>
                          <th className="px-6 py-3" scope="col">
                            Diastolic (mmHg)
                          </th>
                          <th className="px-6 py-3" scope="col">
                            Heart Rate (bpm)
                          </th>
                          <th className="px-6 py-3" scope="col">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <div>
                        <tr className="bg-white dark:bg-gray-900/50 border-b dark:border-gray-700">
                          <td className="px-6 py-4 font-medium text-charcoal dark:text-white">
                            2024-05-10
                          </td>
                          <td className="px-6 py-4">122</td>
                          <td className="px-6 py-4">78</td>
                          <td className="px-6 py-4">72</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-success/20 text-success">
                              Normal
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-900/50 border-b dark:border-gray-700">
                          <td className="px-6 py-4 font-medium text-charcoal dark:text-white">
                            2024-04-15
                          </td>
                          <td className="px-6 py-4">128</td>
                          <td className="px-6 py-4">82</td>
                          <td className="px-6 py-4">75</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-warning/20 text-warning">
                              Elevated
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-900/50">
                          <td className="px-6 py-4 font-medium text-charcoal dark:text-white">
                            2024-03-20
                          </td>
                          <td className="px-6 py-4">118</td>
                          <td className="px-6 py-4">75</td>
                          <td className="px-6 py-4">68</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-success/20 text-success">
                              Normal
                            </span>
                          </td>
                        </tr>
                      </div>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPatientProfile;
