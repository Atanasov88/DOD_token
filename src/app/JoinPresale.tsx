"use client";

import React, { useState } from "react";
import Presale from "../components/Presale/Presale";

const JoinPresale = () => {
  const [text, setText] = useState("HXyAGztQPH1f2sMTToKty9hz7uP4jF9VYBmtBaez4ywH");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setText("Copied!");
    setTimeout(() => {
      setText("HXyAGztQPH1f2sMTToKty9hz7uP4jF9VYBmtBaez4ywH");
    }, 2000);
  };

  return (
    <>
      <section className="w-full p-[30px] pt-0 z-[1] mt-10" id="presale">
        <div className="mx-auto max-w-[640px]">
          {/* Title */}
          {/* <h2 className="font-montserrat font-medium text-[32px] leading-[42px] lg:text-[50px] lg:leading-[60px] lg:text-center text-[#232323]">
            JOIN THE PRESALE
          </h2> */}
          <img src="/images/joinpresale.png" />

          {/* Subtext */}
          <p className="font-poppins leading-[21px] lg:text-[30px] lg:leading-[36px] text-center text-[#232323] mt-4">
            Presale Price: $0.0000004
          </p>

          {/* Text Field with Copy Button */}
          <div className="flex flex-row justify-between items-center gap-[10px] bg-white shadow-lg mt-6 rounded-full border-4 border-black">
            <img src="/images/token.png" width={40} />
            <p className="text-[14px] text-black text-left">{text}</p>
            <button
              className="bg-transparent border-none cursor-pointer pr-3"
              onClick={copyToClipboard}
            >
              <img src="/copy.svg" alt="Copy" width="16" height="16" />
            </button>
          </div>
        </div>

        {/* Presale Form */}
        <Presale />
      </section>
    </>
  );
};

export default JoinPresale;
