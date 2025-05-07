declare module 'react-fast-marquee' {
    import * as React from 'react';
  
    export interface MarqueeProps extends React.HTMLAttributes<HTMLElement> {
      gradient?: boolean;
      gradientColor?: [string, string, string];
      gradientWidth?: number | string;
      speed?: number;
      pauseOnHover?: boolean;
      pauseOnClick?: boolean;
      delay?: number;
      loop?: number;
      play?: boolean;
      direction?: 'left' | 'right';
    }
  
    const Marquee: React.FC<MarqueeProps>;
    export default Marquee;
  }
  