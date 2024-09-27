import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const DataInput = () => {
  return (
    <div className="flex h-screen w-full items-center justify-between px-8">
      <div className="text-center md:w-1/3 md:text-left">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Save up to <br />
          <span className="text-rose-500">3% abroad</span>
        </h1>
        <p className="mb-6 text-gray-500">
          Curve protects you from hidden fees abroad charged by your debit and credit cards.
          It&apos;s the only mobile wallet that comes with a physical card so you can spend and
          withdraw cash in any situation.
        </p>

        <Button icon={ArrowRight} iconPosition="right">
          Get Curve
        </Button>
      </div>
    </div>
  );
};

export default DataInput;
