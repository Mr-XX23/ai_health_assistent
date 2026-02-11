import React, { useState } from "react";
import DocterLayout from "../../../layout/DocterLayout/DocterLayout";
import Calender from "../../../components/calender/Calender";
import Appointment from "../../components/Appointments/Appointment";
import VideoCall from "../../components/VideoCall/VideoCall";

const DocterSideAppointment = () => {
  const [searchBar, setSearchBar] = useState("");
  return (
    <DocterLayout>
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
                  onChange={(e) => setSearchBar(e.target.value)}
                />
              </div>
            </label>
          </div>
          <Calender />
          <Appointment />
        </div>
        {/* <!-- Video/Details Panel --> */}
        <VideoCall />
      </main>
    </DocterLayout>
  );
};

export default DocterSideAppointment;
