import FAQ from "../FAQ/FAQ";
import Content from "./SubComponents/Content";
import Hero from "./SubComponents/Hero";
import SubHero from "./SubComponents/SubHero";

const LandingPage = () => {
  return (
    <div className="flex-grow">
      <Hero />
      <div className="space-y-24 md:space-y-32 py-24 md:py-32">
        <SubHero />
        <Content />
      </div>
      <FAQ />
    </div>
  );
};

export default LandingPage;
