"use client";

import React, { useState, useEffect } from "react";
import fetchCryptoPrices, { CryptoPrices } from "./CryptoPrices";

type FormGridProps = {
  currency: string;
};

const FormGrid: React.FC<FormGridProps> = ({ currency }) => {
  const [address, setAddress] = useState<string>(
    "0x4e0745ac33F5e686826a528acca09645b9D9AcCD"
  );
  const [solValue, setSolValue] = useState<number>(0);
  const [ethValue, setEthValue] = useState<number>(0);
  const [usdtValue, setUsdtValue] = useState<number>(0);
  const [usdcValue, setUsdcValue] = useState<number>(0);
  const [wscValue, setWscValue] = useState<number>(0);
  const [bnbValue, setBnbValue] = useState<number>(0);
  const [btcValue, setBtcValue] = useState<number>(0);
  const [dogeValue, setDogeValue] = useState<number>(0);
  const [prices, setPrices] = useState<CryptoPrices>({})
  const init = async () => {
    const _prices = await fetchCryptoPrices();
    setPrices(_prices)
  }

  if(!prices?.sol) {
    init()
  }
  useEffect(() => {
    if (currency === "SOL") {
      setAddress("HXyAGztQPH1f2sMTToKty9hz7uP4jF9VYBmtBaez4ywH");
      setSolValue(0);
      setEthValue(0);
      setUsdtValue(0);
      setUsdcValue(0);
      setBnbValue(0);
      setBnbValue(0);
      setBtcValue(0);
      setDogeValue(0);
      setWscValue(0);
    } else if (currency === "ETH") {
      setAddress("0x4e0745ac33F5e686826a528acca09645b9D9AcCD");
      setSolValue(0);
      setEthValue(0);
      setUsdtValue(0);
      setUsdcValue(0);
      setBnbValue(0);
      setBnbValue(0);
      setBtcValue(0);
      setDogeValue(0);
      setWscValue(0);
    } else if (currency === "USDT") {
      setAddress("0x4e0745ac33F5e686826a528acca09645b9D9AcCD");
      setSolValue(0);
      setEthValue(0);
      setUsdtValue(0);
      setUsdcValue(0);
      setBnbValue(0);
      setBnbValue(0);
      setBtcValue(0);
      setDogeValue(0);
      setWscValue(0);
    } else if (currency === "USDC") {
      setAddress("0x4e0745ac33F5e686826a528acca09645b9D9AcCD");
      setSolValue(0);
      setEthValue(0);
      setUsdtValue(0);
      setUsdcValue(0);
      setBnbValue(0);
      setBnbValue(0);
      setBtcValue(0);
      setDogeValue(0);
      setWscValue(0);
    } else if (currency === "BNB") {
      setAddress("0x4e0745ac33F5e686826a528acca09645b9D9AcCD");
      setSolValue(0);
      setEthValue(0);
      setUsdtValue(0);
      setUsdcValue(0);
      setBnbValue(0);
      setBnbValue(0);
      setBtcValue(0);
      setDogeValue(0);
      setWscValue(0);
    } else if (currency === "BTC") {
      setAddress("bc1qz3dhaznk3tlv22cq749897pjgq6n00ytt0azh6");
      setSolValue(0);
      setEthValue(0);
      setUsdtValue(0);
      setUsdcValue(0);
      setBnbValue(0);
      setBnbValue(0);
      setBtcValue(0);
      setDogeValue(0);
      setWscValue(0);
    } else if (currency === "DOGE") {
      setAddress("DKqZ4vGrawJGbJvPdawnjRpNNtoaKadaak");
      setSolValue(0);
      setEthValue(0);
      setUsdtValue(0);
      setUsdcValue(0);
      setBnbValue(0);
      setBnbValue(0);
      setBtcValue(0);
      setDogeValue(0);
      setWscValue(0);
    } else {
      setAddress("445JHJJHMJJHHJHHJH8DFXV2FG8FG49jkjkj5");
      setSolValue(0);
      setEthValue(0);
      setUsdtValue(0);
      setUsdcValue(0);
      setBnbValue(0);
      setBnbValue(0);
      setBtcValue(0);
      setDogeValue(0);
      setWscValue(0);
    }
  }, [currency]);

  useEffect(() => {
      if (currency === "SOL") {
        setWscValue((prices?.sol ?? 0) * solValue * 2500000);
      } else if (currency === "ETH") {
        setWscValue((prices?.eth ?? 0) * ethValue * 2500000);
      } else if (currency === "USDT") {
        setWscValue(2500000 * usdtValue);
      } else if (currency === "USDC") {
        setWscValue(2500000 * usdtValue);
      } else if (currency === "BTC") {
        setWscValue((prices?.btc ?? 0) * btcValue * 2500000);
      } else if (currency === "BNB") {
        setWscValue((prices?.bnb ?? 0) * bnbValue * 2500000);
      } else if (currency === "DOGE") {
        setWscValue((prices?.doge ?? 0) * dogeValue * 2500000);
      }
  }, [solValue, ethValue, usdtValue, usdcValue, btcValue, bnbValue, dogeValue, currency]);

  return (
    <div className="form-grid">
      {(currency === "SOL" || currency === "ETH" || currency === "USDT" || currency === "USDC" || currency === "BNB" || currency ===  "BTC" ||currency ===  "DOGE") &&
        (
          <>
            <div
              className="form-control"
              id="w-node-_8c4e992d-e8c4-8bb0-d1cf-89a81bdbf0fb-fa9ed757"
            >
              <label htmlFor="name" className="label-text3">
                Send <span className="coin-label">{currency} </span> to this address
                or above QR Code
              </label>
              <input
                className="input-s display-add w-input"
                maxLength={256}
                name="name"
                data-name="Name"
                placeholder=""
                type="text"
                id="name"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div></>
        )}
      {currency === "SOL" && (
        <>
          <div
            className="form-control"
            id="w-node-ee41d4c6-ddaa-c051-5ecc-8861422d4b97-fa9ed757"
          >
            <label htmlFor="sol" className="label-text2">
              Pay with SOL
            </label>
            <div className="form-control-holder">
              <input
                className="input-s sol-input w-input"
                maxLength={256}
                name="sol"
                data-name="sol"
                placeholder="0"
                type="float"
                id="sol"
                onChange={(e) => setSolValue(Number(e.target.value))}
                required
              />
            </div>
          </div>
          <div
            className="form-control"
            id="w-node-_710b6a20-7769-f5b0-2094-b832c0d41a4d-fa9ed757"
          >
            <label htmlFor="wsc" className="label-text2">
              Receive $DOD
            </label>
            <div className="form-control-holder">
              <input
                className="input-s sol-display w-input"
                maxLength={256}
                name="WSC"
                data-name="WSC"
                placeholder="0"
                type="text"
                id="WSC"
                value={wscValue}
                readOnly
              />
            </div>
          </div>
        </>
      )}
      {currency === "ETH" && (
        <>
          <div
            className="form-control"
            id="w-node-f15889a0-aa72-958b-f319-13be982afe1b-fa9ed757"
          >
            <label htmlFor="eth" className="label-text2">
              Pay with ETH
            </label>
            <div className="form-control-holder">
              <input
                className="input-s eth-input w-input"
                maxLength={256}
                name="ETH"
                data-name="ETH"
                placeholder="0"
                type="float"
                id="ETH"
                onChange={(e) => setEthValue(Number(e.target.value))}
                required
              />
            </div>
          </div>
          <div
            className="form-control"
            id="w-node-d4d4d87c-0b2c-6fef-ba5b-126c74a1b84b-fa9ed757"
          >
            <label htmlFor="ethDisplay" className="label-text2">
              Receive $DOD
            </label>
            <div className="form-control-holder">
              <input
                className="input-s eth-display w-input"
                maxLength={256}
                name="WSC-2"
                data-name="WSC 2"
                placeholder="0"
                type="text"
                id="WSC-2"
                value={wscValue}
                readOnly
              />
            </div>
          </div>
        </>
      )}
      {(currency === "USDT" || currency === "USDC") && (
        <>
          <div
            className="form-control"
            id="w-node-_267c8ec4-9f21-96d6-b33f-2093f2b9120e-fa9ed757"
          >
            <label htmlFor="usdt" className="label-text2">
              Pay with USDT or USDC
            </label>
            <div className="form-control-holder">
              <input
                className="input-s usdt-input w-input"
                maxLength={256}
                name="USDT"
                data-name="USDT"
                placeholder="0"
                type="float"
                id="USDT"
                onChange={(e) => setUsdtValue(Number(e.target.value))}
                required
              />
            </div>
          </div>
          <div
            className="form-control"
            id="w-node-efcc67c8-41e4-2bba-3780-d5e987b34f7c-fa9ed757"
          >
            <label htmlFor="usdtDisplay" className="label-text2">
              Receive $DOD
            </label>
            <div className="form-control-holder">
              <input
                className="input-s usdt-display w-input"
                maxLength={256}
                name="WSC-3"
                data-name="WSC 3"
                placeholder="0"
                type="text"
                id="WSC-3"
                value={wscValue}
                readOnly
              />
            </div>
          </div>
        </>
      )}
      {currency === "BNB" && (
        <>
          <div
            className="form-control"
            id="w-node-f15889a0-aa72-958b-f319-13be982afe1b-fa9ed757"
          >
            <label htmlFor="eth" className="label-text2">
              Pay with BNB
            </label>
            <div className="form-control-holder">
              <input
                className="input-s eth-input w-input"
                maxLength={256}
                name="BNB"
                data-name="BNB"
                placeholder="0"
                type="float"
                id="BNB"
                onChange={(e) => setBnbValue(Number(e.target.value))}
                required
              />
            </div>
          </div>
          <div
            className="form-control"
            id="w-node-d4d4d87c-0b2c-6fef-ba5b-126c74a1b84b-fa9ed757"
          >
            <label htmlFor="ethDisplay" className="label-text2">
              Receive $DOD
            </label>
            <div className="form-control-holder">
              <input
                className="input-s eth-display w-input"
                maxLength={256}
                name="WSC-2"
                data-name="WSC 2"
                placeholder="0"
                type="text"
                id="WSC-2"
                value={wscValue}
                readOnly
              />
            </div>
          </div>
        </>
      )}
      {currency === "BTC" && (
        <>
          <div
            className="form-control"
            id="w-node-f15889a0-aa72-958b-f319-13be982afe1b-fa9ed757"
          >
            <label htmlFor="eth" className="label-text2">
              Pay with BTC
            </label>
            <div className="form-control-holder">
              <input
                className="input-s eth-input w-input"
                maxLength={256}
                name="BTC"
                data-name="BTC"
                placeholder="0"
                type="float"
                id="BTC"
                onChange={(e) => setBtcValue(Number(e.target.value))}
                required
              />
            </div>
          </div>
          <div
            className="form-control"
            id="w-node-d4d4d87c-0b2c-6fef-ba5b-126c74a1b84b-fa9ed757"
          >
            <label htmlFor="ethDisplay" className="label-text2">
              Receive $DOD
            </label>
            <div className="form-control-holder">
              <input
                className="input-s eth-display w-input"
                maxLength={256}
                name="WSC-2"
                data-name="WSC 2"
                placeholder="0"
                type="text"
                id="WSC-2"
                value={wscValue}
                readOnly
              />
            </div>
          </div>
        </>
      )}
      {currency === "DOGE" && (
        <>
          <div
            className="form-control"
            id="w-node-f15889a0-aa72-958b-f319-13be982afe1b-fa9ed757"
          >
            <label htmlFor="eth" className="label-text2">
              Pay with DOGE
            </label>
            <div className="form-control-holder">
              <input
                className="input-s eth-input w-input"
                maxLength={256}
                name="DOGE"
                data-name="DOGE"
                placeholder="0"
                type="float"
                id="DOGE"
                onChange={(e) => setDogeValue(Number(e.target.value))}
                required
              />
            </div>
          </div>
          <div
            className="form-control"
            id="w-node-d4d4d87c-0b2c-6fef-ba5b-126c74a1b84b-fa9ed757"
          >
            <label htmlFor="ethDisplay" className="label-text2">
              Receive $DOD
            </label>
            <div className="form-control-holder">
              <input
                className="input-s eth-display w-input"
                maxLength={256}
                name="WSC-2"
                data-name="WSC 2"
                placeholder="0"
                type="text"
                id="WSC-2"
                value={wscValue}
                readOnly
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FormGrid;
