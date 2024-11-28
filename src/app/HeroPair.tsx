"use client";

import React from "react";
import Image from "next/image";
import { TwitterTimelineEmbed } from "react-twitter-embed";

type HeroPairProps = {
  screenName: string;
  imageSrc: string;
  imageAlt: string;
  isTwitterFirst: boolean;
};

const HeroPair: React.FC<HeroPairProps> = ({ screenName, imageSrc, imageAlt, isTwitterFirst }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[40px] lg:max-w-[1280px] lg:mx-auto">
      <div className="lg:hidden">
        <Image
          id={`image-${screenName}-mobile`}
          src={imageSrc}
          alt={imageAlt}
          width={686}
          height={686}
          className="w-full h-auto rounded-lg overflow-hidden"
        />
      </div>
      {isTwitterFirst ? (
        <>
          <div className="hidden lg:block lg:w-1/2 lg:order-1">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={screenName}
              options={{
                tweetLimit: 1,
                width: "100%",
                height: "640px"
              }}
              theme="light"
              noHeader={true}
              noBorders={true}
              noFooter={true}
            />
          </div>
          <div className="hidden lg:block lg:w-1/2 lg:order-2">
            <Image
              id={`image-${screenName}-lg`}
              src={imageSrc}
              alt={imageAlt}
              width={686}
              height={686}
              className="w-full h-auto lg:w-auto lg:h-auto rounded-lg overflow-hidden"
            />
          </div>
        </>
      ) : (
        <>
          <div className="hidden lg:block lg:w-1/2 lg:order-1">
            <Image
              id={`image-${screenName}-lg`}
              src={imageSrc}
              alt={imageAlt}
              width={686}
              height={686}
              className="w-full h-auto lg:w-auto lg:h-auto rounded-lg overflow-hidden"
            />
          </div>
          <div className="hidden lg:block lg:w-1/2 lg:order-2">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={screenName}
              options={{
                tweetLimit: 1,
                width: "100%",
                height: "640px"
              }}
              theme="light"
              noHeader={true}
              noBorders={true}
              noFooter={true}
            />
          </div>
        </>
      )}
      <div className="lg:hidden">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={screenName}
          options={{
            tweetLimit: 1,
            width: "100%",
            height: "640px"
          }}
          theme="light"
          noHeader={true}
          noBorders={true}
          noFooter={true}
        />
      </div>
    </div>
  );
};

export default HeroPair;
