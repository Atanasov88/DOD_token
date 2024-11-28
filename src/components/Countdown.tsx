"use client"

import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import "../app/Hero.module.css";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const utcNow = Date.now();
    const futureDate = new Date('2025-01-22T23:13:00Z');
    const difference = utcNow - futureDate.getTime();

    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    if (difference < 0) {
      days = Math.abs(Math.floor(difference / (1000 * 60 * 60 * 24) + 1));
      hours = Math.abs(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) + 1),
      );
      minutes = Math.abs(
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60) + 1),
      );
      seconds = Math.abs(Math.floor((difference % (1000 * 60)) / 1000 + 1));
    }

    setTimeLeft({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    calculateTimeLeft();
    const interval = setInterval(() => calculateTimeLeft(), 1000);
    return () => clearInterval(interval);
  }, []);

  const { t, i18n } = useTranslation();

  const formattedDays = timeLeft.days.toString().padStart(2, '0');
  const formattedHours = timeLeft.hours.toString().padStart(2, '0');
  const formattedMinutes = timeLeft.minutes.toString().padStart(2, '0');
  const formattedSeconds = timeLeft.seconds.toString().padStart(2, '0');

  return (
    <div className="mb-4 text-center ml-8 w-fit">
      {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0? (
        <span className="text-lg font-bold text-white">
          {/* Text to show when the timer reached zero */}
        </span>
      ) : (
        <div>
          <span className="text-xl font-bold text-white">
            {/* Text above the timer */}
          </span>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'left',
              marginTop: '1rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '8px',
              }}
            >
              <div className="countdown">
                <span>
                  <b>{formattedDays}</b>
                </span>
              </div>
              <div className="countdown-sub">Days</div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '8px',
              }}
            >
              <div className="countdown">
                <span>
                  <b>{formattedHours}</b>
                </span>
              </div>
              <div className="countdown-sub">Hours</div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '8px',
              }}
            >
              <div className="countdown">
                <span>
                  <b>{formattedMinutes}</b>
                </span>
              </div>
              <div className="countdown-sub">Minutes</div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '8px',
              }}
            >
              <div className="countdown">
                <span>
                  <b>{formattedSeconds}</b>
                </span>
              </div>
              <div className="countdown-sub">Seconds</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Countdown;
