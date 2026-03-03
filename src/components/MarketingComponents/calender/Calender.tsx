import React from "react";

const Calender = () => {
  return (
    <div>
      <div className="p-4">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center p-1 justify-between">
            <button className="text-[#0d171b] dark:text-slate-200 flex size-10 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined !text-lg">
                chevron_left
              </span>
            </button>
            <p className="text-[#0d171b] dark:text-slate-100 text-sm font-bold leading-tight flex-1 text-center">
              October 2023
            </p>
            <button className="text-[#0d171b] dark:text-slate-200 flex size-10 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined !text-lg">
                chevron_right
              </span>
            </button>
          </div>
          <div className="grid grid-cols-7">
            <p className="text-[#4c809a] dark:text-slate-400 text-xs font-bold leading-normal flex h-10 w-full items-center justify-center pb-0.5">
              S
            </p>
            <p className="text-[#4c809a] dark:text-slate-400 text-xs font-bold leading-normal flex h-10 w-full items-center justify-center pb-0.5">
              M
            </p>
            <p className="text-[#4c809a] dark:text-slate-400 text-xs font-bold leading-normal flex h-10 w-full items-center justify-center pb-0.5">
              T
            </p>
            <p className="text-[#4c809a] dark:text-slate-400 text-xs font-bold leading-normal flex h-10 w-full items-center justify-center pb-0.5">
              W
            </p>
            <p className="text-[#4c809a] dark:text-slate-400 text-xs font-bold leading-normal flex h-10 w-full items-center justify-center pb-0.5">
              T
            </p>
            <p className="text-[#4c809a] dark:text-slate-400 text-xs font-bold leading-normal flex h-10 w-full items-center justify-center pb-0.5">
              F
            </p>
            <p className="text-[#4c809a] dark:text-slate-400 text-xs font-bold leading-normal flex h-10 w-full items-center justify-center pb-0.5">
              S
            </p>
            <button className="h-10 w-full text-slate-500 dark:text-slate-400 col-start-4 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full">
                1
              </div>
            </button>
            <button className="h-10 w-full text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full">
                2
              </div>
            </button>
            <button className="h-10 w-full text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full">
                3
              </div>
            </button>
            <button className="h-10 w-full text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full">
                4
              </div>
            </button>
            <button className="h-10 w-full text-white dark:text-slate-900 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full bg-primary">
                5
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                6
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                7
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                8
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                9
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                10
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                11
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                12
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                13
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                14
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                15
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                16
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                17
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                18
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                19
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                20
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                21
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                22
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                23
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                24
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                25
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                26
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                27
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                28
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                29
              </div>
            </button>
            <button className="h-10 w-full text-[#0d171b] dark:text-slate-200 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                30
              </div>
            </button>
            <button className="h-10 w-full text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">
              <div className="flex size-full items-center justify-center rounded-full">
                31
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
