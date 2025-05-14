import React from "react";
import MarqueeItem from "./MarqueeItem";

const Marquee = ({ items = [], className = "" }) => {
  return (
    <div className={`mx-auto ${className}`}>
      <MarqueeItem items={items} className="text-[2vw] font-semibold"/>
    </div>
  );
};

export default Marquee;
