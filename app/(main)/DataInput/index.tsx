import { Button } from '@/components/ui/button';

export default function DataInput() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-tr from-black via-slate-900 to-slate-800 p-8 md:flex-row">
      <div className="mb-8 md:mb-0 md:w-1/2">
        <div className="relative mx-auto h-[32rem] w-72">
          {/* Phone frame */}
          <div className="absolute inset-0 overflow-hidden rounded-[3rem] bg-gray-800 shadow-xl">
            {/* Screen content */}
            <div className="absolute inset-2 overflow-hidden rounded-[2.5rem] bg-gray-100">
              {/* Curve card on screen */}
              <div className="absolute left-1/2 top-1/2 h-36 w-56 -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg">
                <div className="p-4">
                  <div className="mb-2 text-xs text-gray-400">GO ME</div>
                  <div className="flex h-24 items-end justify-end">
                    <div className="mr-2 h-8 w-8 rounded-full bg-gray-600"></div>
                    <div className="h-8 w-8 rounded-full bg-gray-700"></div>
                  </div>
                </div>
              </div>
              {/* Checkmark */}
              <div className="absolute bottom-8 left-1/2 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full bg-green-500">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform font-semibold text-gray-800">
                Done
              </div>
            </div>
          </div>
          {/* Physical card */}
          <div className="absolute -bottom-4 left-1/2 h-40 w-64 -translate-x-1/2 rotate-12 transform rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl">
            <div className="p-4">
              <div className="mb-2 text-sm text-gray-400">GO ME</div>
              <div className="flex h-28 items-end justify-end">
                <div className="mr-2 h-10 w-10 rounded-full bg-gray-600"></div>
                <div className="h-10 w-10 rounded-full bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center md:w-1/2 md:text-left">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Save up to <br />
          <span className="text-purple-500">3% abroad</span>
        </h1>
        <p className="mb-6 text-lg text-gray-300">
          Curve protects you from hidden fees abroad charged by your debit and credit cards. It's
          the only mobile wallet that comes with a physical card so you can spend and withdraw cash
          in any situation.
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
}
