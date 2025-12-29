import React from "react";
import Siderbar from "../../AdminComponents/Sidebare/Siderbar";
import Footer from "../../components/Footer";

interface LayoutChildren {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutChildren) => {
  return (
    <>
      <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
        <div className="relative flex min-h-screen w-full flex-row">
          <Siderbar />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
