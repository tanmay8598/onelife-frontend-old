"use client";
import React from "react";
import Image from "next/image";

const HolidayHero = () => {
  return (
    <section className="bg-visa-bg bg-cover bg-center bg-no-repeat">
      <div className="flex relative flex-col  mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:flex lg:h-screen lg:px-8 ">
        <p className="text-4xl mt-2 font-bold lg:text-7xl  lg:mt-[150px] leading-none">
          Find Your Perfect Holiday Package Here!
        </p>

        <p className="font-bold text-xl lg:text-3xl lg:mt-5">
          Exclusive Holiday packages in
          <strong className="text-orange"> 15+ </strong>countires
        </p>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          <a
            href="#"
            className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-white px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black lg:text-md "
          >
            Contact Now To Book
            <Image src="/arrow.png" height={9} width={8} className="ml-1" />
          </a>
        </div>
        {/* <Image
          src="/visaHero.png"
          height={1000}
          width={1000}
          className="absolute object-contain hidden  lg:block lg:-top-44 lg:right-10"
        /> */}
        <div className="relative h-[52px]  w-[220px]  cursor-pointer mt-10 lg:mt-10">
          <Image
            src="/icons/clutch.png"
            alt="logo"
            priority={true}
            fill={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HolidayHero;
