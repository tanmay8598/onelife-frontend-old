import React from "react";
import Image from "next/image";

const page = () => {
  const link =
    "https://www.google.com/maps/place/Al+Khaleej+Center/@25.2578173,55.294199,17.47z/data=!4m6!3m5!1s0x3e5f433c5aa7287d:0x460b315b0d606c13!8m2!3d25.257195!4d55.2957318!16s%2Fg%2F11b7hd_871?entry=tts";
  return (
    <div className="mx-auto max-w-screen-xl  py-10 px-3  lg:h-full  lg:mb-40 lg:mt-20">
      {/* heading  */}
      <div className="w-full text-center">
        <p className="text-orange text-xl lg:text-[30px] font-pacifico">
          Let’s Talk
        </p>
        <h1 className="text-3xl font-bold lg:text-6xl lg:mt-5 text-black lg:w-3/4 mx-auto">
          The easiest way to start is by getting in touch
        </h1>
      </div>

      <div className="w-full grid grid-col-1 px-3 lg:px-0 lg:grid-cols-2 gap-2 lg:gap-2  place-items-start lg:mt-28">
        {/* left  */}
        <div className="w-full ">
          <div className="flex  mt-20 lg:mt-5 items-center w-full">
            <Image
              src="/icons/call1.png"
              height={32}
              width={32}
              className="h-7 w-7 lg:h-[28px] lg:w-[28px] mr-5"
            />
            <p className="text-lg lg:text-[28px] lg:ml-2 font-medium">
              (+971) 54 708 2256
            </p>
          </div>
          <div className="flex mt-5 lg:mt-10 items-center">
            <Image
              src="/icons/mail.png"
              height={32}
              width={32}
              className="h-7 w-7 lg:h-[28px] lg:w-[28px] mr-5"
            />
            <p className="text-lg lg:text-[28px] lg:ml-2 font-medium">
              info@onelifetourism.com
            </p>
          </div>
          <p className="text-lg lg:text-[28px] mt-5 leading-10  mb-2 lg:w-3/4">
            Al Khaleej Center - 7th Floor, Office# 714 - Al Mankhool Rd -
            Bur Dubai, Dubai
          </p>
          <a
            href={link}
            className="font-bold text-lg lg:text-[28px] text-orange"
          >
            Locate US On Map
          </a>

          <div className="mt-5 lg:mt-9 w-full flex gap-5">
            <Image src="/icons/fb.png" height={50} width={50} />
            <Image src="/icons/twitter.png" height={50} width={50} />
            <Image src="/icons/tiktok.png" height={50} width={50} />
            <Image src="/icons/ig.png" height={50} width={50} />
            <Image src="/icons/yt.png" height={50} width={50} />
          </div>
        </div>

        {/* right  */}

        <div className="w-full h-full  flex flex-col items-center justify-center ">
          {/* form  */}
          <div className="w-full   mt-10 lg:mt-0 pb-10 lg:pb-0">
            <p className="text-2xl lg:text-3xl font-bold">Enquire</p>
            <form>
              <div className="flex flex-col mt-5">
                <div className="mt-2">
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border-gray-50 rounded-[5px] placeholder-black lg:text-lg font-poppins"
                  />
                </div>
                <div className="mt-2">
                  <input
                    id="phone"
                    type="number"
                    placeholder="Phone Number"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border-gray-50 rounded-[5px] placeholder-black lg:text-lg font-poppins"
                  />
                </div>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email ID"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border-gray-50 rounded-[5px] placeholder-black lg:text-lg font-poppins"
                  />
                </div>
                <div className="mt-2">
                  <input
                    id="service"
                    type="text"
                    placeholder="Select Service"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border-gray-50 rounded-[5px] placeholder-black lg:text-lg font-poppins"
                  />
                </div>
              </div>
              <div className=" mt-6">
                <button className=" cursor-pointer w-full px-6 py-2 leading-5 font-medium text-lg lg:text-2xl text-white transition-colors duration-200 transform bg-black rounded-md  focus:outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <a href={link}>
        <Image
          src="/icons/contactus-map.png"
          alt="map"
          height={2000}
          width={2000}
          className="w-full object-cover h-[300px] lg:h-[500px] lg:mt-20"
        />
      </a>
    </div>
  );
};

export default page;
