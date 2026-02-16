import React from "react";

const Logo = () => {
  return (
    <div>
      <div className="flex items-center gap-2 px-3 text-text-light dark:text-text-dark">
        <span className="material-symbols-outlined text-primary text-3xl">
          database
        </span>
        <h2 className="text-lg font-bold tracking-[-0.015em]">
          AI Health Assistant
        </h2>
      </div>
    </div>
  );
};

export default Logo;
