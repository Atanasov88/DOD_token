"use client";

import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="w-full bg-sky-700 py-[20px]">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:space-x-0 space-y-4 lg:space-y-0 lg:px-[80px]">
        {/* Social Icons for lower resolutions */}
        <div className="lg:hidden">
          <SocialIcons />
        </div>

        {/* Text Lines for lower resolutions (two lines) */}
        <div className="lg:hidden text-center mt-4">
          <p className="font-montserrat font-bold text-[24px] text-white font-small-caps">
            Contact@DODSOL.COM
          </p>
          <p className="font-montserrat font-bold text-[24px] text-white font-small-caps">
            © 2024 dod
          </p>
        </div>

        {/* Text Lines for higher resolutions (one line) */}
        <div className="hidden lg:block text-left">
          <p className="font-montserrat font-bold text-[24px] text-white font-small-caps">
            Contact@DODSOL.COM © 2024 dod
          </p>
        </div>

        {/* Social Icons for higher resolutions */}
        <div className="hidden lg:block">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
