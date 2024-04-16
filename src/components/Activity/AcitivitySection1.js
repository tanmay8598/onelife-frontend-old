import React from "react";
import Image from "next/image";

const AcitivitySection1 = () => {
  return (
    <section className="bg-white">
      <div className="flex relative flex-col  mx-auto max-w-screen-2xl  py-10 sm:px-6 lg:flex lg:h-full  lg:mb-40 lg:mt-20 ">
        {/* heading  */}
        <div>
          <p className="text-orange font-pacifico lg:text-3xl text-center">
            Choose Your
          </p>
          <p className="font-bold text-2xl lg:text-4xl text-center">
            Fun Activity
          </p>
        </div>
        {/* top cards  */}
        <div className="grid grid-cols-2 px-3 lg:px-0 lg:grid-cols-4 gap-2 lg:gap-5 w-full place-items-center mt-14 lg:mt-28">
          <div className="w-full">
            <div className="relative bg-visa-schengen h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-visa-usa h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-visa-uk h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-visa-ca h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-visa-eg h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-visa-au h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          <div className="w-full">
            <div className="relative bg-visa-tu h-[190px] lg:h-[280px] bg-cover bg-center bg-no-repeat p-5">
              <div className="absolute inset-0  bg-black/10"></div>
            </div>
          </div>
          {/* text card */}
          <div className="w-full flex flex-col text-center">
            <p className="font-semibold lg:text-2xl">
              We provide visa consultancy for 40+ Countries
            </p>
            <p className="font-semibold text-[12px] mt-2 lg:text-lg lg:mt-5 w-3/4 mx-auto">
              Talk To Us For More Countries
            </p>
            <div className="lg:mt-3 mx-auto">
              <a
                href="#"
                className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange px-6 lg:px-12 py-1 lg:py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
              >
                Talk To Us
                <Image src="/arrow.png" height={9} width={8} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* middle section  */}

      <div className="relative bg-activity-bg bg-cover bg-center bg-no-repeat mt-20 lg:mt-40 py-20 lg:h-screen flex flex-col items-center justify-center">
        <div>
          <p className="text-white font-pacifico lg:text-3xl text-center">
            Featured
          </p>
          <p className="font-bold text-2xl lg:text-5xl text-center text-white w-[60%] mx-auto">
            Experience Our Exclusive City Tour
          </p>
          <p className="text-white mt-5 w-[90%] lg:w-[600px] mx-auto text-center font-medium  lg:text-xl">
            Whether you're a first-time visitor or a seasoned traveler, let us
            show you the magic of Dubai like never before. Book your adventure
            with us today and create memories that will last a lifetime.
          </p>
          <div className="lg:mt-3 mx-auto w-[190px]">
            <a
              href="#"
              className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange px-6 lg:px-12 py-1 lg:py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
            >
              Talk To Us
              <Image src="/arrow.png" height={9} width={8} className="ml-1" />
            </a>
          </div>
        </div>
        <div className="hidden lg:block lg:absolute -bottom-36">
          <div className="relative h-[300px] w-[780px]">
            <Image
              src="/activity/activity1.png"
              fill={true}
              alt="bg"
              priority={true}
            />
          </div>
        </div>
      </div>

      {/* bottom  */}
      <div className="mx-auto max-w-screen-2xl lg:mt-[300px] pb-20 lg:pb-56">
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20 w-full place-items-center text-center lg:text-start">
          <div className="w-full">
            <div className="lg:ml-10">
              <p className="font-medium text-2xl lg:text-4xl ">Clients</p>
              <div className="h-[1px]  bg-black mt-5 w-[80%]  mx-auto lg:mx-0 " />
              <p className="font-medium text-4xl lg:text-[70px] mt-2 lg:mt-28">
                7500+
              </p>
              <p className="mt-10">
                Our track record speaks for itself - a vast clientele places
                their trust in us for their application processing needs.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="lg:ml-10">
              <p className="font-medium text-2xl lg:text-4xl ">Destinations</p>
              <div className="h-[1px]  bg-black mt-5 w-[80%] mx-auto lg:mx-0" />
              <p className="font-medium text-4xl lg:text-[70px] mt-2 lg:mt-28">
                40+
              </p>
              <p className="mt-10 ">
                Our comprehensive visa consultancy services extend to over 40
                countries worldwide.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="lg:ml-10">
              <p className="font-medium text-2xl lg:text-4xl ">Happiness</p>
              <div className="h-[1px]  bg-black mt-5 w-[80%]  mx-auto lg:mx-0" />

              <Image
                src="/activity/infinity.png"
                height={100}
                width={100}
                className="mt-2 lg:mt-10"
              />

              <p className="mt-5">
                From exhilarating desert safaris to mesmerizing dhow cruises
                along the Dubai Creek, every moment is crafted to bring smiles
                and unforgettable memories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcitivitySection1;
