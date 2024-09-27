import DeviceWithCardPayment from '@/components/ui/Device/DeviceWithCardPayment';
import DeviceWithCardPaymentFail from '@/components/ui/Device/DeviceWithCardPaymentFail';
import DeviceWithConfirmPayment from '@/components/ui/Device/DeviceWithConfirmPayment';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const images = [
  <DeviceWithCardPaymentFail key={1} />,
  <DeviceWithConfirmPayment key={2} />,
  <DeviceWithCardPayment key={3} />,
];

export default function ChangingImages({ activeSection }: { activeSection: number }) {
  return (
    <div className="sticky top-0 flex h-screen w-full items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          {images[activeSection]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
