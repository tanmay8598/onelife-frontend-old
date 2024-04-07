import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

import Section1 from "@/components/Section/Section1";
import Section2 from "@/components/Section/Section2";
import Section3 from "@/components/Section/Section3";
import Section4 from "@/components/Section/Section4";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}
