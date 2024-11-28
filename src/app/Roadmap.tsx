"use client";

import Image from "next/image";
import React from "react";

const Roadmap = () => {
  return (
    <section className="relative w-full bg-transparent p-[10px] pt-0 -mt-12">
      {/* <div className="bg-clouds"></div> */}
      <div className="relative z-10 mx-auto max-w-[1280px] lg:text-center bg-stone-50 rounded-3xl">
        {/* Title */}
        {/* <h2 className="font-montserrat font-medium text-[32px] leading-[42px] text-[#232323] xl:text-center xl:text-[56px] xl:leading-[70px] m-10">
          Roadmap
        </h2> */}
        <div className="relative mt-6 w-full max-w-full mx-10">
          <Image
            src="/roadmap.png"
            alt="Live Chart"
            width={300}
            height={150}
            className="rounded-md mt-10"
          />
        </div>

        {/* Paragraph Text */}
        <p className="font-poppins text-stone-900 text-[18px] lg:text-[22px] text-left lg:text-center mx-10">
          The project has partnered with the company behind the first blockchain transaction in space. As we push into space, our goal is to deploy a fast, secure blockchain on satellites, potentially collaborating with SpaceX's Starlink to create a resilient financial system across the solar system. Details will follow as our market cap grows.
          <br />
          <br />
          Our roadmap includes launching an upgraded version of <a href="https://www.pump.fun" className="text-sky-500" target="blank">pump.fun</a> on this blockchain, with improved team allocations, multi-chain integration, and enhanced user experience.
          <br />
          <br />
          Additionally, Mission Mankind has approached us to promote their platform, which uses blockchain to empower citizens, enhance transparency, and enable voting on government spending.
          <br />
          <br />
          The project team includes accomplished filmmakers who will create a documentary on The Defenders' rise, featuring interviews with political figures and influential leaders to leverage their millions of followers in promoting the coin and boosting global visibility.
        </p>
      </div>
    </section>
  );
};

export default Roadmap;
