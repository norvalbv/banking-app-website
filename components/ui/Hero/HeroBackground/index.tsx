'use client';

import React, { useEffect, useState } from 'react';

const HeroBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const texts = [
    'CONTROL TRUST MONITOR FINANCE SAFE',
    'LIMIT SECURE PLAN SAVE PROTECT',
    'BUDGET STABILITY INVEST CARE',
    'MANAGE AID RELIEF PREVENT STRENGTH',
  ];

  return (
    <div className="absolute inset-0 opacity-90 overflow-hidden text-slate-900">
      <div
        className={`absolute left-0 top-0 flex h-full w-full select-none flex-col text-[16vw] font-black leading-none transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}
      >
        {texts.map((text, index) => (
          <div key={index} className="relative h-1/4">
            <div
              className={`absolute flex w-[400%] ${
                index % 2 === 0 ? 'animate-marquee-left' : 'animate-marquee-right'
              }`}
            >
              <div className="flex-none whitespace-nowrap">{text}</div>
              <div className="flex-none whitespace-nowrap">{text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBackground;
