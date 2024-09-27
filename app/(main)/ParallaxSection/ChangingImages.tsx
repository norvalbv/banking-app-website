import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Device from '@/components/ui/Device';

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
          <Device />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
