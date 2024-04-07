import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <section className="relative flex lg:h-[610px] bg-section2-bg bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0  bg-blue-950/30"></div>
      <div className="relative lg:flex  m-auto max-w-screen-xl px-4 py-10 sm:px-6   lg:px-8 lg:mt-20 text-white">
        {/* info  */}
        <div className="flex flex-col lg:w-[150%]">
          <p className="text-3xl mt-2 font-medium lg:text-[40px] lg:w-[70%]  leading-none">
            We Serve You Better With All Our Experience
          </p>
          <p className="text-sm mt-5 text-justify lg:w-[65%] lg:text-lg">
            With our extensive experience in the travel industry, we are
            dedicated to providing you with exceptional service. Our knowledge
            and expertise allow us to offer tailored solutions, ensuring a
            smooth and enjoyable travel experience. Trust us to handle your
            travel needs with care and efficiency.
          </p>

          <div className="mt-5 lg:mt-10">
            <p className="text-lg lg:text-3xl">Do you find forms boring?</p>
            <div className="flex items-center gap-5">
              <p className="lg:text-[30px] font-semibold">Call Us</p>
              <Image
                src="/icons/call1.png"
                height={48}
                width={48}
                className="h-7 w-7 lg:h-[48px] lg:w-[48px]"
              />
              <p className="text-yellow font-bold lg:text-[38px]">
                (+971) 54 708 2256
              </p>
            </div>
          </div>
        </div>
        {/* form  */}
        <div className="w-full mt-10 lg:mt-0">
          <p className="text-xl lg:text-3xl font-bold">Have Questions</p>
          <form>
            <div class="flex flex-col mt-5">
              <div className="mt-2">
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border-white rounded-[5px] placeholder-white lg:text-lg font-poppins"
                />
              </div>
              <div className="mt-2">
                <input
                  id="phone"
                  type="number"
                  placeholder="Phone Number"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border-white rounded-[5px] placeholder-white lg:text-lg font-poppins"
                />
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  placeholder="Email ID"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border-white rounded-[5px] placeholder-white lg:text-lg font-poppins"
                />
              </div>
              <div className="mt-2">
                <input
                  id="service"
                  type="text"
                  placeholder="Select Service"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-transparent border-white rounded-[5px] placeholder-white lg:text-lg font-poppins"
                />
              </div>
            </div>
            <div class=" mt-6">
              <button class=" cursor-pointer w-full px-6 py-2 leading-5 font-medium text-lg lg:text-2xl text-black transition-colors duration-200 transform bg-white rounded-md  focus:outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section3;
