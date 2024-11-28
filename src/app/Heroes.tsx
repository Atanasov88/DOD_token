"use client";

import React from "react";
import HeroPair from "./HeroPair";
import Image from "next/image";
import defenderImage from "../../public/defender.jpg";

const Heroes = () => {
  const heroesData = [
    { screenName: "realDonaldTrump", imageSrc: "/trump.jpg", imageAlt: "Trump" },
    { screenName: "elonmusk", imageSrc: "/elon.jpg", imageAlt: "Elon Musk" },
    { screenName: "robertkennedyjr", imageSrc: "/rfk.jpg", imageAlt: "RFK" },
    { screenName: "jdvance", imageSrc: "/jd.jpg", imageAlt: "JD Vance" },
    { screenName: "joerogan", imageSrc: "/jre.jpg", imageAlt: "Joe Rogan" },
  ];

  return (
    <section className="w-full bg-transparent p-[15px]">
      <div className="mx-auto max-w-[1280px] mb-4">
        <Image
          src={defenderImage}
          alt="defender"
          layout="responsive"
          width={1400}
          height={300}
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="mx-auto max-w-[1280px] space-y-[40px]">
        {heroesData.map((hero, index) => (
          <HeroPair
            key={hero.screenName}
            screenName={hero.screenName}
            imageSrc={hero.imageSrc}
            imageAlt={hero.imageAlt}
            isTwitterFirst={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default Heroes;
