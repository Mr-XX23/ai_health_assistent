import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/footer";

const Landing = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <Navbar />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
