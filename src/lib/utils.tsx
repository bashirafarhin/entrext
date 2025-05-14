import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to merge class names
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

// Throttle function with proper type annotations
export const throttle = <T extends (...args: any[]) => void>(func: T, wait: number) => {
  let timeout: NodeJS.Timeout | undefined;

  return function (...args: Parameters<T>) {
    if (!timeout) {
      func(...args);
      timeout = setTimeout(() => {
        timeout = undefined;
      }, wait);
    }
  };
};
