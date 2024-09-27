import React from 'react';

type Props = {
  cardKey?: string;
};

const Card = ({ cardKey }: Props) => {
  return (
    <div className="flex h-96 w-96 flex-col justify-evenly rounded-xl border border-white bg-white/70 p-6 shadow-lg">
      {cardKey && <span className="text-7xl">{cardKey}</span>}
      <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
        Save up to <br />
        <span className="text-rose-500">3% abroad</span>
      </h2>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus in voluptas deleniti
        fugit a nihil esse ducimus quia dicta assumenda!
      </p>
    </div>
  );
};

export default Card;
