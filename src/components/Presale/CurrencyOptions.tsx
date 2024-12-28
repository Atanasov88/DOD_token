import React from 'react';

type CurrencyOptionsProps = {
  setCurrency: (currency: string) => void;
  activeCurrency: string;
};

const CurrencyOptions: React.FC<CurrencyOptionsProps> = ({ setCurrency, activeCurrency }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(e.target.value);
  };

  const getBorderStyle = (currency: string) => {
    return currency === activeCurrency ? '2px solid black' : '2px solid transparent';
  };

  return (
    <div className="coins-list" id="w-node-_18add3ad-5d49-7b89-c4e9-7d1d7dbfe4c8-fa9ed757">
      <label
        data-to="1"
        id="w-node-a12e0531-e8ab-23ad-e16e-e185c4cc68dc-fa9ed757"
        className="c-item sol-btn w-radio"
        style={{ border: getBorderStyle('SOL') }}
      >
        <img
          src="/images/sol.svg"
          loading="lazy"
          id="w-node-_027839bc-fe9b-9d23-266c-eb85e905f4c3-fa9ed757"
          alt=""
          className="logo-s"
        />
        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button sol-rad w-radio-input"></div>
        <input
          type="radio"
          data-name="Currency"
          id="SOL"
          name="Currency"
          style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
          value="SOL"
          onChange={handleChange}
        />
        <span className="radio-button-label w-form-label" id="SOL">
          SOL
        </span>
      </label>
      <label
        data-to="2"
        id="w-node-dd3f383c-41ab-f008-a817-4ccc1656e9f2-fa9ed757"
        className="c-item eth-btn w-radio"
        style={{ border: getBorderStyle('ETH') }}
      >
        <img
          src="/images/ethereum.svg"
          loading="lazy"
          alt=""
          className="logo-s"
        />
        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
        <input
          type="radio"
          data-name="Currency"
          id="ETH"
          name="Currency"
          style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
          value="ETH"
          onChange={handleChange}
        />
        <span className="radio-button-label w-form-label" id="ETH">
          ETH
        </span>
      </label>
      <label
        data-to="3"
        id="w-node-_5e2cc2c5-54a3-6e1c-cf6f-31a4e49ae2bd-fa9ed757"
        className="c-item usdt-btn w-radio"
        style={{ border: getBorderStyle('USDT') }}
      >
        <img
          src="/images/photo_2024-06-26_17-21-53.jpg"
          loading="lazy"
          id="w-node-_4327e718-ba3b-111d-0726-9bec45131951-fa9ed757"
          sizes="(max-width: 991px) 12.328125px, 2vw"
          alt=""
          srcSet="/images/photo_2024-06-26_17-21-53-p-500.jpg  500w, /images/photo_2024-06-26_17-21-53-p-800.jpg  800w, /images/photo_2024-06-26_17-21-53.jpg       1050w"
          className="logo-s"
        />
        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
        <input
          type="radio"
          data-name="Currency"
          id="USDT"
          name="Currency"
          style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
          value="USDT"
          onChange={handleChange}
        />
        <span className="radio-button-label w-form-label" id="USDT">
          USDT
        </span>
      </label>
      <label
        data-to="4"
        id="w-node-_41549c21-5e20-f0eb-60d2-3ae85f806f67-fa9ed757"
        className="c-item usdc-btn w-radio"
        style={{ border: getBorderStyle('USDC') }}
      >
        <img
          src="/images/photo_2024-06-26_17-22-20.jpg"
          loading="lazy"
          id="w-node-_23959d5a-f35f-ccf2-d67b-7172f6797b49-fa9ed757"
          sizes="(max-width: 991px) 12.5px, 2vw"
          alt=""
          srcSet="/images/photo_2024-06-26_17-22-20-p-500.jpg 500w, /images/photo_2024-06-26_17-22-20-p-800.jpg 800w, /images/photo_2024-06-26_17-22-20.jpg       954w"
          className="logo-s"
        />
        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
        <input
          type="radio"
          data-name="Currency"
          id="USDC"
          name="Currency"
          style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
          value="USDC"
          onChange={handleChange}
        />
        <span className="radio-button-label w-form-label" id="USDC">
          USDC
        </span>
      </label>
      <label
        data-to="5"
        id="w-node-_41549c21-5e20-f0eb-60d2-3ae85f806f67-fa9ed757"
        className="c-item usdc-btn w-radio"
        style={{ border: getBorderStyle('BNB') }}
      >
        <img
          src="/images/bnb_logo.png"
          loading="lazy"
          id="w-node-_23959d5a-f35f-ccf2-d67b-7172f6797b49-fa9ed757"
          sizes="(max-width: 991px) 12.5px, 2vw"
          alt=""
          srcSet="/images/bnb_logo_p-500.png 500w, /images/bnb_logo_p-500.png 800w, /images/bnb_logo.jpg       954w"
          className="logo-s"
        />
        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
        <input
          type="radio"
          data-name="Currency"
          id="BNB"
          name="Currency"
          style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
          value="BNB"
          onChange={handleChange}
        />
        <span className="radio-button-label w-form-label" id="BNB">
          BNB
        </span>
      </label>
      <label
        data-to="6"
        id="w-node-_41549c21-5e20-f0eb-60d2-3ae85f806f67-fa9ed757"
        className="c-item usdc-btn w-radio"
        style={{ border: getBorderStyle('BTC') }}
      >
        <img
          src="/images/btc_logo.png"
          loading="lazy"
          id="w-node-_23959d5a-f35f-ccf2-d67b-7172f6797b49-fa9ed757"
          sizes="(max-width: 991px) 12.5px, 2vw"
          alt=""
          srcSet="/images/btc_logo.png 500w, /images/btc_logo.png 800w, /images/btc_logo.png       954w"
          className="logo-s"
        />
        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
        <input
          type="radio"
          data-name="Currency"
          id="BTC"
          name="Currency"
          style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
          value="BTC"
          onChange={handleChange}
        />
        <span className="radio-button-label w-form-label" id="BTC">
          BTC
        </span>
      </label>
      <label
        data-to="7"
        id="w-node-_41549c21-5e20-f0eb-60d2-3ae85f806f67-fa9ed757"
        className="c-item usdc-btn w-radio"
        style={{ border: getBorderStyle('DOGE') }}
      >
        <img
          src="/images/doge_logo.png"
          loading="lazy"
          id="w-node-_23959d5a-f35f-ccf2-d67b-7172f6797b49-fa9ed757"
          sizes="(max-width: 991px) 12.5px, 2vw"
          alt=""
          srcSet="/images/doge_logo.png 500w, /images/doge_logo.png 800w, /images/doge_logo.png       954w"
          className="logo-s"
        />
        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
        <input
          type="radio"
          data-name="Currency"
          id="DOGE"
          name="Currency"
          style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
          value="DOGE"
          onChange={handleChange}
        />
        <span className="radio-button-label w-form-label" id="DOGE">
          DOGE
        </span>
      </label>
      <label
        data-to="8"
        id="w-node-_2dfd7fca-120e-5da3-3456-1bc0ecfd9135-fa9ed757"
        className="c-item usdc-btn w-radio"
        style={{ border: getBorderStyle('Other Coins') }}
      >
        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
        <input
          type="radio"
          data-name="Currency"
          id="Other-Coins"
          name="Currency"
          style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
          value="Other Coins"
          onChange={handleChange}
        />
        <span className="radio-button-label w-form-label" id="Other-Coins">
          Other Coins
        </span>
      </label>
      <label
        data-to="9"
        id="w-node-e75aaaec-9c58-076f-b08f-742d1edd1d15-fa9ed757"
        className="c-item w-radio"
        style={{ border: getBorderStyle('Cards') }}
      >
        <img
          src="/card.png"
          loading="lazy"
          id="w-node-_5e8c9412-09b7-3445-1db5-d9b828961c18-fa9ed757"
          sizes="(max-width: 991px) 12.5px, 2vw"
          alt=""
          className="logo-s"
        />
        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input"></div>
        <input
          type="radio"
          data-name="Currency"
          id="Cards"
          name="Currency"
          style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
          value="Cards"
          onChange={handleChange}
        />
        <span className="radio-button-label w-form-label" id="Cards">
          Cards
        </span>
      </label>
    </div>
  );
};

export default CurrencyOptions;
