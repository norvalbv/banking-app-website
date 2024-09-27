import React from 'react';
import { motion } from 'framer-motion';

const icons = [
  // Replace these with your actual icon components or paths
  <svg key="icon1">...</svg>,
  <svg key="icon2">...</svg>,
  <svg key="icon3">...</svg>,
];

const SectionIcon = ({ activeSection }: { activeSection: number }) => {
  return (
    <motion.div
      key={activeSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed right-4 top-4 z-50"
    >
      {icons[activeSection]}
    </motion.div>
  );
};

export default SectionIcon;
