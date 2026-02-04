import AppLayout from "../../layout/AppLayout/AppLayout";
import FAQ from "../FAQ/FAQ";
import Description from "./SubComponents/Description";
import Hero from "./SubComponents/Hero";
import SystemBenefits from "./SubComponents/SystemBenefit";
import SystemOffer from "./SubComponents/SystemOffer";
import SystemProcess from "./SubComponents/SystemProcess";

const LandingPage = () => {
  return (
    <AppLayout>
      <div className="flex-grow">
        <Hero />
        <div className="space-y-24 md:space-y-32 py-24 md:py-32">
          <Description />
          <SystemOffer />
          <SystemBenefits />
          <SystemProcess />
        </div>
        <FAQ />
      </div>
    </AppLayout>
  );
};

export default LandingPage;
