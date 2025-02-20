/// <reference types="next" />
/// <reference types="next/types/global" />

// Add support for importing static files
declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

// Add support for web APIs
interface Window {
  OffscreenCanvas: typeof OffscreenCanvas;
}

// Add support for stats.js
declare module 'stats.js' {
  class Stats {
    REVISION: number;
    dom: HTMLDivElement;
    constructor();
    showPanel(value: number): void;
    begin(): void;
    end(): void;
    update(): void;
  }
  export default Stats;
} 