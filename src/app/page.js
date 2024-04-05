import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

import Section1 from "@/components/Section/Section1";
import Section2 from "@/components/Section/Section2";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
    </>
  );
}
