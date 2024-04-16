import React from "react";
import Image from "next/image";
const link =
  "https://www.google.com/maps/place/Al+Khaleej+Center/@25.2578173,55.294199,17.47z/data=!4m6!3m5!1s0x3e5f433c5aa7287d:0x460b315b0d606c13!8m2!3d25.257195!4d55.2957318!16s%2Fg%2F11b7hd_871?entry=tts";
const Footer = () => {
  return (
    <footer className="relative mt-10  lg:mt-[120px]">
      {/* blogs  */}
      <div className=" max-w-screen-2xl px-4 mx-auto mt-5 lg:mt-0">
        {/* desktop  */}
        <div className="hidden  lg:grid grid-cols-2 gap-10 lg:grid-cols-3 lg:gap-20  place-items-center">
          <div className="w-full">
            {/* image  */}
            <div className="relative w-full h-[200px] lg:w-[370px] lg:h-[206px]">
              <Image
                src="/blog/blog1.png"
                alt="blog"
                priority={true}
                fill={true}
              />
            </div>

            <p className="text-sm lg:text-base mt-2">
              The United Arab Emirates (UAE) is not just a cluster of glittering
              cities; it’s a playground for thrill-seekers
            </p>

            <p className="font-semibold text-sm lg:text-base mt-2">
              Read Full Blog
            </p>
          </div>
          <div className="w-full">
            {/* image  */}
            <div className="relative w-full h-[200px] lg:w-[370px] lg:h-[206px]">
              <Image
                src="/blog/blog2.png"
                alt="blog"
                priority={true}
                fill={true}
              />
            </div>

            <p className="text-sm lg:text-base mt-2">
              The United Arab Emirates (UAE) is not just a cluster of glittering
              cities; it’s a playground for thrill-seekers
            </p>

            <p className="font-semibold text-sm lg:text-base mt-2">
              Read Full Blog
            </p>
          </div>
          <div className="w-full">
            {/* image  */}
            <div className="relative w-full h-[200px] lg:w-[370px] lg:h-[206px]">
              <Image
                src="/blog/blog3.png"
                alt="blog"
                priority={true}
                fill={true}
              />
            </div>

            <p className="text-sm lg:text-base mt-2">
              The United Arab Emirates (UAE) is not just a cluster of glittering
              cities; it’s a playground for thrill-seekers
            </p>

            <p className="font-semibold text-sm lg:text-base mt-2">
              Read Full Blog
            </p>
          </div>
        </div>

        {/* mobile  */}
        <div className="flex overflow-x-auto lg:hidden space-x-8">
          <div className="flex-shrink-0 w-3/4">
            {/* image  */}
            <div className="relative w-full h-[200px] lg:w-[370px] lg:h-[206px]">
              <Image
                src="/blog/blog1.png"
                alt="blog"
                priority={true}
                fill={true}
              />
            </div>

            <p className="text-sm lg:text-base mt-2">
              The United Arab Emirates (UAE) is not just a cluster of glittering
              cities; it’s a playground for thrill-seekers
            </p>

            <p className="font-semibold text-sm lg:text-base mt-2">
              Read Full Blog
            </p>
          </div>
          <div className="flex-shrink-0 w-3/4">
            {/* image  */}
            <div className="relative w-full h-[200px] lg:w-[370px] lg:h-[206px]">
              <Image
                src="/blog/blog2.png"
                alt="blog"
                priority={true}
                fill={true}
              />
            </div>

            <p className="text-sm lg:text-base mt-2">
              The United Arab Emirates (UAE) is not just a cluster of glittering
              cities; it’s a playground for thrill-seekers
            </p>

            <p className="font-semibold text-sm lg:text-base mt-2">
              Read Full Blog
            </p>
          </div>
          <div className="flex-shrink-0 w-3/4">
            {/* image  */}
            <div className="relative w-full h-[200px] lg:w-[370px] lg:h-[206px]">
              <Image
                src="/blog/blog3.png"
                alt="blog"
                priority={true}
                fill={true}
              />
            </div>

            <p className="text-sm lg:text-base mt-2">
              The United Arab Emirates (UAE) is not just a cluster of glittering
              cities; it’s a playground for thrill-seekers
            </p>

            <p className="font-semibold text-sm lg:text-base mt-2">
              Read Full Blog
            </p>
          </div>
        </div>
        {/* button  */}
        <div className="w-[220px] lg:mt-10">
          <a
            href="#"
            className="text-center tracking-wide border-2 border-black border-solid block mt-5 lg:mt-0  rounded bg-orange px-12 py-3 text-sm font-extrabold  focus:outline-none focus:ring  sm:w-auto no-underline text-black "
          >
            Read All Blogs
            <Image src="/arrow.png" height={9} width={8} className="ml-1" />
          </a>
        </div>
      </div>

      {/* top */}
      <div className="flex flex-col w-full relative mx-auto   max-w-screen-2xl px-4 mt-10 lg:mt-20">
        <p className="font-semibold text-2xl lg:text-6xl">
          Best travel agency,
        </p>
        <p className="font-semibold text-2xl lg:text-6xl">
          located in the heart of Dubai
        </p>
        <p className="text-sm lg:text-lg lg:mt-2">
          Al Khaleej Center - 7th Floor, Office# 714 - Al Mankhool Rd -
          Bur Dubai, Dubai |
          <a className="text-orange ml-2 underline font-semibold" href="#">
            Locate US On Map
          </a>
        </p>
        <a href={link}>
          <Image
            src="/section/footer-map.png"
            alt="map"
            height={2000}
            width={2000}
            className="h-[200px] w-full lg:h-[265px]    lg:mt-20 object-cover"
          />
        </a>
        {/* <a
          href="#"
          className="relative h-[200px] w-full lg:h-[265px]  lg:w-[1171px]  cursor-pointer mt-2 lg:mt-10"
        >
          <Image
            src="/section/footer-map.png"
            alt="map"
            priority={true}
            fill={true}
            objectFit="contain"
          />
        </a> */}
      </div>

      <div className="flex flex-col w-full mt-10 relative mx-auto  max-w-screen-lg px-4  lg:py-32 sm:px-6 lg:flex lg:h-screen/2 lg:items-center lg:px-8">
        {/* center  */}
        <div className="lg:flex  items-center justify-between w-full text-center">
          <div>
            <p className="lg:text-xl">Social Network</p>
            <p className="font-pacifico text-orange text-xl lg:text-3xl">
              Let’s Be Friend
            </p>
            <div className="mt-2 lg:mt-7">
              <Image src="/icons/fb.png" height={50} width={50} />
              <Image src="/icons/twitter.png" height={50} width={50} />
              <Image src="/icons/tiktok.png" height={50} width={50} />
              <Image src="/icons/ig.png" height={50} width={50} />
              <Image src="/icons/yt.png" height={50} width={50} />
            </div>
            <div className="flex mt-5 items-center justify-center">
              <Image
                src="/icons/call1.png"
                height={48}
                width={48}
                className="h-7 w-7 lg:h-[42px] lg:w-[42px]"
              />
              <p className="text-orange font-bold text-lg lg:text-[32px] lg:ml-2">
                (+971) 54 708 2256
              </p>
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
              className="block w-3/4 mx-auto lg:w-full  px-4 py-2 mt-5 text-gray-700 bg-transparent border-black rounded-[5px] placeholder-gray-20 lg:text-lg font-poppins"
            />
          </div>
        </div>

        {/* bottom footer  */}
        <div className="flex flex-col items-center mt-10">
          <Image src="/logo.png" alt="logo" width={274} height={121} />

          <div className="flex gap-4 mt-10 ">
            <a
              className="font-darkBlue font-medium no-underline "
              href="/about"
            >
              About
            </a>
            <a
              className="font-darkBlue font-medium no-underline"
              href="/contact-us"
            >
              Contact Us
            </a>
            <a
              className="font-darkBlue font-medium no-underline"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
            <a
              className="font-darkBlue font-medium no-underline"
              href="/terms-conditions"
            >
              Terms
            </a>
          </div>
        </div>

        <p className="font-semibold text-sm mt-7">
          Copyright © 2024 
          <strong className="text-red">onelifetourism.com.</strong> All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
