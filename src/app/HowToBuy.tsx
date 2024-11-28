"use client";

import React from "react";
import Image from "next/image";

const HowToBuy = () => {
  return (
    <section className="w-full">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"></div>
      {/* Title Section */}
      <div className="bg-sky-700 py-[20px] flex justify-center items-center flex flex-col">
        {/* <p className="section-header px-4">How To Buy</p> */}
        <img src="/howtobuy.png" />
      </div>

      {/* Main Section */}
      <div className="w-full bg-transparent p-[30px]">
        <div className="mx-auto max-w-[1280px] responsive-grid">
          {/* Step 1 */}
          <div>
            <div className="mb-4">
              <Image src="/phantom.svg" alt="Phantom" width={171} height={119} />
            </div>
            <h3 className="font-montserrat font-bold text-[24px] leading-[42px] text-[#232323] mb-2">1. DOWNLOAD PHANTOM</h3>
            <p className="font-poppins text-[#666666] text-[14px] leading-6">
              Download Phantom or your wallet of choice from the store. Desktop users, download the Google Chrome extension by going to Phantomapp.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <Image src="/solana.svg" alt="Solana" width={120} height={120} />
            </div>
            <h3 className="font-montserrat font-bold text-[24px] leading-[42px] text-[#232323] mb-2">2. GET SOME SOL</h3>
            <p className="font-poppins text-[#666666] text-[14px] leading-6">
              If you don’t have any SOL, you can buy directly on Phantom, transfer From another wallet, or buy on another exchange and send it your wallet.
            </p>
          </div>

          {/* Step 3 */}
          <div className="sm:bg-white sm:shadow-md sm:rounded-lg sm:p-6 xl:bg-transparent xl:shadow-none xl:p-0">
            <div className="mb-4">
              <Image src="/raydium.svg" alt="Raydium" width={98} height={120} />
            </div>
            <h3 className="font-montserrat font-bold text-[24px] leading-[42px] text-[#232323] mb-2">3. GO TO RAYDIUM.IO</h3>
            <p className="font-poppins text-[#666666] text-[14px] leading-6">
              Now that you have some Solana, head to Raydiumio (or Jup.ag if you prefer) to be able to swap your $SOL for some $DOD.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 sm:bg-transparent sm:shadow-none sm:p-0 xl:bg-white xl:shadow-md xl:rounded-lg xl:p-6">
            <div className="mb-4">
              <Image src="/dod.svg" alt="PNUT" width={112} height={112} />
            </div>
            <h3 className="font-montserrat font-bold text-[24px] leading-[42px] text-[#232323] mb-2">4. BUY $DOD</h3>
            <p className="font-poppins text-[#666666] text-[14px] leading-6">
              Paste the token address (CA) into Raydium and switch SOL for $DOD There’s zero taxes so you don’t need to worry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;

