import AppLayout from "../../../layout/AppLayout/AppLayout";
import FAQ from "../FAQ/FAQ";
import Description from "./Subcomponents/Description";
import Hero from "./Subcomponents/Hero";
import SystemBenefits from "./Subcomponents/SystemBenefit";
import SystemOffer from "./Subcomponents/SystemOffer";
import SystemProcess from "./Subcomponents/SystemProcess";

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
