import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function smoothScrollTo(elementId: string, duration = 1000) {
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

export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}
