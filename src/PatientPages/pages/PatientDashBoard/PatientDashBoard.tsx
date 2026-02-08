import PatientLayout from "../../../layout/PatientLayout/PatientLayout";
import Sidebar from "../../components/Sidebar/Sidebar";

const PatientDashBoard = () => {
  return (
    <PatientLayout>
      <div>
        <main className="flex-1 flex flex-col h-screen overflow-hidden">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-border-light dark:border-border-dark px-8 py-4 bg-card-light dark:bg-card-dark flex-shrink-0">
            <div className="flex flex-col">
              <p className="text-2xl font-bold tracking-tight">Hello, Maria</p>
              <p className="text-base font-normal text-text-light-secondary dark:text-text-dark-secondary">
                Welcome back to your health dashboard.
              </p>
            </div>
            <div className="flex flex-1 justify-end items-center gap-4">
              <label className="relative hidden md:block">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-light-secondary dark:text-text-dark-secondary">
                  search
                </span>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-background-light dark:bg-background-dark placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary h-10 border-none pl-10 pr-4 text-sm"
                  placeholder="Search..."
                  type="search"
                />
              </label>
              <button className="relative flex items-center justify-center rounded-full h-10 w-10 bg-background-light dark:bg-background-dark hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-1 right-1.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
              </button>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDwKLN-DIyGLSsHJVAT6wcoiINFinPdz7BjtIxSlSoatnO-Gfeu0FQgjR8_QNm01ipL6izejmiRO6_-qHMq2-3INDcOzrekGh5oSuMxhEgNLeRK8RwIoVA0Qj9oBafv_zNAx2CItZ6Az6ZAAV4yK70LWrYDyIRGsh4WBu8XFwKSvrBMCHCcK9h85u6WbiHlDSoINFuipHkoBd9Ih2n-Ez6N6ZuexvyzAx8pRnsmu5RONGjVWWUdSUUbfpYeF8b1ABKeCZc3ufCAZ4fB)]"
                data-alt="User profile picture of Maria Garcia"
              ></div>
            </div>
          </header>
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-12 gap-6 p-8">
              <div className="col-span-12 flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
                    <div className="flex flex-col gap-4 flex-1">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10">
                          <span className="material-symbols-outlined text-primary">
                            medical_services
                          </span>
                        </div>
                        <h3 className="text-lg font-bold">
                          AI Symptom Checker
                        </h3>
                      </div>
                      <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary leading-relaxed max-w-3xl">
                        Analyze your symptoms with our AI to get instant health
                        insights and guidance. Start a session now to understand
                        your health better and receive personalized
                        recommendations based on your input.
                      </p>
                    </div>
                    <button className="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold whitespace-nowrap hover:opacity-90 transition-opacity">
                      <span>Start Symptom Check</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
                <div className="flex flex-col gap-6 p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">Health Overview</h3>
                      <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                        Your wellness at a glance.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500 text-sm">
                        verified
                      </span>
                      <span className="text-sm font-medium">
                        Last check-up: 08/15/2023
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-around gap-6 text-center">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <svg
                        className="w-full h-full transform -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          className="text-border-light dark:text-border-dark"
                          cx="50"
                          cy="50"
                          fill="transparent"
                          r="45"
                          stroke="currentColor"
                          stroke-width="8"
                        ></circle>
                        <circle
                          className="text-primary"
                          cx="50"
                          cy="50"
                          fill="transparent"
                          r="45"
                          stroke="currentColor"
                          stroke-dasharray="283"
                          stroke-dashoffset="56"
                          stroke-linecap="round"
                          stroke-width="8"
                        ></circle>
                      </svg>
                      <div className="absolute flex flex-col">
                        <span className="text-3xl font-bold">85</span>
                        <span className="text-xs text-text-light-secondary dark:text-text-dark-secondary">
                          Health Score
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 text-left">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-10 rounded-full bg-primary/10">
                          <span className="material-symbols-outlined text-primary">
                            blood_pressure
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold">Blood Pressure</p>
                          <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                            120/80 mmHg
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-10 rounded-full bg-secondary/20">
                          <span className="material-symbols-outlined text-secondary">
                            cardiology
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold">Heart Rate</p>
                          <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                            72 bpm
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Next Appointment</h3>
                    <a
                      className="text-sm font-medium text-primary hover:underline"
                      href="#"
                    >
                      View all
                    </a>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-lg bg-background-light dark:bg-background-dark">
                      <div className="flex flex-col items-center justify-center bg-primary/10 text-primary p-3 rounded-lg w-16 flex-shrink-0">
                        <span className="text-sm font-bold">OCT</span>
                        <span className="text-2xl font-black">28</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">Telemedicine Follow-up</p>
                        <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                          Dr. Evelyn Reed - 09:30 AM
                        </p>
                      </div>
                      <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold w-full md:w-auto hover:opacity-90 transition-opacity">
                        <span className="material-symbols-outlined text-base">
                          video_call
                        </span>
                        <span>Join Call</span>
                      </button>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-lg bg-background-light dark:bg-background-dark">
                      <div className="flex flex-col items-center justify-center bg-secondary/10 text-secondary p-3 rounded-lg w-16 flex-shrink-0">
                        <span className="text-sm font-bold uppercase">Nov</span>
                        <span className="text-2xl font-black">12</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">Routine Physical Exam</p>
                        <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                          Dr. Marcus Thorne - 10:45 AM
                        </p>
                      </div>
                      <div className="text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">
                          location_on
                        </span>
                        Main Hospital
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">
                      Recent Diagnoses / AI Analysis
                    </h3>
                    <a
                      className="text-sm font-medium text-primary hover:underline"
                      href="#"
                    >
                      View all
                    </a>
                  </div>
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-start gap-4">
                      <div className="flex items-center justify-center size-9 rounded-full bg-primary/10 mt-1">
                        <span className="material-symbols-outlined text-primary text-xl">
                          science
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">Blood Panel Results</p>
                        <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                          AI analysis: All markers within normal range.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex items-center justify-center size-9 rounded-full bg-secondary/20 mt-1">
                        <span className="material-symbols-outlined text-secondary text-xl">
                          dermatology
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">Skin Lesion Analysis</p>
                        <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">
                          AI analysis: Low probability of malignancy. Follow-up
                          recommended.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                <div className="flex flex-col gap-4 p-6 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
                  <h3 className="text-lg font-semibold">
                    Health Tips / AI Recommendations
                  </h3>
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-start gap-4">
                      <div className="flex items-center justify-center size-9 rounded-full bg-primary/10 mt-1 flex-shrink-0">
                        <span className="material-symbols-outlined text-primary text-xl">
                          local_dining
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          Consider reducing sodium intake to better manage blood
                          pressure.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex items-center justify-center size-9 rounded-full bg-secondary/20 mt-1 flex-shrink-0">
                        <span className="material-symbols-outlined text-secondary text-xl">
                          directions_walk
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">
                          Your activity levels were low yesterday. Try a
                          20-minute walk today.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <button className="fixed bottom-8 right-8 flex items-center justify-center gap-2 h-14 w-14 md:w-auto md:px-6 bg-accent text-white rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 group">
          <span className="material-symbols-outlined text-3xl">sos</span>
          <span className="hidden md:inline font-bold text-sm">
            Emergency Help
          </span>
        </button>
      </div>
    </PatientLayout>
  );
};

export default PatientDashBoard;
