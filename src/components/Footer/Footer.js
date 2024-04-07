import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="relative flex lg:mt-[200px]">
      <div className="flex flex-col w-full relative mx-auto  max-w-screen-lg px-4  lg:py-32 sm:px-6 lg:flex lg:h-screen/2 lg:items-center lg:px-8">
        <div className="lg:flex  items-center justify-between w-full text-center">
          <div>
            <p className="lg:text-xl">Social Network</p>
            <p className="font-pacifico text-orange text-xl lg:text-3xl">
              Let’s Be Friend
            </p>
            <div className="mt-2 lg:mt-4">
              <Image src="/icons/fb.png" height={50} width={50} />
              <Image src="/icons/twitter.png" height={50} width={50} />
              <Image src="/icons/tiktok.png" height={50} width={50} />
              <Image src="/icons/ig.png" height={50} width={50} />
              <Image src="/icons/yt.png" height={50} width={50} />
            </div>
          </div>
          <div className="hidden lg:block h-[330px] w-[1px] bg-gray-30" />
          <div className="mt-20 lg:mt-0">
            <p className="lg:text-xl">Newsletter</p>
            <p className="font-pacifico text-orange text-xl lg:text-3xl">
              Be the first to know
            </p>
            <input
              id="name"
              type="email"
              placeholder="Enter your email"
              class="block w-3/4 mx-auto lg:w-full  px-4 py-2 mt-5 text-gray-700 bg-transparent border-black rounded-[5px] placeholder-gray-20 lg:text-lg font-poppins"
            />
          </div>
        </div>

        {/* bottom footer  */}
        <div className="flex flex-col items-center mt-10">
          <Image src="/logo.png" alt="logo" width={274} height={121} />

          <div className="flex gap-4 mt-10">
            <p className="font-darkBlue font-medium">About</p>
            <p className="font-darkBlue font-medium">Contact Us</p>
            <p className="font-darkBlue font-medium">Privacy Policy</p>
            <p className="font-darkBlue font-medium">Terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
