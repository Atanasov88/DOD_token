"use client";

import React from "react";
import Image from "next/image";
import heroesImage from "/public/hero_1.jpg";
import titleImage from "/public/title2.png";
import Countdown from "@/components/Countdown";
import SocialIcons from "@/components/SocialIcons";

const Hero = () => {
  return (
    <div className="bg-sky-700 w-full pb-8 z-[2]">
      <div className="flex flex-col items-center justify-center mt-8 lg:mt-0">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:space-x-0 space-y-4 lg:space-y-0 lg:px-[80px] w-full">
          {/* Social Icons for lower resolutions */}
          <div className="lg:hidden">
            <SocialIcons />
          </div>

          {/* Countdown timer for lower resolutions */}
          <div className="lg:hidden mt-4">
            <Countdown />
          </div>

          {/* Social Icons for higher resolutions */}
          <div className="hidden lg:block">
            <SocialIcons />
          </div>

          {/* Countdown timer for higher resolutions */}
          <div className="hidden lg:block">
            <Countdown />
          </div>
        </div>

        <Image
          src={heroesImage}
          alt="Hero"
          layout="responsive"
          width={1440}
          height={546}
          objectFit="cover"
        />
        <div className="flex justify-center items-center mt-5 max-w-[440px] xl:max-w-[9999px] mx-auto">
          <Image src={titleImage} alt="Title" layout="responsive" objectFit="cover" width={1064} height={202}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
