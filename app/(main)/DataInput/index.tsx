import { Button } from "@/components/ui/button"

export default function DataInput() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-tr from-black via-slate-900 to-slate-800 min-h-screen">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <div className="relative w-72 h-[32rem] mx-auto">
          {/* Phone frame */}
            {/* Screen content */}
              {/* Curve card on screen */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-36 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg">
                <div className="p-4">
                  <div className="text-xs text-gray-400 mb-2">GO ME</div>
                  <div className="flex justify-end items-end h-24">
                    <div className="w-8 h-8 bg-gray-600 rounded-full mr-2"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              </div>
              {/* Checkmark */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-800 font-semibold">
                Done
              </div>
          {/* Physical card */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl rotate-12">
            <div className="p-4">
              <div className="text-sm text-gray-400 mb-2">GO ME</div>
              <div className="flex justify-end items-end h-28">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-2"></div>
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Save up to <br />
          <span className="text-purple-500">3% abroad</span>
        </h1>
        <p className="text-lg mb-6 text-gray-300">
          Curve protects you from hidden fees abroad charged by your debit and credit cards. It's the only mobile wallet
          that comes with a physical card so you can spend and withdraw cash in any situation.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg">
          Get Curve
          <svg
            className="w-5 h-5 ml-2 inline-block"
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
  )
}