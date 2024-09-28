'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import CardWrapper from '@/components/ui/CardWrapper';
import Header from '@/components/ui/Header';

const PreRegister = (): React.ReactElement => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend or email service
    console.log('Submitted email:', email);
    // Reset the form
    setEmail('');
  };

  return (
    <CardWrapper className='h-[50vh] lg:w-1/2 md:w-2/3 sm:w-3/4 w-full'>
      <Header as="h3" title="Join Our Waitlist" className="text-teal-500" />
      <p className="mb-8">
        Be the first to know when we launch. Sign up for early access and exclusive offers.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='flex-1'
          />
          <Button type="submit">Pre Register</Button>
        </div>
        <p className="text-sm text-gray-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
  </CardWrapper>
  );
};

export default PreRegister;
