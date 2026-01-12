import React from "react";

const Phone = () => {
  return (
    <div>
      <label className="flex flex-col min-w-40 flex-1">
        <div className="flex items-center pb-2">
          <p className="text-sm font-medium leading-normal dark:text-slate-300">
            Phone Number
          </p>
          <span className="ml-2 text-xs text-slate-400 dark:text-slate-500">
            (Optional)
          </span>
        </div>
        <div className="flex w-full flex-1 items-stretch rounded-lg">
          <div className="text-slate-400 flex border border-slate-300 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 items-center justify-center px-[15px] rounded-l-lg border-r-0">
            <span className="material-symbols-outlined text-[20px]">phone</span>
          </div>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#101c22] dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-white dark:bg-slate-800 dark:border-slate-600 focus:border-primary/80 dark:focus:border-primary/80 h-12 placeholder:text-slate-400 p-[15px] rounded-l-none text-base font-normal leading-normal"
            placeholder="+977 987654321"
            type="tel"
            // value=""
          />
        </div>
      </label>
    </div>
  );
};

export default Phone;
