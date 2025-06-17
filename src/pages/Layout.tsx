import { Outlet } from 'react-router';
import Container from '../components/container/container';
import { Navbar } from '../components/nav/navbar';
import { useFetchAnimals } from '../hooks/useFetchAnimals';
import { AnimatePresence } from 'motion/react';
import { useMediaQueryContext } from '../contexts/MediaQueryContext';
import { MobileNav } from '../components/nav/mobileNav';

export const Layout = () => {
  useFetchAnimals();
  const { isMobile, isTablet, loading } = useMediaQueryContext();

  if (loading) return null;

  return (
    <Container>
      {!isMobile && !isTablet ? <Navbar /> : <MobileNav />}
      <main className='justify-center border-l theme border-t  flex h-screen layout '>
        <AnimatePresence mode='wait'>
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
    </Container>
  );
};
