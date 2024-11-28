"use client"

import React from 'react';
import GlobalStyles from './GlobalStyles';
import BackgroundClouds from './BackgroundClouds';
import HeadingHolder from './HeadingHolder';
import FormWrapper from './FormWrapper';
import Footer from './Footer';

const Presale: React.FC = () => {
  return (
    <div className="page-wrap">
      <GlobalStyles />
      {/* <BackgroundClouds /> */}
      <section className="bg-transparent">
        <div className="container">
          <div className="section-wrap">
            <HeadingHolder />
            <FormWrapper />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Presale;
