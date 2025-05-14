"use client";
import { useState } from "react";
import Modal from "./Modal";
import { Handshake, Users, Info } from "lucide-react";
import AnimatedDock from "@/components/animata/container/animated-dock";
import Button from "./common/Button";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleConfirm = () => {
    alert("You clicked Yes");
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="sticky flex items-center justify-between mt-5 top-0 right-0 z-50 bg-transparent backdrop-blur-md w-[70vw] mx-auto">
        <div>
          <img src="/logo.png" alt="Logo" width={50} height={50} />
        </div>


        {/* middle bar */}
        <div className="flex justify-center items-center">
          <AnimatedDock
            items={[
              {
                href: "/partnership",
                icon: <Handshake />,
                title: "Partnerships",
              },
              {
                href: "/culture",
                icon: <Users />,
                title: "Culture",
              },
              {
                href: "/aboutus",
                icon: <Info />,
                title: "About us",
              },
            ]}
          />
        </div>

        {/* apply button */}
        <div onClick={() => setIsModalOpen(true)}>
          <Button text="Apply"/>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default Header;
