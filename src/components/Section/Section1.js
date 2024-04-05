import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <section className="bg-white">
      <div className="flex relative  flex-col  mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:flex lg:h-screen lg:px-8 lg:mt-20">
        <p className="text-blue font-medium ">Travel With Ease</p>

        <p className="text-3xl mt-2 font-extrabold lg:text-[50px] lg:w-[65%] lg:mt-[30px] leading-none">
          Your Premium Visa Consultant For International Travel
        </p>

        <p className="text-sm mt-5 text-justify lg:w-[62%] lg:text-lg">
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
        <div className="mt-6 flex flex-wrap gap-4 text-center">
          <a
            href="#"
            className="tracking-wide border-2 border-black border-solid block  rounded bg-white px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black lg:text-md hover:"
          >
            About Us{" "}
            <Image src="/arrow.png" height={9} width={8} className="ml-1" />
          </a>
        </div>

        {/* cards */}

        {/* <div className=" mt-10 lg:mt-20  flexBetween">
          <div className="w-full bg-bg-img-1 h-[129px] lg:w-[30%] bg-cover bg-no-repeat rounded-lg">
            card1
          </div>
          <div className="w-full bg-bg-img-1 h-[129px] lg:w-[30%] bg-cover bg-no-repeat">
            card1
          </div>
          <div className="w-full bg-bg-img-1 h-[129px] lg:w-[30%] bg-cover bg-no-repeat">
            card1
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Section1;
