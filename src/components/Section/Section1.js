import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <section className="bg-white">
      <div className="flex relative  flex-col  mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:flex lg:h-screen lg:px-8 lg:mt-20">
        <p className="text-orange font-pacifico lg:text-[36px]">
          Travel With Ease
        </p>

        <p className="text-3xl mt-2 font-extrabold lg:text-[50px] lg:w-[70%] lg:mt-[30px] leading-none">
          Your Premium Visa Consultant For International Travel
        </p>

        <p className="text-sm mt-5 text-justify lg:w-[65%] lg:text-lg">
          Welcome to One Life Tourism, your ultimate companion for unforgettable
          adventures in the United Arab Emirates (UAE). As your trusted travel
          partner, our company specializes in providing hassle-free VISA
          services, ensuring seamless entry into this magnificent land. From
          exhilarating UAE fun activities to convenient ticket bookings, we are
          here to make your dreams a reality. Discover the UAE wonders through
          our thoughtfully crafted tour packages, designed to immerse you in the
          vibrant culture and breathtaking landscapes.
        </p>

        <Image
          src="/map.png"
          height={1000}
          width={1000}
          className="absolute object-contain hidden lg:block lg:-top-64 right-0"
        />
        <div className="mt-5 lg:mt-8 flex  lg:flex-wrap items-end gap-2 lg:gap-10">
          <div className="mt-2">
            <p className="text-orange text-2xl lg:text-[40px] font-semibold">
              20+
            </p>
            <p className="text-sm lg:text-lg lg:w-[209px] lg:mt-5">
              Years of Collaborative Industry Experience
            </p>
          </div>
          <div className="mt-2">
            <p className="text-orange text-2xl lg:text-[40px] font-semibold">
              50K +
            </p>
            <p className="text-sm lg:text-lg  lg:w-[209px] lg:mt-5">
              Customers and business served
            </p>
          </div>

          {/* button  */}
          <div className="hidden lg:block">
            <a
              href="#"
              className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black lg:text-md "
            >
              Enquire Now
              <Image src="/arrow.png" height={9} width={8} className="ml-1" />
            </a>
          </div>
        </div>

        <div className="lg:hidden">
          <a
            href="#"
            className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black lg:text-md "
          >
            Enquire Now
            <Image src="/arrow.png" height={9} width={8} className="ml-1" />
          </a>
        </div>

        {/* cards */}

        <div className="flex flex-wrap gap-5 mt-10 lg:mt-[200px] ">
          <div className="relative flex flex-col justify-center w-full bg-uae-visa bg-opacity-85 h-[100px]  px-5 lg:py-20   lg:w-[383px] bg-cover bg-no-repeat rounded-lg text-white p-1 text-center lg:text-left">
            {/* <div className="absolute  inset-0  bg-black/10"></div> */}
            <p className="text-lg lg:text-2xl font-semibold">
              Visa Consultation
            </p>
            <p className="font-semibold text-[15px] lg:w-[275px]">
              Consultation for 40+ countries. Trusted by 8k+ travellers
            </p>
          </div>
          <div className="flex flex-col justify-center w-full bg-uae-activities h-[100px]  px-5 lg:py-20   lg:w-[383px] bg-cover bg-no-repeat rounded-lg text-white p-1 text-center lg:text-left">
            <p className="text-lg lg:text-2xl font-semibold">Activities</p>
            <p className="font-semibold text-[15px] lg:w-[275px]">
              Uncover amazing adventures with top deals and save big!
            </p>
          </div>
          <div className="flex flex-col justify-center w-full bg-uae-holidays h-[100px]  px-5 lg:py-20   lg:w-[383px] bg-cover bg-no-repeat rounded-lg text-white p-1 text-center lg:text-left">
            <p className="text-lg lg:text-2xl font-semibold">Holidays</p>
            <p className="font-semibold text-[15px] lg:w-[275px]">
              Craft an extraordinary travel wishlist with our curated packages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
