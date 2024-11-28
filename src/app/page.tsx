"use client";
import React, { useState, useEffect } from "react";
//import Header from "../components/Header";
import Hero from "./Hero";
import BuyPresale from "./BuyPresale";
import LiveChart from "./LiveChart";
import JoinPresale from "./JoinPresale";
import Roadmap from "./Roadmap";
import ListedOn from "./ListedOn";
import HowToBuy from "./HowToBuy";
import Heroes from "./Heroes";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main
        className="flex flex-col items-center justify-between overflow-hidden bg-clouds"
        id="home"
      >
        <Hero />
        <BuyPresale />
        <LiveChart />
        <JoinPresale />
        <Roadmap />
        <Heroes />
        <HowToBuy />
        <ListedOn />
      </main>
      <Footer />
    </>
  );
}
