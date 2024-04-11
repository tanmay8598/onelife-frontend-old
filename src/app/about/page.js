import AboutHero from "@/components/About/AboutHero";
import AboutSection1 from "@/components/About/AboutSection1";
import AboutSection3 from "@/components/About/AboutSection3";
import Section3 from "@/components/Section/Section3";
import Section4 from "@/components/Section/Section4";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutSection1 />
      <Section4 />
      <AboutSection3 />
    </div>
  );
};

export default page;
