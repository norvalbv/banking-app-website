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
    <div className="relative grid h-80 w-full max-w-[24rem] overflow-hidden rounded-xl border border-white bg-white/10 p-4 shadow-lg backdrop-blur-md sm:h-96 sm:p-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/30 to-white/10" />
      <Badge className="absolute -right-20 -top-20 -z-10 size-64 text-gray-100" strokeWidth={0.5} />
      <Badge className="absolute -right-24 -top-24 -z-10 size-64 text-gray-200" strokeWidth={0.5} />
      <Badge className="absolute -right-28 -top-28 -z-10 size-64 text-gray-300" strokeWidth={0.5} />
      {cardKey && <span className="text-5xl sm:text-7xl">{cardKey}</span>}
      <Header {...headerProps} />
      <p className="text-gray-500">{paragraph}</p>
    </div>
  );
};

export default Card;
