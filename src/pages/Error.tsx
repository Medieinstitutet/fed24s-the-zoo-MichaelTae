import { Button } from '../components/buttons/button';
import { useNavigate } from 'react-router';

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-red-100 theme'>
      <h1 className='text-6xl font-bold text-red-600'>404</h1>
      <h2 className='text-3xl font-semibold text-red-500'>Page Not Found</h2>
      <p className='mt-4 text-lg '>
        Something went wrong. Please try again later.
      </p>
      <Button className='mt-2' onClick={() => navigate(-1)}>
        Go back{' '}
      </Button>
    </div>
  );
};
