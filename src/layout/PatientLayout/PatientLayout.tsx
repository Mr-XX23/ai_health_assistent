import type React from "react";
import Sidebar from "../../PatientPages/components/Sidebar/Sidebar";
import { useState } from "react";

interface LayoutChildren {
  children: React.ReactNode;
}
const PatientLayout = ({ children }: LayoutChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary">
      <div className="relative flex min-h-screen w-full">
        {/* sidebar */}
        <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

        {/* main content */}
        <div className="flex-1 flex flex-col w-full">
          <div className="lg:hidden p-4">
            <button
              onClick={() => setIsOpen(true)}
              className="material-symbols-outlined text-3xl dark:text-white"
            >
              menu
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PatientLayout;
