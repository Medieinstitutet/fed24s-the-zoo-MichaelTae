import { Outlet } from 'react-router';
import Container from '../components/container/container';
import { Navbar } from '../components/nav/navbar';
import { useFetchAnimals } from '../hooks/useFetchAnimals';
import { AnimatePresence } from 'motion/react';

export const Layout = () => {
  useFetchAnimals();

  return (
    <Container>
      <Navbar />

      <main className='justify-center border-l theme border-t  flex h-screen layout'>
        <AnimatePresence mode='wait'>
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      {/* <footer>
        <p>Footer content goes here.</p>
      </footer> */}
    </Container>
  );
};
