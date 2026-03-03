import { useState } from "react";
import AppLayout from "../../../layout/AppLayout/AppLayout";
import EndQns from "./BillingQns/EndQns";
import Compare from "./Hero/Compare";
import Content from "./Hero/Content";
import Hero from "./Hero/Hero";
import Qns from "./Hero/Qns";

const Pricingpage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <AppLayout>
      <Hero isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      <Content isAnnual={isAnnual} />
      <Compare />
      <Qns />
      <EndQns />
    </AppLayout>
  );
};

export default Pricingpage;
