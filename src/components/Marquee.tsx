import React from "react";
import MarqueeItem from "./MarqueeItem";

interface MarqueeProps {
  items: string[];
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ items = [], className = "" }) => {
  return (
    <div className={`mx-auto ${className}`}>
      <MarqueeItem items={items} className="text-[2vw] font-semibold" />
    </div>
  );
};

export default Marquee;
