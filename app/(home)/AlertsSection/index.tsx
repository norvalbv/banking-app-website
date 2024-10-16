'use client';

import CardWrapper from '@/components/ui/CardWrapper';
import React, { useState } from 'react';
import ChangingImages from './InfoSectionDisplay';
import InfoSection from './InfoSection';
import { Section } from './Section';

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
            inline
          />
        </Section>
        <Section onInView={() => setActiveSection(1)}>
          <InfoSection
            title="Real-Time"
            highlightedText="Alerts"
            description="Get notified immediately when spending limits are exceeded. Your trusted party will be alerted to take action."
            inline
          />
        </Section>
        <Section onInView={() => setActiveSection(2)}>
          <InfoSection
            title="You're always in"
            highlightedText="Control"
            description="Your trusted party helps manage your finances, but only shares what you want them to."
            inline
          />
        </Section>
      </div>
      <ChangingImages activeSection={activeSection} />
    </CardWrapper>
  );
};

export default AlertsSection;
