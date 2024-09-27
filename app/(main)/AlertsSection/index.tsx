'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import InfoSection from './InfoSection';
import ChangingImages from './ChangingImages';
import CardWrapper from '@/components/ui/CardWrapper';

const Section = ({ children, onInView }: { children: React.ReactNode; onInView: () => void }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onInView();
    }
  }, [inView, onInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1.25 }}
      className="flex h-screen items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

const AlertsSection = () => {
  const [activeSection, setActiveSection] = useState<0 | 1 | 2>(0);

  return (
    <CardWrapper className="flex">
      <div>
        <Section onInView={() => setActiveSection(0)}>
          <InfoSection
            title="Set Custom"
            highlightedText="Limits"
            description="Define spending limits with your trusted party to ensure your finances stay on track."
          />
        </Section>
        <Section onInView={() => setActiveSection(1)}>
          <InfoSection
            title="Real-Time"
            highlightedText="Alerts"
            description="Get notified immediately when spending limits are exceeded. Your trusted party will be alerted to take action."
          />
        </Section>
        <Section onInView={() => setActiveSection(2)}>
          <InfoSection
            title="Shared"
            highlightedText="Control"
            description="Your trusted party manages your finances, helping you stay within budget while you retain oversight."
          />
        </Section>
      </div>
      <ChangingImages activeSection={activeSection} />
    </CardWrapper>
  );
};

export default AlertsSection;
