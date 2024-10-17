'use client';

import { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Alert from '@/components/ui/Alert';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Textarea } from '@/components/ui/TextArea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/Button';
import Header from '@/components/ui/Header';
import CardWrapper from '@/components/ui/CardWrapper';
import { successfulToast } from '@/lib/toasts';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const ContactUs = (): ReactElement => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    setIsLoading(true);
    // Simulate API call
    successfulToast('Message sent successfully');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="bg-gradient-radial absolute inset-0 rotate-180 scale-x-[-1] bg-line-mask bg-cover bg-center bg-no-repeat" />
      <CardWrapper className="relative z-10 flex h-full flex-col justify-center">
        <Header className="mb-8 text-4xl font-bold" title="Contact" highlightedText="Us" inline />
        {isSubmitted ? (
          <Alert
            variant="succeeded"
            title="Thank you for your message!"
            description="We'll get back to you as soon as possible."
          />
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message" className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isLoading}
                onClick={form.handleSubmit(onSubmit)}
                loading={isLoading}
              >
                Send Message
              </Button>
            </form>
          </Form>
        )}
      </CardWrapper>
    </div>
  );
};

export default ContactUs;
