'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroBackground from './HeroBackground';

const Hero = () => {
  function smoothScrollTo(elementId: string, duration = 1000) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const startPosition = window.pageYOffset;
    const endPosition = element.getBoundingClientRect().top;
    const startTime = performance.now();

    function scrollStep(currentTime: number) {
      const elapsedTime = currentTime - startTime;
      const nextStep = easeInOut(elapsedTime, startPosition, endPosition, duration);

      window.scrollTo(0, nextStep);

      if (elapsedTime < duration) {
        requestAnimationFrame(scrollStep);
      } else {
        window.scrollTo(0, startPosition + endPosition);
      }
    }

    function easeInOut(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scrollStep);
  }
  return (
    <div className="relative flex h-screen flex-grow flex-col items-center justify-center overflow-hidden p-6">
      <div className="relative z-10 text-center text-black">
        <h1 className="text-navy-900 mb-4 text-4xl font-bold md:text-6xl">
          Financial Control <br /> with <span className="text-purple-500">Trusted Guidance</span>
        </h1>
        <p className="mx-auto mb-8 max-w-md text-gray-600">
          Achieve financial peace of mind with trusted oversight. Whether you&apos;re managing
          spending limits or getting help from a trusted party, our app ensures your financial
          health is secured.
        </p>
        <Button
          className="rounded bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-600"
          onClick={() => smoothScrollTo('launch-schedule', 2000)}
        >
          <Download className="mr-2 h-4 w-4" /> Learn More
        </Button>
      </div>
      <HeroBackground />
    </div>
  );
};

export default Hero;
