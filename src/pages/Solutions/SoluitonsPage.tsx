import React from "react";
import Hero from "./SubComponents/Hero";
import Content from "./SubComponents/Content";
import SubContent from "./SubComponents/SubContent";
import Benefits from "./SubComponents/Benefits";
import EndingContent from "./SubComponents/EndingContent";
import AppLayout from "../../layout/userlayout/AppLayout";

const SoluitonsPage = () => {
  return (
    <>
      <AppLayout>
        <div className="flex-grow bg-content-light">
          <div className="container mx-auto px-4 py-16 sm:py-24">
            <Hero />
            <Content />
            <SubContent />
            <Benefits />
            <EndingContent />
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default SoluitonsPage;
