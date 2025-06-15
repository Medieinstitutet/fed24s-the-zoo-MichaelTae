import type { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className='grid grid-cols-[20%_80%] p-2 h-screen gap-1 theme overflow-hidden'>
        {children}
      </div>
    </>
  );
};

export default Container;
