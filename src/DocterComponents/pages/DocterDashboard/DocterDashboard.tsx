import React from "react";
import Calender from "../../../components/calender/Calender";

const DocterDashboard = () => {
  return (
    <div>
      <div className="bg-background-light dark:bg-background-dark font-display text-[#334155] dark:text-slate-300">
        <div className="flex h-screen w-full">
          {/* <!-- Left Sidebar --> */}
          <div className="flex h-full w-[260px] flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
            <div className="flex h-full flex-col justify-between p-4">
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuCu3TXkUbnmkqQM2vrTukpxkg2kcYLRa8is5yU2MnAFDq_ubtln3EejLIBDKIi7NA7H8cszbwZUFTMebOpWaIpkjgWxfgD7qmlkJHVBsActBPAr-G89mQNzRjc40LjfCUBCl6DvvvZk5fsC1ACBpVWWV9hnvqGZKRQfEZnlx2MutP3m_JXKeNDsGaOoC1i0ybyXjt6hkknFzs0UYM9ahh5K2vgulldoxq_Bnkqb2QdkCcD3n4SYyfxsBOVkhvlEsZbbuNqEywPmR2gt)]"
                    data-alt="Portrait of Dr. Emily Carter"
                  ></div>
                  <div className="flex flex-col">
                    <h1 className="text-[#0d171b] dark:text-slate-100 text-base font-medium leading-normal">
                      Dr. Emily Carter
                    </h1>
                    <p className="text-[#4c809a] dark:text-slate-400 text-sm font-normal leading-normal">
                      Cardiologist
                    </p>
                  </div>
                </div>
                <nav className="flex flex-col gap-2 mt-4">
                  <a
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#0d171b] dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                    href="#"
                  >
                    <span className="material-symbols-outlined !text-xl">
                      dashboard
                    </span>
                    <p className="text-sm font-medium leading-normal">
                      Dashboard
                    </p>
                  </a>
                  <a
                    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary"
                    href="#"
                  >
                    <span className="material-symbols-outlined !text-xl">
                      calendar_month
                    </span>
                    <p className="text-sm font-medium leading-normal">
                      Appointments
                    </p>
                  </a>
                  <a
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#0d171b] dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                    href="#"
                  >
                    <span className="material-symbols-outlined !text-xl">
                      group
                    </span>
                    <p className="text-sm font-medium leading-normal">
                      Patients
                    </p>
                  </a>
                  <a
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#0d171b] dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                    href="#"
                  >
                    <span className="material-symbols-outlined !text-xl">
                      mail
                    </span>
                    <p className="text-sm font-medium leading-normal">
                      Messages
                    </p>
                  </a>
                </nav>
              </div>
              <div className="flex flex-col gap-1">
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#0d171b] dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                  href="#"
                >
                  <span className="material-symbols-outlined !text-xl">
                    settings
                  </span>
                  <p className="text-sm font-medium leading-normal">Settings</p>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#0d171b] dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                  href="#"
                >
                  <span className="material-symbols-outlined !text-xl">
                    help_outline
                  </span>
                  <p className="text-sm font-medium leading-normal">Help</p>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Main Content --> */}
          <main className="flex-1 grid grid-cols-12 overflow-hidden">
            {/* <!-- Appointments Panel --> */}
            <div className="col-span-4 h-screen overflow-y-auto border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 flex flex-col">
              <div className="p-4 border-b border-slate-200 dark:border-slate-800 sticky top-0 bg-white dark:bg-slate-900/50 z-10">
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                  Appointments
                </h2>
                <label className="flex flex-col min-w-40 h-11 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-[#4c809a] dark:text-slate-400 flex bg-[#e7eff3] dark:bg-slate-800 items-center justify-center pl-3 rounded-l-lg">
                      <span className="material-symbols-outlined !text-2xl">
                        search
                      </span>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-[#0d171b] dark:text-slate-200 focus:outline-0 focus:ring-0 border-none bg-[#e7eff3] dark:bg-slate-800 h-full placeholder:text-[#4c809a] dark:placeholder:text-slate-500 px-2 text-sm font-normal leading-normal"
                      placeholder="Search patient or date..."
                      value=""
                    />
                  </div>
                </label>
              </div>
              <Calender />

              <div className="flex-1 overflow-y-auto p-4 pt-0">
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-2">
                  Today, Oct 5
                </h3>
                <div className="flex flex-col divide-y divide-slate-200 dark:divide-slate-800">
                  <div className="flex gap-4 bg-primary/10 dark:bg-primary/20 p-3 justify-between rounded-lg">
                    <div className="flex items-start gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-[60px] w-fit bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDNPn8JmaHII4r8vh9jNgErVDasB9eXAxiLEMCRDJlFCAIdxV1zdxuol3hThR62b-jRT3rLUOKPIZp-2wLucq42f4AoVRSWej5-0Jw0h5MlM-N8ejMc2SOsu38hmeJ5ZvgyoicVhymFj6wNYWy0g93hPYPC-5dG-JAW4gbVAzngCiWI4ll_v1xHRhzdkUAo-pIpoI3m35s70iG6xsBIsdJe9ziQvfi9NqVHHOA7_9YY1iOpuKBWYmx4yb__JGs4HcwdPALd_VA16wI2)]"
                        data-alt="Portrait of John Doe"
                      ></div>
                      <div className="flex flex-1 flex-col justify-center gap-0.5">
                        <p className="text-[#0d171b] dark:text-slate-100 text-base font-medium leading-normal">
                          John Doe
                        </p>
                        <p className="text-[#4c809a] dark:text-slate-400 text-sm font-normal leading-normal">
                          Follow-up Consultation
                        </p>
                        <p className="text-[#4c809a] dark:text-slate-400 text-sm font-normal leading-normal">
                          10:30 AM - 11:00 AM
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 flex items-center">
                      <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-medium leading-normal w-fit shadow-sm hover:bg-primary/90">
                        <span className="truncate">Join Call</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-4 bg-transparent p-3 justify-between">
                    <div className="flex items-start gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-[60px] w-fit bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuAJ19gGazrcgLA4n68hfNS1SJvW5HceOXmXInwmALAQpseu0TNUXbGFdwkMtK-eRRQSdi7dMi3wBR4u5KizC8xDSHB96c2DEcyIFaFUaPK1-cmx6admkAG6ajHOrWp3-D3BAD9G3L9NIDGNozkCj0fdQUaqU7lCZAIQbp9uQSNelEJBH1sLUpvJU-Bl1zYHu1lTw3krdfi_sK-U8oUfhEYiMTh532kMb76Tq6gPgKRTChdg68r4e3kdKa7VUm5A-60-OhgMnCZGIc1B)]"
                        data-alt="Portrait of Anna Smith"
                      ></div>
                      <div className="flex flex-1 flex-col justify-center gap-0.5">
                        <p className="text-[#0d171b] dark:text-slate-100 text-base font-medium leading-normal">
                          Anna Smith
                        </p>
                        <p className="text-[#4c809a] dark:text-slate-400 text-sm font-normal leading-normal">
                          New Issue
                        </p>
                        <p className="text-[#4c809a] dark:text-slate-400 text-sm font-normal leading-normal">
                          11:00 AM - 11:30 AM
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 flex items-center">
                      <div
                        className="flex size-7 items-center justify-center"
                        title="Confirmed"
                      >
                        <div className="size-2.5 rounded-full bg-[#078836]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 bg-transparent p-3 justify-between">
                    <div className="flex items-start gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-[60px] w-fit bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuCCBVpKCxkF8HJLWzDC0wY2X3U1J_6cESBUx4ifUb957E9EKnRmZZJHsRiX0ymXVobw8MDjveofLAtc9PTtcpp_ep84WUQm8n7sf5uo5xB1WIQvAyRqfvVsM4T_47D5ytRbnBGkLYoPCOeVFZF9-1MwrafUdjlOhOA7Uqa5LEuqu2GSeBoK_K5sYK2N3MIKZVkikird_cEtymy1jHXFB7anDhARalMpygl24M-dl7cJTW3MAQojh9doeoJj0veNHG0m3GkNhJP3FnZn)]"
                        data-alt="Portrait of Robert Johnson"
                      ></div>
                      <div className="flex flex-1 flex-col justify-center gap-0.5">
                        <p className="text-[#0d171b] dark:text-slate-100 text-base font-medium leading-normal">
                          Robert Johnson
                        </p>
                        <p className="text-[#4c809a] dark:text-slate-400 text-sm font-normal leading-normal">
                          Prescription Refill
                        </p>
                        <p className="text-[#4c809a] dark:text-slate-400 text-sm font-normal leading-normal">
                          11:30 AM - 11:45 AM
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 flex items-center">
                      <div
                        className="flex size-7 items-center justify-center"
                        title="Confirmed"
                      >
                        <div className="size-2.5 rounded-full bg-[#078836]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 bg-transparent p-3 justify-between opacity-60">
                    <div className="flex items-start gap-4">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-[60px] w-fit bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuCRwi3OmP-fSEuCUlZpzfRAADeJuoioilhdPt6zy9lUGU6Huq1q5nw3wduEebZ6kpGSU00-DDOF38UX6hQ-pFvML1j7rj7eT4m6X4LJ5U7xiY4GRMrrljJgZ0cduTLEKaekjRbzv2ZHMH9vFNUGMFT6d1v-_3CttjO_T35F-NvVuRnmQ26m7nNq06rcoXwmKRbXY_3yg_3ZIRh6eTSNv0w5UfKfEJylteVo-Bn6UxpOsTAqQwHz7kQ_nPmkiCTAl2jvqC8-ZnM0TV-z)]"
                        data-alt="Portrait of Maria Garcia"
                      ></div>
                      <div className="flex flex-1 flex-col justify-center gap-0.5">
                        <p className="text-[#0d171b] dark:text-slate-100 text-base font-medium leading-normal">
                          Maria Garcia
                        </p>
                        <p className="text-[#4c809a] dark:text-slate-400 text-sm font-normal leading-normal">
                          Routine Check-up
                        </p>
                        <p className="text-[#4c809a] dark:text-slate-400 text-sm font-normal leading-normal">
                          09:00 AM - 09:30 AM
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 flex items-center">
                      <span
                        className="material-symbols-outlined !text-2xl text-green-600"
                        title="Completed"
                      >
                        task_alt
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Video/Details Panel --> */}
            <div className="col-span-8 h-screen overflow-y-auto bg-background-light dark:bg-background-dark p-8 flex flex-col">
              <div className="bg-white dark:bg-slate-900/50 rounded-xl shadow-sm p-6 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                      Consultation with John Doe
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                      Today, October 5, 2023 at 10:30 AM
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Starts in
                    </p>
                    <p className="text-3xl font-bold text-primary">04:22</p>
                  </div>
                </div>
              </div>
              <div className="flex-grow bg-slate-900 dark:bg-black rounded-xl flex flex-col justify-between items-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-30 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuC1jUoo-dgfiGt-gt-CyED2_IeNeBR2l7p3Sj7HoFRj2GeuNCvDFU9NszHxcYm2i8Jk_eqTVZtjySEO_8B3n99VPYD47pHrUa2ufLaVwVIrRabW0WeFl0stDylnK7o66fmMeb0-wPoLZVKOzJdkAc8D4vFSIbpqebmad97flVBUE7w2QLboWFS3c5vb-KFOfkEKsp9yjqkMcpaCWVafYdBPSIo8Sf-dquUA3qkSJHvgXmFAqSYKkKBQrORMNygfdPsuqdRxAvuCKx5a)]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80"></div>
                <div className="z-10 flex-grow flex flex-col items-center justify-center p-8 text-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 border-4 border-white/50 mb-4 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDLz50JNgahW2iXj1-RO0KdQEay1eAxnSXQmBVu2k-6qavDPngbr3CdCykRbK2f-cf8ZgqjC8wHg5-eXJpJz-24ZsSfN7CRB0m-f8YRD_OMQpVDz3Q6rLYK4u40rhdh7sK1SNxDr_JxRUgEVQs8alJMC7L3GI2-2MV2KMfZ1dvr3zotC2pcbA8B2C8eXMigbKusVzmTvqO6IS8d1lqzlQG93f4-_CM8Oi7ndqmhIqu4xKfByZCofvfGsyV7Q6BJxfExrxmadxl3Yorq)]"
                    data-alt="Portrait of John Doe"
                  ></div>
                  <h2 className="text-2xl font-bold">
                    Waiting for patient to join...
                  </h2>
                  <p className="text-slate-300 mt-2 max-w-md">
                    The consultation is scheduled to begin shortly. You can use
                    this time to review the patient's chart and prepare your
                    notes.
                  </p>
                  <button className="flex items-center justify-center gap-2 min-w-[84px] cursor-pointer overflow-hidden rounded-lg h-12 px-6 mt-8 bg-primary text-white text-base font-medium shadow-lg hover:bg-primary/90 transition-all">
                    <span className="material-symbols-outlined !text-2xl">
                      videocam
                    </span>
                    <span>Start Consultation</span>
                  </button>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <div className="w-48 h-28 bg-black rounded-lg border-2 border-slate-700 overflow-hidden">
                    <img
                      alt="Self-view of Dr. Emily Carter"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2ji1igJAUfaH0pcGWCK5APQv4B4d6CythckKDK2ogFEk4wDLSphcMU9QYub-bCRmrJnPEWH-eiqkMYO9I_uJN9qTNNkEZEg1qO7NNkzuL5O-2E9RjZ5tERYzes11STM25WYlRlN1bHzOGc_Ff8vPb16d7Cab-NN5zQU7ipoJppxROvL4C7yxdVBOJq7Gg_hhe3oisTui_3p2z13IyDfqVUJh22L_SvOWQlN_NIFe8P6iy1ztbD3DTLYiOzofXKF0WN7z021yKcQQI"
                    />
                  </div>
                </div>
                <div className="w-full p-4 z-10">
                  <div className="max-w-md mx-auto bg-black/40 backdrop-blur-sm rounded-full p-2 flex justify-center items-center gap-2">
                    <button className="flex items-center justify-center size-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                      <span className="material-symbols-outlined">mic</span>
                    </button>
                    <button className="flex items-center justify-center size-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                      <span className="material-symbols-outlined">
                        videocam
                      </span>
                    </button>
                    <button className="flex items-center justify-center size-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                      <span className="material-symbols-outlined">
                        screen_share
                      </span>
                    </button>
                    <button className="flex items-center justify-center size-12 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors">
                      <span className="material-symbols-outlined">
                        call_end
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="border-b border-slate-200 dark:border-slate-700">
                  <nav aria-label="Tabs" className="-mb-px flex space-x-6">
                    <a
                      className="whitespace-nowrap border-b-2 py-3 px-1 border-primary text-primary font-semibold text-sm"
                      href="#"
                    >
                      Patient Chart
                    </a>
                    <a
                      className="whitespace-nowrap border-b-2 py-3 px-1 border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-500 font-medium text-sm"
                      href="#"
                    >
                      Live Chat
                    </a>
                    <a
                      className="whitespace-nowrap border-b-2 py-3 px-1 border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:border-slate-500 font-medium text-sm"
                      href="#"
                    >
                      Add Notes
                    </a>
                  </nav>
                </div>
                <div className="py-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-1 bg-white dark:bg-slate-900/50 rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-slate-800 dark:text-slate-100">
                        Patient Summary
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        <li>
                          <strong>DOB:</strong> Jan 15, 1985 (38y)
                        </li>
                        <li>
                          <strong>Allergies:</strong> Penicillin
                        </li>
                        <li>
                          <strong>Recent Visit:</strong> Sep 20, 2023
                        </li>
                        <li>
                          <strong>Reason:</strong> Annual Physical
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-2 bg-white dark:bg-slate-900/50 rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-slate-800 dark:text-slate-100">
                        Prepare for Call
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-green-500 !text-xl">
                            check_circle
                          </span>{" "}
                          Review patient's medication list.
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-green-500 !text-xl">
                            check_circle
                          </span>{" "}
                          Check recent lab results.
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-slate-400 !text-xl">
                            radio_button_unchecked
                          </span>{" "}
                          Prepare follow-up questions.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DocterDashboard;
