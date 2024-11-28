"use client";

import React from "react";
import Image from "next/image";

const ListedOn = () => {
  return (
    <section className="w-full">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"></div>
      {/* Title Section */}
      <div className="bg-sky-700 py-[20px] flex justify-center items-center flex-col">
        <p className="section-header px-4">Listed On</p>
        <img src="/section-header-line.svg" />
      </div>

      {/* Main Section */}
      <div className="w-full bg-transparent p-[30px]">
        <h3 className="font-montserrat font-bold text-[24px] leading-[42px] text-[#232323] mb-2 text-center">Coming Soon</h3>
      </div>
    </section>
  );
};

export default ListedOn;
