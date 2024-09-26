import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Device from '@/components/ui/Device';


const ChangingImages = ({ activeSection }: { activeSection: number }) => {
  return (
    <div className="w-full h-screen fixed top-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
         <Device/>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ChangingImages;