import { ShoppingBag, CreditCard } from 'lucide-react';

const BankCard = () => {
  return (
    <div className="mx-auto w-full max-w-[85.60mm] shadow-lg">
      <div className="flex aspect-[1.58/1] flex-col justify-between rounded-xl bg-gradient-to-br from-gray-900 to-black p-4 text-white shadow-lg">
        <div className="flex items-start justify-between">
          <CreditCard className="size-5 text-gray-300" />
          <ShoppingBag className="size-5 text-gray-400" />
        </div>
        <div className="space-y-4 text-sm">
          <div className="font-medium tracking-wider">•••• 3825</div>
          <div className="flex items-end justify-between">
            <div className="font-light">John Doe</div>
            <div className="text-md font-bold italic tracking-widest">VISA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
