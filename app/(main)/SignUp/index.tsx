'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import CardWrapper from '@/components/ui/CardWrapper';

const SignUp = (): React.ReactElement => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend or email service
    console.log('Submitted email:', email);
    // Reset the form
    setEmail('');
  };

  return (
    <CardWrapper>
      <div className="mx-auto grid h-[40rem] w-1/2 place-items-center">
        <div>
          <h3 className="mb-6 text-4xl font-bold text-rose-500">Join Our Waitlist</h3>
          <p className="mb-8 text-lg text-gray-600">
            Be the first to know when we launch. Sign up for early access and exclusive offers.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button type="submit">Sign Up</Button>
            </div>
            <p className="text-sm text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </CardWrapper>
  );
};

export default SignUp;
