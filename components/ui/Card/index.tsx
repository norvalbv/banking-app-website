import { Badge } from 'lucide-react';
import React, { ReactElement } from 'react';
import Header, { HeaderProps } from '../Header';

type CardProps = {
  cardKey?: string;
  headerProps: HeaderProps;
  paragraph: string;
};

const Card = ({ cardKey, headerProps, paragraph }: CardProps): ReactElement => {
  return (
    <div className="relative grid h-96 w-96 grid-row-3 overflow-hidden rounded-xl border border-white bg-white/70 p-6 shadow-lg">
      <Badge className="absolute -right-20 -top-20 size-64 text-gray-100" strokeWidth={0.5} />
      <Badge className="absolute -right-24 -top-24 size-64 text-gray-200" strokeWidth={0.5} />
      <Badge className="absolute -right-28 -top-28 size-64 text-gray-300" strokeWidth={0.5} />
      {cardKey && <span className="text-7xl row-span-1">{cardKey}</span>}
      <Header {...headerProps} className='z-10 row-span-1' />
      <p className="text-gray-500 row-span-1">{paragraph}</p>
    </div>
  );
};

export default Card;
