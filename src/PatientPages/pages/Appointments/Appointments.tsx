import PatientLayout from "../../../layout/PatientLayout/PatientLayout";

const Appointments = () => {
  return (
    <div>
      <PatientLayout>
        <body className="font-display bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary">
          <div className="relative flex min-h-screen w-full">
            <aside className="flex flex-col w-64 p-4 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark shrink-0">
              <div className="flex items-center gap-2 px-3 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">health_and_safety</span>
                <h2 className="text-lg font-bold">AI Health</h2>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuBXgdR9fgxacnA8bv-FOXrmQl3rngBtUSt3sVHP-7x1lh9acKjucsLtemUYApawkGcdjSJ_HQT3zu68yWpnlP2XhD53h007Q7mRs_voOLnjONn5L8nfg5r3SF1fxBeKrKbRKGMPL3WEOWPE72AxijFI-kbihju6BFbanVtdVYp-KQOLhd6c6GB9kR3rkK8cFxWCOngi_vh2HdDZWj2NGShV5u9pAOHxhzHlCxGHCew54tH4-Pz11_NHxTyUz3imp-2nxc24VsIZ4ZS0)]"></div>
                  <div className="flex flex-col">
                    <h1 className="text-base font-medium">Maria Garcia</h1>
                    <p className="text-sm font-normal text-text-light-secondary dark:text-text-dark-secondary">maria.g@email.com</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200" href="#">
                    <span className="material-symbols-outlined">dashboard</span>
                    <p className="text-sm font-medium">Dashboard</p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200" href="#">
                    <span className="material-symbols-outlined">folder_managed</span>
                    <p className="text-sm font-medium">Medical History</p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200" href="#">
                    <span className="material-symbols-outlined">medication</span>
                    <p className="text-sm font-medium">Medications</p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200" href="#">
                    <span className="material-symbols-outlined">stethoscope</span>
                    <p className="text-sm font-medium">Symptom Checker</p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary" href="#">
                    <span className="material-symbols-outlined fill">calendar_month</span>
                    <p className="text-sm font-medium">Appointments</p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200" href="#">
                    <span className="material-symbols-outlined">chat</span>
                    <p className="text-sm font-medium">Messages</p>
                  </a>
                </div>
              </div>
              <div className="mt-auto">
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200" href="#">
                  <span className="material-symbols-outlined">settings</span>
                  <p className="text-sm font-medium">Settings</p>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors duration-200" href="#">
                  <span className="material-symbols-outlined">logout</span>
                  <p className="text-sm font-medium">Logout</p>
                </a>
              </div>
            </aside>
            <main className="flex-1 flex flex-col h-screen">
              <header className="flex items-center justify-between whitespace-nowrap border-b border-border-light dark:border-border-dark px-8 py-4 bg-card-light dark:bg-card-dark shrink-0">
                <div className="flex flex-col">
                  <p className="text-2xl font-bold tracking-tight">Appointments</p>
                  <p className="text-base font-normal text-text-light-secondary dark:text-text-dark-secondary">Manage and schedule your healthcare visits.</p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="relative flex items-center justify-center rounded-full h-10 w-10 bg-background-light dark:bg-background-dark hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-1 right-1.5 flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                    </span>
                  </button>
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwKLN-DIyGLSsHJVAT6wcoiINFinPdz7BjtIxSlSoatnO-Gfeu0FQgjR8_QNm01ipL6izejmiRO6_-qHMq2-3INDcOzrekGh5oSuMxhEgNLeRK8RwIoVA0Qj9oBafv_zNAx2CItZ6Az6ZAAV4yK70LWrYDyIRGsh4WBu8XFwKSvrBMCHCcK9h85u6WbiHlDSoINFuipHkoBd9Ih2n-Ez6N6ZuexvyzAx8pRnsmu5RONGjVWWUdSUUbfpYeF8b1ABKeCZc3ufCAZ4fB");'></div>
                </div>
              </header>
              <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark custom-scrollbar">
                <div className="max-w-[1400px] mx-auto p-8 flex flex-col gap-8">
                  <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="flex items-center justify-between p-4 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-2xl">event_available</span>
                        <span className="font-semibold">Schedule New</span>
                      </div>
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                    <button className="flex items-center justify-between p-4 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl hover:bg-primary/5 transition-colors group">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">person_search</span>
                        <span className="font-semibold">Find a Specialist</span>
                      </div>
                      <span className="material-symbols-outlined text-text-light-secondary">chevron_right</span>
                    </button>
                    <button className="flex items-center justify-between p-4 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl hover:bg-primary/5 transition-colors group">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">event_repeat</span>
                        <span className="font-semibold">Follow Up</span>
                      </div>
                      <span className="material-symbols-outlined text-text-light-secondary">chevron_right</span>
                    </button>
                  </section>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex items-center gap-4">
                        <h3 className="text-xl font-bold">Upcoming Appointments</h3>
                        <a className="text-sm font-semibold text-primary hover:underline" href="#">View All Appointments</a>
                      </div>
                      <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="relative flex-1 md:w-80">
                          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-light-secondary text-sm">search</span>
                          <input className="w-full pl-10 pr-4 py-2 rounded-lg border-none bg-card-light dark:bg-card-dark text-sm focus:ring-2 focus:ring-primary/50" placeholder="Search by doctor or specialty..." type="text" />
                        </div>
                        <button className="flex items-center gap-2 px-3 py-2 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-lg text-sm font-medium hover:bg-background-light transition-colors">
                          <span className="material-symbols-outlined text-sm">tune</span>
                          <span>Filter</span>
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                      <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden group hover:border-primary/50 transition-colors">
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                              <div className="relative">
                                <div className="w-16 h-16 rounded-xl bg-center bg-cover border-2 border-white dark:border-border-dark bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuBXgdR9fgxacnA8bv-FOXrmQl3rngBtUSt3sVHP-7x1lh9acKjucsLtemUYApawkGcdjSJ_HQT3zu68yWpnlP2XhD53h007Q7mRs_voOLnjONn5L8nfg5r3SF1fxBeKrKbRKGMPL3WEOWPE72AxijFI-kbihju6BFbanVtdVYp-KQOLhd6c6GB9kR3rkK8cFxWCOngi_vh2HdDZWj2NGShV5u9pAOHxhzHlCxGHCew54tH4-Pz11_NHxTyUz3imp-2nxc24VsIZ4ZS0)]"></div>
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center border-2 border-white dark:border-border-dark">
                                  <span className="material-symbols-outlined text-[14px] text-white fill">videocam</span>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-bold text-lg text-text-light-primary dark:text-text-dark-primary">Dr. Sarah Johnson</h4>
                                <div className="flex items-center gap-2">
                                  <p className="text-sm text-primary font-medium">Cardiology Specialist</p>
                                  <span className="text-[10px] px-2 py-0.5 rounded bg-primary/5 text-primary border border-primary/10 font-bold uppercase tracking-wide">New Consultation</span>
                                </div>
                              </div>
                            </div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20">
                              Confirmed
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4 p-4 bg-background-light dark:bg-background-dark rounded-lg mb-6">
                            <div className="flex items-center gap-3">
                              <span className="material-symbols-outlined text-text-light-secondary">calendar_today</span>
                              <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-wider text-text-light-secondary font-bold">Date</span>
                                <span className="text-sm font-semibold">Oct 24, 2023</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="material-symbols-outlined text-text-light-secondary">schedule</span>
                              <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-wider text-text-light-secondary font-bold">Time</span>
                                <span className="text-sm font-semibold">10:30 AM (EST)</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-sm text-text-light-secondary">location_on</span>
                              <span className="text-sm font-medium text-text-light-secondary">Video Consultation</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="px-4 py-2 text-sm font-bold text-primary hover:bg-primary/10 rounded-lg transition-colors">Reschedule</button>
                              <button className="px-4 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">Join Call</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden group hover:border-primary/50 transition-colors">
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                              <div className="relative">
                                <div className="w-16 h-16 rounded-xl bg-center bg-cover border-2 border-white dark:border-border-dark" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwKLN-DIyGLSsHJVAT6wcoiINFinPdz7BjtIxSlSoatnO-Gfeu0FQgjR8_QNm01ipL6izejmiRO6_-qHMq2-3INDcOzrekGh5oSuMxhEgNLeRK8RwIoVA0Qj9oBafv_zNAx2CItZ6Az6ZAAV4yK70LWrYDyIRGsh4WBu8XFwKSvrBMCHCcK9h85u6WbiHlDSoINFuipHkoBd9Ih2n-Ez6N6ZuexvyzAx8pRnsmu5RONGjVWWUdSUUbfpYeF8b1ABKeCZc3ufCAZ4fB");'></div>
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white dark:border-border-dark">
                                  <span className="material-symbols-outlined text-[14px] text-white">person</span>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-bold text-lg text-text-light-primary dark:text-text-dark-primary">Dr. Michael Chen</h4>
                                <div className="flex items-center gap-2">
                                  <p className="text-sm text-primary font-medium">Primary Care Physician</p>
                                  <span className="text-[10px] px-2 py-0.5 rounded bg-primary/5 text-primary border border-primary/10 font-bold uppercase tracking-wide">Follow-up</span>
                                </div>
                              </div>
                            </div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-warning-light/10 text-warning-dark border border-warning-light/20">
                              Pending
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4 p-4 bg-background-light dark:bg-background-dark rounded-lg mb-6">
                            <div className="flex items-center gap-3">
                              <span className="material-symbols-outlined text-text-light-secondary">calendar_today</span>
                              <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-wider text-text-light-secondary font-bold">Date</span>
                                <span className="text-sm font-semibold">Oct 28, 2023</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="material-symbols-outlined text-text-light-secondary">schedule</span>
                              <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-wider text-text-light-secondary font-bold">Time</span>
                                <span className="text-sm font-semibold">02:15 PM (EST)</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-sm text-text-light-secondary">home_health</span>
                              <span className="text-sm font-medium text-text-light-secondary">In-person Visit</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="px-4 py-2 text-sm font-bold text-accent hover:bg-accent/10 rounded-lg transition-colors">Cancel</button>
                              <button className="px-4 py-2 text-sm font-bold bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg hover:bg-primary/5 transition-colors">View Directions</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold">Recent History</h3>
                        <a className="text-sm font-bold text-primary hover:underline" href="#">View All History</a>
                      </div>
                      <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm text-left">
                            <thead className="text-xs text-text-light-secondary dark:text-text-dark-secondary uppercase bg-background-light dark:bg-background-dark">
                              <tr>
                                <th className="px-6 py-4 font-bold" scope="col">Doctor</th>
                                <th className="px-6 py-4 font-bold" scope="col">Specialty</th>
                                <th className="px-6 py-4 font-bold" scope="col">Date</th>
                                <th className="px-6 py-4 font-bold" scope="col">Type</th>
                                <th className="px-6 py-4 font-bold" scope="col">Status</th>
                                <th className="px-6 py-4" scope="col"></th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border-light dark:divide-border-dark">
                              <tr className="hover:bg-primary/5 transition-colors">
                                <td className="px-6 py-4 font-semibold">Dr. Emily Watson</td>
                                <td className="px-6 py-4 text-text-light-secondary">Dermatologist</td>
                                <td className="px-6 py-4">Sep 12, 2023</td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-sm">person</span>
                                    <span>In-person</span>
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-text-light-secondary/10 text-text-light-secondary">Completed</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                  <button className="text-primary font-bold hover:underline">Review Summary</button>
                                </td>
                              </tr>
                              <tr className="hover:bg-primary/5 transition-colors">
                                <td className="px-6 py-4 font-semibold">Dr. Alan Turing</td>
                                <td className="px-6 py-4 text-text-light-secondary">Neurologist</td>
                                <td className="px-6 py-4">Aug 28, 2023</td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-sm">videocam</span>
                                    <span>Video</span>
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-text-light-secondary/10 text-text-light-secondary">Completed</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                  <button className="text-primary font-bold hover:underline">Review Summary</button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>

        </body>
      </PatientLayout>
    </div>
  );
};

export default Appointments;
