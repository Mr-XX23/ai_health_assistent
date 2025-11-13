import Hero from "./SubComponents/Hero";
import SubHero from "./SubComponents/SubHero";

const LandingPage = () => {
  return (
    <div className="flex-grow">
      <Hero />
      <div className="space-y-24 md:space-y-32 py-24 md:py-32">
        <SubHero />
      </div>
    </div>
  );
};

export default LandingPage;
