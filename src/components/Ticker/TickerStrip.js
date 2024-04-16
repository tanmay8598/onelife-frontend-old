import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const TickerStrip = () => {
  return (
    <div className="w-full bg-black  lg:py-2">
      <Marquee>
        <Image src="/tickerlogo.png" height={60} width={60} />
        <div className="text-white font-bold text-2xl lg:text-5xl lg:py-2">
          Best Travel Agent In Dubai
        </div>
        <Image src="/tickerlogo.png" height={60} width={60} />
        <div className="text-white font-bold text-2xl lg:text-5xl lg:py-2">
          Best Travel Agent In Dubai
        </div>
        <Image src="/tickerlogo.png" height={60} width={60} />
        <div className="text-white font-bold text-2xl lg:text-5xl lg:py-2">
          Best Travel Agent In Dubai
        </div>
      </Marquee>
    </div>
  );
};

export default TickerStrip;
