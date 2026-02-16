import React from "react";

const Appointment = () => {
  return (
    <div>
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
  );
};

export default Appointment;
