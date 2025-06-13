import { Outlet } from 'react-router';
import Container from '../components/container/container';
import { Navbar } from '../components/nav/navbar';
import { useFetchAnimals } from '../hooks/useFetchAnimals';

export const Layout = () => {
  useFetchAnimals();

  return (
    <Container>
      <Navbar />

      <main className='justify-center border flex h-screen '>
        <Outlet />
      </main>
      {/* <footer>
        <p>Footer content goes here.</p>
      </footer> */}
    </Container>
  );
};
