import React from "react";

const Topbar = () => {
  return (
    <div>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-border-light dark:border-border-dark px-8 py-4 bg-card-light dark:bg-card-dark ">
        <div className="flex flex-col">
          <p className="text-2xl font-bold tracking-tight dark:text-secondary">
            Hello, Maria
          </p>
          <p className="text-base font-normal text-text-light-secondary dark:text-secondary">
            Welcome back to your health dashboard.
          </p>
        </div>
        <div className="flex flex-1 justify-end items-center gap-4">
          <label className="relative hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-light-secondary dark:text-secondary">
              search
            </span>
            <input
              className="dark:text-secondary form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-background-light dark:bg-background-dark placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary h-10 border-none pl-10 pr-4 text-sm"
              placeholder="Search..."
              type="search"
            />
          </label>
          <button className="dark:text-yellow-300 relative flex items-center justify-center rounded-full h-10 w-10 bg-background-light dark:bg-background-dark hover:bg-primary/10 transition-colors">
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
    </div>
  );
};

export default Topbar;
