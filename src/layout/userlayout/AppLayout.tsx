import LandingPage from "../../pages/LandingPage/LandingPage";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

interface AppLayoutChildren {
  children: React.ReactNode;
}
const AppLayout = ({ children }: AppLayoutChildren) => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <Navbar />
        {children}

        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
