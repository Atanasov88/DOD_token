"use client";

import React from "react";
import Image from "next/image";

const LiveChart = () => {
  return (
    <section className="relative w-full bg-transparent p-[30px] pt-0">
      {/* <div className="bg-clouds"></div> */}
      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Two-column layout for xl or higher resolutions */}
        <div className="flex flex-col xl:flex-row xl:items-center lg:mt-14">
          <div className="xl:w-1/2 justify-self-center m-10 bg-stone-50 rounded-3xl">
            {/* Title */}
            <div className="relative mt-10 xl:mx-10 justify-self-center">
              <Image
                src="/livechartheader.png"
                alt="Live Chart Hearder"
                width={300}
                height={150}
                className="rounded-md justify-self-center"
              />
            </div>

            {/* Subtext */}
            <p className="font-poppins text-[16px] text-[#232323] mt-4 xl:text-[20px] xl:leading-[28px] mx-10">
              Listing Price: $0.0000006 (1.5x of presale price)
            </p>

            {/* Paragraph Text */}
            <p className="font-poppins text-stone-900 text-[18x] mt-4 lg:text-[22px] mx-10 mb-10">
              The Coin will list on DEX with a live chart video starting during the
              Presidential Agnuation Speech.
            </p>
          </div>

          {/* Image Container */}
          <div className="relative mt-6 w-full max-w-[670px] mx-auto xl:ml-10">
            <Image
              src="/chart.jpg"
              alt="Live Chart"
              width={670}
              height={200}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Bottom Image */}
        <div className="mt-20">
          <Image
            src="/hero-team.png"
            alt="Heroes Team"
            width={1700}
            height={800}
            className="rounded-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default LiveChart;
