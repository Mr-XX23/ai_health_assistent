import React from "react";

const TopBar = () => {
  return (
    <div>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-10 py-3 bg-card-light dark:bg-card-dark sticky top-0 z-10">
        <div className="flex flex-1 items-center gap-8">
          <label className="relative flex-grow max-w-lg">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark">
              search
            </span>
            <input
              className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Search for patients, reports..."
              type="search"
            />
          </label>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent hover:bg-primary/10">
            <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">
              notifications
            </span>
          </button>
          <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent hover:bg-primary/10">
            <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">
              chat_bubble
            </span>
          </button>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuDk8tm0iGYUr71baoegMaaZV_zC0ytEVtv22uv7CD0Cs_Ovh3biGxFpMjnm9jFz3ldjK_8fUzZH8D6JKTy9S_2Y44w0SniXpp--s4d90ymr4eXjs8mqhuKSEKJFrYrzEDBBBY6kFim1GJbXt273Q0xJlCIs5YBdqnFfBSwsi1XoR9ifoDnu2qeUpXfU4By0lLxIJuDLfWhrRP0f4pPLMkpgdSZwQ0lLA_jeDoPfLLFcHITIAoBZjc7t9PKpvjfEdm-LO6hioKpITiPw)]"
            data-alt="Profile picture of Dr. Evelyn Reed"
          ></div>
        </div>
      </header>
    </div>
  );
};

export default TopBar;
