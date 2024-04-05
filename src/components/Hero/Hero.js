import React from "react";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative lg:h-[700px] bg-bg-img-1 bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0  bg-black/30 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 text-center">
        <div className="w-full">
          <h1 className="text-3xl font-extrabold lg:text-[60px] text-white uppercase [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]">
            One Life, Endless
            <strong className="block font-extrabold text-blue uppercase text-4xl lg:text-[90px] lg:mt-9">
              Adventures
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white lg:mt-10  font-bold lg:text-xl drop-shadow-lg">
            #1 Travel Agency in Dubai. Rated by 100+ satisfied travelers. 👍
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="tracking-wide border-2 border-black border-solid block  rounded bg-white px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black lg:text-md hover:"
            >
              Contact Us{" "}
              <Image src="/arrow.png" height={9} width={8} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
