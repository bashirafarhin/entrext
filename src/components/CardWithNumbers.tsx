import React from 'react';

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

const CardWithNumbers = ({
  number,
  title,
  description,
  className = "",
}: FeatureCardProps) => {
  return (
    <div className={`rounded-lg p-2 shadow-[0_0_10px_rgba(255,85,19,0.7),0_0_20px_rgba(255,85,19,0.5)] flex flex-col h-full ${className} text-center`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-[#F97316] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
          {number}
        </div>
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>

      <div><p className="text-gray-300 mt-auto">{description}</p></div>
    </div>
  );
};

export default CardWithNumbers;
