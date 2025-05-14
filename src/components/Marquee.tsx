import React from "react";
import MarqueeItem from "./MarqueeItem";

interface MarqueeProps {
  items: string[];
  className?: string;
  itemClassName?: string;
  direction?: 'forward' | 'backward';
}

const Marquee: React.FC<MarqueeProps> = ({ items = [], className = "", itemClassName = "", direction = "forward" }) => {
  return (
    <div className={`mx-auto ${className}`}>
      <MarqueeItem items={items} className={itemClassName} direction={direction}/>
    </div>
  );
};

export default Marquee;
