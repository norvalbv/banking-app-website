import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const FAQs = () => {
  return (
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionTrigger>FAQ Question 1</AccordionTrigger>
        <AccordionContent>
          <p>This is the answer to FAQ question 1.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>FAQ Question 2</AccordionTrigger>
        <AccordionContent>
          <p>This is the answer to FAQ Question 2.</p>
        </AccordionContent>
      </AccordionItem>

      {/* Add more items as needed */}
    </Accordion>
  );
};

export default FAQs;
