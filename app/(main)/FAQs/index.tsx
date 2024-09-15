import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import CardWrapper from '@/components/ui/CardWrapper';

const FAQs = () => {
  return (
    <CardWrapper className="bg-gradient-to-bl from-slate-800 via-slate-900 to-black py-10">
      <div className="relative mx-auto w-1/2 max-w-screen-xl 2xl:max-w-screen-2xl">
        <h3 className="mb-6 text-4xl font-bold text-purple-500">FAQs</h3>
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
      </div>
    </CardWrapper>
  );
};

export default FAQs;
