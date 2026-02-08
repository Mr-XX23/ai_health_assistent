import React, { useState } from "react";

const EmailPassword = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <div>
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-sm font-medium leading-normal pb-2 dark:text-slate-300">
            Email Address
          </p>
          <div className="flex w-full flex-1 items-stretch rounded-lg">
            <div className="text-slate-400 flex border border-slate-300 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 items-center justify-center px-[15px] rounded-l-lg border-r-0">
              <span className="material-symbols-outlined text-[20px]">
                mail
              </span>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#101c22] dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 focus:border-primary/80 dark:focus:border-primary/80 h-12 placeholder:text-slate-400 p-[15px] rounded-l-none text-base font-normal leading-normal"
              placeholder="Enter your email"
              type="email"
              // value=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </label>
      </div>
      <div>
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-sm font-medium leading-normal pb-2 dark:text-slate-300">
            Password
          </p>
          <div className="flex w-full flex-1 items-stretch rounded-lg">
            <div className="text-slate-400 flex border border-slate-300 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 items-center justify-center px-[15px] rounded-l-lg border-r-0">
              <span className="material-symbols-outlined text-[20px]">
                lock
              </span>
            </div>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter your password"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#101c22] dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 focus:border-primary/80 dark:focus:border-primary/80 h-12 placeholder:text-slate-400 p-[15px] rounded-none text-base font-normal leading-normal  "
            />
            <div
              onClick={() => setShowPass(!showPass)}
              className="text-slate-400 flex border border-slate-300 bg-slate-100 dark:bg-slate-800 dark:border-slate-600 items-center justify-center p-2 rounded-r-lg border-l-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">
                {showPass ? "visibility" : "visibility_off"}
              </span>
            </div>
          </div>
        </label>
      </div>
    </>
  );
};

export default EmailPassword;
