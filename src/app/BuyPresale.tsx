"use client";

import Image from "next/image";
import React from "react";

const BuyPresale = () => {
  const smoothScrollToElement = (selector: string) => {
    const element = document.querySelector(selector);
    if (element instanceof HTMLElement) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full p-[30px] mx-auto">
      {/* <div className="bg-clouds"></div> */}
      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Centered Button and Text for all resolutions */}
        <div className="flex flex-col items-center lg:text-center justify-center text-left mt-10">
          <div className="flex-row sm:flex">
            <button
              className="flex items-center justify-center w-[180px] lg:w-[308px] h-[33px] lg:h-[65px] gap-2.5 bg-sky-500 rounded-md hover:scale-110 transition-all sm:mr-10 mb-10"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollToElement("#presale");
              }}
            >
              <span className="text-white font-poppins text-[14px] lg:text-[26px]">
                BUY PRESALE $DOD
              </span>
            </button>
            <a
              className="flex items-center justify-center w-[180px] lg:w-[308px] h-[33px] lg:h-[65px] gap-2.5 bg-sky-500 rounded-md hover:scale-110 transition-all sm:ml-[14px] mb-10"
              href="https://www.dropbox.com/scl/fi/ba927c4hgfh9rkt3b0alj/The-Defenders-DOD.pdf?rlkey=ctwzq60osk3o0a301mzk3pez5&st=08fadqu2&dl=0"
              target="blank"
            >
              <span className="text-white font-poppins text-[14px] lg:text-[26px]">
                TOKEN PITCH DECK
              </span>
            </a>
          </div>
          <div className="bg-stone-50 rounded-3xl">
            <p className="mt-10 font-poppins text-stone-900 text-[20px] lg:text-[24px] text-left lg:text-center m-10">
              In recent times, global systems of governance and democracy were on the verge of collapse. 
              <br/>Amid rising tensions, 
              misinformation, and the erosion of rights, a new force emerged: the Defenders of Demography ($DOD). 
              Their mission is clear: combat corruption, reduce crime, increase transparency, and tackle the $36 trillion 
              national debt (our total supply) - restoring balance and securing a prosperous future for all. Join the Defenders today!
            </p>
          </div>
        </div>

        {/* Grid of Decorative Buttons limited to two columns and packed together for all resolutions */}
        <div className="flex flex-wrap justify-center gap-4 mt-14 max-w-[380px] lg:max-w-[740px] mx-auto font-bold">
          {[
            "NETWORK : SOLANA",
            "CA RENOUNCED",
            "28% Marketing/Team/Presale",
            "72% Liquidity",
            "Taxes 0%",
            "Supply: 36 Trillion",
          ].map((text, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-3 py-1.5 gap-2.5 bg-white shadow-md rounded-md w-[280px] h-[50px] lg:w-[360px] lg:h-[65px]"
            >
              <span className="text-[#232323] font-poppins text-[18px] lg:text-[20px] leading-[20px] lg:leading-[22px] text-center">
                {text}
                <br />
                <span className="text-base">
                  {index == 5 && ("(US national Debt)")}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyPresale;
