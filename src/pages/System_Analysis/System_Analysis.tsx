import AppLayout from "../../layout/AppLayout/AppLayout";
import Content from "./SubComponents/Content";
import EndContent from "./SubComponents/EndContent";
import Hero from "./SubComponents/Hero";
import LowerContent from "./SubComponents/LowerContent";
import MidContent from "./SubComponents/MidContent";

const System_Analysis = () => {
  return (
    <>
      <AppLayout>
        <Hero />
        <Content />
        <MidContent />
        <LowerContent />
        <EndContent />
      </AppLayout>
    </>
  );
};

export default System_Analysis;
