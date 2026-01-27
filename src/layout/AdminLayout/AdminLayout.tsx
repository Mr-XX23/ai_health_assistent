import React from "react";
import Siderbar from "../../AdminComponents/components/Sidebar/Sidebar";

interface LayoutChildren {
  children: React.ReactNode;
}
const AdminLayout = ({ children }: LayoutChildren) => {
  return (
    <>
      <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
        <div className="relative flex min-h-screen w-full flex-row">
          <Siderbar />
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
