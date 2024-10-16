import { AnimatePresence, motion } from 'framer-motion';
import { ReactElement, useMemo } from 'react';
import AlertsSection from '..';
import CustomLimits from '../DataPoints/CustomLimits';
import Transactions from '../DataPoints/Transactions';

type InfoSectionDisplayProps = {
  activeSection: 0 | 1 | 2;
};

const InfoSectionDisplay = ({ activeSection }: InfoSectionDisplayProps): ReactElement => {
  const section = useMemo(() => {
    switch (activeSection) {
      case 0:
        return <CustomLimits />;
      case 1:
        return <AlertsSection />;
      case 2:
        return <Transactions />;
    }
  }, [activeSection]);

  return (
    <div className="sticky top-0 flex h-screen w-full items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-full max-h-[50vh] w-full max-w-4xl px-4 sm:px-0"
        >
          {section}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default InfoSectionDisplay;
