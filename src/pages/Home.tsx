import { Card } from '../components/cards/card';
import { PageWrapper } from '../components/motion/pageWrapper';

export const Home = () => {
  return (
    <PageWrapper>
      <div className='overflow-scroll '>
        <h1 className='text-4xl text-center p-2'>Alla djuren</h1>
        <Card />
      </div>
    </PageWrapper>
  );
};
