import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className="w-full bg-bgLight">
      {/* nav top */}
      <div className="hidden lg:block bg-red h-[54px]">
        <div className="lg:max-container lg:flexBetween h-[54px] ">
          <div className="flexCenter">
            <Image src="/mail.png" alt="logo" width={20} height={20} />
            <p className="text-md font-regular text-white ml-2">
              info@onelifetourism.com
            </p>
          </div>
          <div className="flexCenter">
            <Image src="/fb.png" alt="logo" width={20} height={20} />
            <Image
              src="/ig.png"
              alt="logo"
              width={20}
              height={20}
              className="ml-2"
            />
            <Image
              src="/x.png"
              alt="logo"
              width={20}
              height={20}
              className="ml-2 "
            />
          </div>
        </div>
      </div>
      {/* nav main  */}
      <div className="flexBetween max-container padding-container relative z-30 py-5 ">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={172} height={76} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex ">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-lg font-bold text-darkBlue flexCenter cursor-pointer  transition-all  no-underline"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Image src="/phone.svg" alt="logo" width={20} height={20} />
          <p className="text-lg font-bold text-black ml-2">
            (+971) 541 -265 -234
          </p>
        </div>

        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
