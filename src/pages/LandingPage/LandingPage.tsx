import AppLayout from "../../layout/userlayout/AppLayout";
import FAQ from "../FAQ/FAQ";
import Content from "./SubComponents/Content";
import Hero from "./SubComponents/Hero";
import SubHero from "./SubComponents/SubHero";

const LandingPage = () => {
  return (
    <AppLayout>
      <div className="grow">
        <Hero />
        <div className="space-y-24 md:space-y-32 py-24 md:py-32">
          <SubHero />
          <Content />
        </div>
        <FAQ />
      </div>
    </AppLayout>
  );
};

export default LandingPage;
