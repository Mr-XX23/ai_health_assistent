import type React from "react";
import Sidebar from "../../components/DocterComponents/components/Sidebar/Sidebar";

interface DocterLayoutChildren {
  children: React.ReactNode;
}
const DocterLayout = ({ children }: DocterLayoutChildren) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#334155] dark:text-slate-300">
      <div className="flex h-screen w-full">
        <Sidebar />

        <main className="flex-1 xl:ml-[260px] p-6">{children}</main>
      </div>
    </div>
  );
};
export default DocterLayout;
