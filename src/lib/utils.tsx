import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const throttle = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    if (!timeout) {
      func(...args);
      timeout = setTimeout(() => {
        timeout = undefined;
      }, wait);
    }
  };
};
