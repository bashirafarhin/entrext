"use client";

import { useEffect, useRef, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal = ({ isOpen, onClose, onConfirm }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Show animation on open
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  // Click outside to close
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
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300);
  };

  if (!isOpen && !isVisible) return null;

  return (
    <div
      className={`fixed backdrop-blur-sm text-white text-center inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        ref={modalRef}
        className={`bg-black rounded-lg shadow-lg p-10 transform transition-all duration-300 ease-in-out ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Apply for?</h2>
        <div className="flex gap-6 mt-4">
          <button
            className="px-2 py-1 button-shadow rounded"
            onClick={onConfirm}
          >
            Partnership
          </button>
          <button
            className="px-2 py-1 button-shadow rounded"
            onClick={handleClose}
          >
            Content Creation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
