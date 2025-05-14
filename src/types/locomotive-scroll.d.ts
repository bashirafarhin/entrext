declare module 'locomotive-scroll' {
  export default class LocomotiveScroll {
    constructor(options?: any);
    update(): void;
    destroy(): void;
    scrollTo(target: HTMLElement | string | number, options?: any): void;
    start(): void;
    stop(): void;
    on(event: string, callback: () => void): void;
    off(event: string, callback: () => void): void;
  }
}
