import React, { useState } from 'react';
import CurrencyOptions from './CurrencyOptions';
import QRCodeSlider from './QRCodeSlider';
import FormGrid from './FormGrid';

const FormWrapper: React.FC = () => {
  const [currency, setCurrency] = useState<string>('SOL');

  return (
    <div className="form-w lg:w-[50%]">
      <div className="w-form">
        <form id="email-form" name="email-form" data-name="Email Form" method="get" data-wf-page-id="665a094f145951bafa9ed757" data-wf-element-id="751a1c95-52bc-f4be-d8fe-767da3594de2">
          <CurrencyOptions setCurrency={setCurrency} activeCurrency={currency} />
          <QRCodeSlider currency={currency} />
          <FormGrid currency={currency} />
          {/* <p className="text-sm">
            0.024 ETH is reserved for gas fees. The actual amount used will depend on the network activity at the time.
          </p> */}
          <input
            type="submit"
            data-wait="Please wait..."
            className="button-gradient submit w-button"
            value="Confirm Transaction with Customer Service"
          />
          <a
            href="https://t.me/filmtvdodsol"
            target="_blank"
            className="button-gradient sub-btn w-button"
          >
            Confirm with Customer Service
          </a>
        </form>
        {/* <div className="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div className="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div> */}
        <div className="social-icons">
          <a href="https://t.me/filmtvdodsol" target="_blank">
            <img src="/telegram.svg" />
          </a>
          {/* <a href="https://t.me/filmtvdodsol" target="_blank">
            <img src="/chat.svg" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default FormWrapper;
