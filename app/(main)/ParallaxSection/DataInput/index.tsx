import { Button } from '@/components/ui/Button';
import Header from '@/components/ui/Header';
import { ArrowRight } from 'lucide-react';

const DataInput = () => {
  return (
    <div className="flex w-full items-center justify-between px-8">
      <div className="text-center md:text-left">
        <Header
          title="Save up to"
          highlightedText="3% abroad"
          size="lg"
          alignment="center"
          className="md:text-left"
        />
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
