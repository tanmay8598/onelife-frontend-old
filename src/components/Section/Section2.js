import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="bg-white lg:mt-[300px]">
      <div className="relative flex flex-col  mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:flex lg:h-screen lg:px-8 lg:mt-20">
        <p className="text-orange font-pacifico lg:text-[36px]">Destinations</p>
        <p className="text-3xl mt-2 font-extrabold lg:text-[50px] lg:w-[70%] lg:mt-[30px] leading-none">
          The UAE Experience !
        </p>
        <p className="text-sm mt-5 text-justify lg:w-[65%] lg:text-lg">
          Uncover the finest sights and experiences awaiting you in the vibrant
          capital city of the UAE.
        </p>
        <div className="flex flex-wrap lg:mt-5">
          <a
            href="#"
            className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-white px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black lg:text-md "
          >
            View All Packages
            <Image src="/arrow.png" height={9} width={8} className="ml-1" />
          </a>
        </div>
        <div className="hidden lg:flex absolute z-10 bottom-24  items-center justify-center lg:justify-start flex-wrap gap-5 lg:gap-10 mt-10">
          <Image src="/section/section1-1.png" height={214} width={214} />
          <Image src="/section/section1-2.png" height={214} width={214} />
          <Image src="/section/section1-3.png" height={214} width={214} />
          <Image src="/section/section1-4.png" height={214} width={214} />
        </div>
        <div className="lg:hidden flex items-center justify-center lg:justify-start flex-wrap gap-5 lg:gap-10 mt-10">
          <Image src="/section/section1-1.png" height={214} width={214} />
          <Image src="/section/section1-2.png" height={214} width={214} />
          <Image src="/section/section1-3.png" height={214} width={214} />
          <Image src="/section/section1-4.png" height={214} width={214} />
        </div>

        <div className="hidden lg:block absolute right-0">
          <div className="relative">
            <Image src="/section/section1-video.png" height={600} width={389} />
            <Image
              src="/section/section1-play.png"
              height={100}
              width={100}
              className="absolute m-auto left-0 right-0 top-0 bottom-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
