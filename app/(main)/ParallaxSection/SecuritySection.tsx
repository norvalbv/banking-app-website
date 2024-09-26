import { Button } from '@/components/ui/button';
import Device from '@/components/ui/Device';

const SecuritySection = () => {
  return (
    <div className="flex items-center justify-between p-8 md:flex-row">
      <Device />
      <div className="text-center md:w-1/3 md:text-left">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Enhanced <br />
          <span className="text-blue-500">Security</span>
        </h1>
        <p className="mb-6 text-lg text-gray-300">
          Protect your finances with Curve&apos;s advanced security features. Enjoy real-time
          notifications, instant card locking, and fraud protection for peace of mind.
        </p>
        <Button className="rounded-full bg-blue-600 px-6 py-3 text-lg font-bold text-white hover:bg-blue-700">
          Learn More
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

export default SecuritySection;