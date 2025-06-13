import { Card } from '../components/cards/card';

export const Home = () => {
  return (
    <div className='overflow-scroll'>
      <h1 className='text-3xl'>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Card />
    </div>
  );
};
