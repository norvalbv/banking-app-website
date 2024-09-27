import { CakeIcon, CreditCard } from 'lucide-react';

const BankCard = () => {
  return (
    <div className="relative mx-auto w-full max-w-[85.60mm] shadow-lg">
      <div className="absolute z-10 grid size-full place-items-center text-white">
        <CakeIcon className="size-12" strokeWidth={0.75} />
      </div>
      <div className="bg-gradient-radial-dark flex aspect-[1.58/1] flex-col justify-between rounded-xl p-4 text-white shadow-lg">
        <div className="flex items-start justify-between">
          <CreditCard className="size-5 text-gray-300" />
          <div className="font-light">John Doe</div>
        </div>
        <div className="space-y-0 text-sm">
          <div className="flex items-end justify-between">
            <div className="font-medium tracking-wider">•••• 2205</div>
            <div className="text-lg font-bold italic tracking-widest">VISA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
