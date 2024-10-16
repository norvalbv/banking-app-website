import addNewLimit from '@/public/images/addNewLimit.png';
import limitList from '@/public/images/limitList.png';
import Image from 'next/image';
import React, { ReactElement } from 'react';

const CustomLimits = (): ReactElement => {
  return (
    <div
      className="relative grid h-full w-full grid-cols-1 grid-rows-7 gap-2 bg-red-500 sm:grid-cols-5"
      key={1}
    >
      <Image
        src={addNewLimit}
        alt="Add New Limit"
        className="col-span-3 col-start-2 row-span-3 rounded-lg shadow-lg"
      />
      <Image
        src={limitList}
        alt="Limit List"
        className="col-span-5 row-start-7 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default CustomLimits;
