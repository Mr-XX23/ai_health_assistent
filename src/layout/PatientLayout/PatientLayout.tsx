import type React from "react";
import Sidebar from "../../AdminComponents/components/Sidebar/Sidebar";
import PatientSidebar from "../../PatientComponents/components/sidebar/PatientSidebar";

interface LayoutChildren {
  children: React.ReactNode;
}
const PatientLayout = ({ children }: LayoutChildren) => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary">
      <div className="relative flex min-h-screen w-full">
        <PatientSidebar />
        {children}
      </div>
    </div>
  );
};

export default PatientLayout;
