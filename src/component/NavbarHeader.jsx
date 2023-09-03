import { React } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

const NavbarHeader = () => {
  return (
    <div className="flex justify-center !z-50 sticky">
      <div
        className="mt-12 pt-3.5 fixed w-[80%] xl:w-[40%] rounded-3xl h-12 
      drop-shadow-xl bg-gradient-to-r from-[rgba(255,255,255,0.15)]
      to bg-[rgba(255,255,255,0.15)] backdrop-blur"
      >
        <ul className="flex justify-evenly text-white font-medium tracking-wider">
          <li className="hover:scale-110 transition-all ease-in-out duration-150 cursor-pointer">
            <AnchorLink href="#home">Home</AnchorLink>
          </li>
          <li className="hover:scale-110 transition-all ease-in-out duration-150 cursor-pointer">
            <AnchorLink href="#about">About</AnchorLink>
          </li>
          <li className="hover:scale-110 transition-all ease-in-out duration-150 cursor-pointer">
            <AnchorLink offset={() => -50} href="#experience">
              Experience
            </AnchorLink>
          </li>
          <li className="hover:scale-110 transition-all ease-in-out duration-150 cursor-pointer">
            <AnchorLink offset={() => -50} href="#projects">
              Projects
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarHeader;
