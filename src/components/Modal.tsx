import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import Button from "./common/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal = ({ isOpen, onClose, onConfirm }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClose]);

  if (!isOpen && !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center h-[100vh] justify-center backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        ref={modalRef}
        className={`bg-black rounded-lg shadow-lg p-10 transform transition-all duration-300 ease-in-out ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <h2 className="text-xl font-bold mb-6  text-center">Apply for?</h2>
        <div className="flex gap-8">
          <div className=" flex flex-col items-center gap-3">
            <Image src="/logo.png" width={60} height={60} alt="partnership" />
            <div onClick={onConfirm}>
              <Button text="Partnership" />
            </div>
          </div>
          <div className=" flex flex-col items-center gap-3">
            <Image
              src="/logo.png"
              width={60}
              height={60}
              alt="content creation"
            />
            <div onClick={onConfirm}>
              <Button text="Content Creation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
