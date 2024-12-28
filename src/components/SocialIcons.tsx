"use client";

import React from "react";
import Image from "next/image";

const SocialIcons = () => {
  return (
    <div className="flex justify-center lg:justify-end space-x-5">
      {/* <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/footer-instagram.png"
          alt="Instagram"
          width={46}
          height={46}
          className="transform transition-transform hover:scale-110"
        />
      </a> */}
      <a
        href="https://discord.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/footer-discord.png"
          alt="Discord"
          width={46}
          height={46}
          className="transform transition-transform hover:scale-110"
        />
      </a>
      <a
        href="https://t.me/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/footer-telegram.svg"
          alt="Telegram"
          width={46}
          height={46}
          className="transform transition-transform hover:scale-110"
        />
      </a>
      <a
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/footer-x.svg"
          alt="X"
          width={46}
          height={46}
          className="transform transition-transform hover:scale-110"
        />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/footer-bird.svg"
          alt="Bird"
          width={46}
          height={46}
          className="transform transition-transform hover:scale-110"
        />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/footer-search.svg"
          alt="Search"
          width={46}
          height={46}
          className="transform transition-transform hover:scale-110"
        />
      </a>
    </div>
  );
};

export default SocialIcons;
