import React from "react";
import Button from "./common/Button";
import TextAnimation from "./Animations/TextAnimation";

const items = [
  {
    title: "Partnership with Non-Tech Founders",
    desc: "If you believe you have an idea, and you come from a non-tech background and you've got no one, pitch us. Who knows, maybe we'll make the product with you and work on a partnership model.\nMail us",
  },
  {
    title: "Partnership with Content Creator Marketers",
    desc: "If you believe you're great at creating content and want to act as a partner with one of the products that resonate with you—or if you have an idea for a product—reach out to us!\nMail us",
  },
  {
    title: "Partnership as a Leader / Co-founder",
    desc: "If you believe you're great at either distribution & sales, branding, or tech, reach out to us. Let's connect! We're always looking for builders who can be the next leaders!",
  },
];

const PartnershipWith = () => {
  return (
    <div className="w-[70vw] mx-auto my-40 text-center">
      <div className="heading my-30 text-center"><TextAnimation text="Our Partnership with you"/></div>
      <div className="flex gap-5 mb-15">
        <div className="rounded-lg p-4 h-fit shadow">
          <div className="text-md font-semibold mb-2">{items[0].title}</div>
          <div className="text-gray-400">{items[0].desc}</div>
        </div>
        <div className="rounded-lg p-4 mt-30 h-fit shadow">
          <div className="text-md font-semibold mb-2">{items[1].title}</div>
          <div className="text-gray-400">{items[1].desc}</div>
        </div>
        <div className="rounded-lg p-4 mt-60 h-fit shadow">
          <div className="text-md font-semibold mb-2">{items[2].title}</div>
          <div className="text-gray-400">{items[2].desc}</div>
        </div>
      </div>
      <Button text="Go to Partnership" href="/partnership"/>
    </div>
  );
};

export default PartnershipWith;
