import React from "react";
import Image from "next/image";

const AboutSection1 = () => {
  return (
    <section className="bg-white">
      <div className="flex relative flex-col  mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:flex lg:h-screen/2 lg:px-8 lg:mb-40 ">
        <p className="mx-auto lg:w-[700px] text-justify lg:mt-20 lg:text-2xl">
          As your trusted travel partner, our company specializes in providing
          hassle-free VISA services, ensuring seamless entry into this
          magnificent land. From exhilarating UAE fun activities to convenient
          ticket bookings, we are here to make your dreams a reality.{" "}
        </p>

        <div className="lg:flex items-center gap-10  mx-auto mt-10 lg:mt-20">
          <div className="relative h-[150px] w-[150px]  cursor-pointer mx-auto">
            <Image
              src="/logo2.png"
              alt="logo"
              priority={true}
              fill={true}
              //   className="absolute object-contain hidden  lg:block lg:-top-44 lg:right-10"
            />
          </div>
          <p className="lg:w-[700px] text-justify lg:text-lg">
            Discover the UAE’s wonders through our thoughtfully crafted tour
            packages, designed to immerse you in the vibrant culture and
            breathtaking landscapes. And when it’s time to rest, trust us to
            find you the perfect accommodation from our extensive selection of
            hotels in UAE. Join us on a journey that will leave you with
            cherished memories to last a lifetime. Let One Life Tourism be your
            gateway to the UAE’s captivating beauty, vibrant energy, and
            boundless adventures.
          </p>
        </div>

        <div className="mt-5 lg:mt-20 grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20 w-full place-items-center">
          <div className="w-full">
            <div className="lg:ml-10">
              <p className="font-medium text-2xl lg:text-4xl ">Clients</p>
              <div className="h-[1px]  bg-black mt-5 w-[80%]" />
              <p className="font-medium text-3xl lg:text-[70px] mt-2 lg:mt-10">
                7500+
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="lg:ml-10">
              <p className="font-medium text-2xl lg:text-4xl ">Destinations</p>
              <div className="h-[1px]  bg-black mt-5 w-[80%]" />
              <p className="font-medium text-3xl lg:text-[70px] mt-2 lg:mt-10">
                40+
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="lg:ml-10">
              <p className="font-medium text-2xl lg:text-4xl ">Clients</p>
              <div className="h-[1px]  bg-black mt-5 w-[80%]" />
              <p className="font-medium text-3xl lg:text-[70px] mt-2 lg:mt-10">
                7500+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;
