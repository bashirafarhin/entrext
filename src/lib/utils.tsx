import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

export const throttle = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout | undefined;
  return function (...args: any[]) {
    if (!timeout) {
      func(...args);
      timeout = setTimeout(() => {
        timeout = undefined;
      }, wait);
    }
  };
};
