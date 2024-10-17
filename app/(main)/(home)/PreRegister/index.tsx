'use client';

import { Button } from '@/components/ui/Button';
import CardWrapper from '@/components/ui/CardWrapper';
import Header from '@/components/ui/Header';
import { Input } from '@/components/ui/input';
import { successfulToast } from '@/lib/toasts';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

type FormData = z.infer<typeof schema>;

const PreRegister = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    // Here you would typically send the email to your backend or email service
    console.log('Submitted email:', data.email);
    // Reset the form
    successfulToast('Thank you for your interest in our waitlist!');
    reset();
  };

  return (
    <CardWrapper className="h-[50vh] w-full sm:w-3/4 md:w-2/3 lg:w-1/2" id="pre-register">
      <Header as="h3" highlightedText="Join Our Waitlist" className="text-teal-500" />
      <p className="mb-8">
        Be the first to know when we launch. Sign up for early access and exclusive offers.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            {...register('email')}
            className="flex-1"
          />
          <Button type="submit" icon={ArrowRight} iconPosition="right">
            Pre Register
          </Button>
        </div>
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
        <p className="text-sm text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
      </form>
    </CardWrapper>
  );
};

export default PreRegister;
