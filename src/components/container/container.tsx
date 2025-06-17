import type { ReactNode } from 'react';
import { useMediaQueryContext } from '../../contexts/MediaQueryContext';

const Container = ({ children }: { children: ReactNode }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQueryContext();
  return (
    <>
      <div
        className={`grid ${
          isDesktop ? 'grid-cols-[20%_80%]' : 'grid-cols-1'
        } p-2 h-screen gap-1 theme overflow-hidden`}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
