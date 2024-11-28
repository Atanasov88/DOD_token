"use client"

import React from 'react';

type QRCodeSliderProps = {
  currency: string;
};

const QRCodeSlider: React.FC<QRCodeSliderProps> = ({ currency }) => {
  const getQRCodeSrc = (currency: string) => {
    switch (currency) {
      case 'ETH':
        return '/images/eth.png';
      case 'SOL':
        return '/images/sol.png';
      case 'USDT':
      case 'USDC':
        return '/images/eth.png';
      case 'BNB':
        return '/images/eth.png';
      case 'BTC':
        return '/images/btc.png';
      case 'DOGE':
        return '/images/doge.png';
      default:
        return '/images/Telegram.svg';
    }
  };

  const qrCodeSrc = getQRCodeSrc(currency);

  return (
    <div className="qr-code">
      <div className="qr-code-container">
        <div
          data-delay="4000"
          data-animation="cross"
          className="slider w-slider"
          data-autoplay="false"
          data-easing="ease"
          data-hide-arrows="false"
          data-disable-swipe="true"
          data-autoplay-limit="0"
          data-nav-spacing="3"
          data-duration="500"
          data-infinite="true"
        >
          <div className="w-slider-mask">
            <div className="qr-code-slide w-slide">
              <img
                src={qrCodeSrc}
                loading="lazy"
                sizes="(max-width: 479px) 119.734375px, (max-width: 991px) 149.640625px, 6vw"
                srcSet={`${qrCodeSrc} 500w, ${qrCodeSrc}.jpg 730w`}
                alt=""
                className="q-code"
              />
            </div>
            {/* <div className="qr-code-slide w-slide">
              <img
                src="/images/eth.png"
                loading="lazy"
                sizes="(max-width: 479px) 119.734375px, (max-width: 991px) 149.640625px, 6vw"
                srcSet="/images/eth.png 500w, /images/eth.png       730w"
                alt=""
                className="q-code"
              />
            </div>
            <div className="qr-code-slide w-slide">
              <img
                src="/images/sol.jpg"
                loading="lazy"
                sizes="(max-width: 479px) 120.25px, (max-width: 991px) 150.34375px, 7vw"
                srcSet="/images/sol.png 500w, /images/sol.png       730w"
                alt=""
                className="q-code"
              />
            </div>
            <div className="qr-code-slide w-slide">
              <img
                src="/images/eth.png"
                loading="lazy"
                sizes="(max-width: 479px) 114.1875px, (max-width: 991px) 142.359375px, 6vw"
                srcSet="/images/eth.png 500w, /images/eth.png 800w, /images/eth.png       931w"
                alt=""
                className="q-code"
              />
            </div>
            <div className="qr-code-slide w-slide">
              <div className="telegram-w">
                <a
                  href="https://t.me/filmtvdodsol"
                  target="_blank"
                  className="telegram-link-lg w-inline-block"
                >
                  <img
                    src="/images/Telegram.svg"
                    loading="lazy"
                    alt=""
                    className="telegram-icon lg"
                  />
                </a>
                <div className="text-block-3">Contact Customer Services for details.</div>
              </div>
            </div> */}
          </div>
          <div className="left-arrow w-slider-arrow-left">
            <div className="w-icon-slider-left"></div>
          </div>
          <div className="right-arrow w-slider-arrow-right">
            <div className="w-icon-slider-right"></div>
          </div>
          <div className="slide-nav w-slider-nav w-round w-num"></div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeSlider;
