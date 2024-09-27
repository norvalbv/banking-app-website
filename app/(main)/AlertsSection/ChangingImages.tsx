import DeviceWithCardPayment from '@/components/ui/Device/DeviceWithCardPayment';
import DeviceWithSetLimits from '@/components/ui/Device/DeviceWithSetLimits';
import DeviceWithConfirmPayment from '@/components/ui/Device/DeviceWithConfirmPayment';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactElement } from 'react';

const images = [
  <DeviceWithSetLimits key={1} />,
  <DeviceWithConfirmPayment key={2} />,
  <DeviceWithCardPayment key={3} />,
];

type ChangingImagesProps = {
  activeSection: 0 | 1 | 2;
};

const ChangingImages = ({ activeSection }: ChangingImagesProps): ReactElement => {
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
};

export default ChangingImages;
