import React from "react";
import Image from "next/image";

const B2BSection = () => {
  return (
    <section className="flex relative flex-col  mx-auto max-w-screen-2xl  py-10 sm:px-6 lg:flex lg:h-full  lg:mb-40 lg:mt-40 text-center lg:text-left">
      {/* top  */}

      <div className="grid grid-col-1 px-3 lg:px-0 lg:grid-cols-2 gap-2 lg:gap-20  w-full place-items-center mt-14">
        {/* left  */}
        <div className="w-full">
          {/* heading  */}
          <div>
            <p className="text-orange font-pacifico text-xl lg:text-[30px]">
              One-Stop
            </p>
            <p className="text-3xl font-bold lg:text-[40px]">Solution</p>

            <p className="lg:text-lg mt-5 text-justify">
              We offer comprehensive solutions catering to the diverse travel
              needs of agents and corporations, serving as their ultimate
              one-stop destination. Our commitment is to streamline and simplify
              every aspect of your travel requirements with unparalleled
              efficiency and expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 px-10 lg:px-0  lg:grid-cols-2 gap-8 lg:gap-20 w-full place-items-center mt-10 lg:mt-15">
            <div className="w-full">
              <div className=" flex flex-col items-center lg:items-start">
                <Image src="/visa/section1-1.png" height={100} width={100} />

                <p className="font-semibold text-lg lg:text-2xl lg:mt-5">
                  Experts & Professionals
                </p>

                <p className="mt-5 text-sm ">
                  We pride ourselve s on our team of dedicated experts and
                  professionals who are committed to processing your application
                  efficiently and accurately.
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className=" flex flex-col  items-center lg:items-start">
                <Image src="/visa/section1-2.png" height={100} width={100} />

                <p className="font-semibold text-lg lg:text-2xl lg:mt-5">
                  Competitive Pricing
                </p>

                <p className="mt-5 text-sm ">
                  Our pricing for business travel is exceptionally competitive,
                  ensuring value without compromising quality or service
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right  */}

        <div className="w-full h-full shadow-lg lg:w-[500px] flex flex-col items-center justify-center">
          {/* form  */}
          <div className="w-3/4 mt-10 lg:mt-0 pb-10 lg:pb-0">
            <p className="text-2xl lg:text-3xl font-bold">
              {" "}
              Register your business
            </p>
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

      {/* bottom  */}
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 lg:gap-20 w-full  place-items-center mt-10 lg:mt-28">
        <div className="w-full">
          <div>
            <p className="font-medium text-2xl lg:text-4xl ">Clients</p>
            <div className="h-[1px]  bg-black mt-5 w-[80%]  mx-auto lg:mx-0 " />
            <p className="font-medium text-4xl lg:text-[70px] mt-2 lg:mt-28">
              7500+
            </p>
            <p className="mt-10">
              Our track record speaks for itself - a vast clientele places their
              trust in us for their application processing needs.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div>
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
          <div>
            <p className="font-medium text-2xl lg:text-4xl ">Happiness</p>
            <div className="h-[1px]  bg-black mt-5 w-[80%]  mx-auto lg:mx-0" />

            <Image
              src="/activity/infinity.png"
              height={100}
              width={100}
              className="mt-2 lg:mt-10"
            />

            <p className="mt-0">
              From exhilarating desert safaris to mesmerizing dhow cruises along
              the Dubai Creek, every moment is crafted to bring smiles and
              unforgettable memories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
