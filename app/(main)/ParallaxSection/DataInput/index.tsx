import { Button } from '@/components/ui/button';
import Device from '@/components/ui/Device';

const DataInput = () => {
  return (
    <div className="flex w-full items-center justify-between px-8 h-screen">
      {/* <Device /> */}
      <div className="text-center md:w-1/3 md:text-left">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Save up to <br />
          <span className="text-purple-500">3% abroad</span>
        </h1>
        <p className="mb-6 text-lg text-gray-300">
          Curve protects you from hidden fees abroad charged by your debit and credit cards.
          It&apos;s the only mobile wallet that comes with a physical card so you can spend and
          withdraw cash in any situation.
        </p>
        <Button className="rounded-full bg-purple-600 px-6 py-3 text-lg font-bold text-white hover:bg-purple-700">
          Get Curve
          <svg
            className="ml-2 inline-block h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default DataInput;
