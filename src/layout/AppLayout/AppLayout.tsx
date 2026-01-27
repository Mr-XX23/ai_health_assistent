import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";

interface AppLayoutChildren {
  children: React.ReactNode;
}
const AppLayout = ({ children }: AppLayoutChildren) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark flex  w-full flex-col group/design-root">
      <Navbar />
      <div className="relative min-h-screen overflow-x-hidden">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
