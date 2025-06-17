import { useParams } from 'react-router';
import { useContext } from 'react';
import { AnimalContext } from '../contexts/animalContext';
import { Button } from '../components/buttons/button';
import { useFeedAnimal } from '../hooks/useFeedAnimal';
import { PageWrapper } from '../components/motion/pageWrapper';
import { Countdown } from '../components/countdown/countdown';

export const AnimalDetail = () => {
  const { id } = useParams();
  const { animal } = useContext(AnimalContext);
  const feedAnimal = useFeedAnimal();
  const selectedAnimal = animal.find((a) => a.id === Number(id));

  if (!selectedAnimal) return <div>Animal not found</div>;
  const lastFed = selectedAnimal.lastFed
    ? new Date(selectedAnimal.lastFed)
    : null;
  const now = new Date();
  const canFeed =
    !lastFed || now.getTime() - lastFed.getTime() > 4 * 60 * 60 * 1000;
  return (
    <PageWrapper>
      <div className='theme flex flex-col items-center p-4 gap-2 overflow-auto  '>
        <h2 className='text-4xl font-bold '>{selectedAnimal.name}</h2>
        <img
          src={selectedAnimal.imageUrl}
          alt={selectedAnimal.name}
          className='w-xl h-xl  border rounded shadow-lg object-cover mb-4'
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
            (e.currentTarget as HTMLImageElement).alt = 'Image not available';
          }}
        />
        <Button
          className={`border z-10 ${
            canFeed ? 'text-green-500' : 'bg-gray-500 line-through'
          }`}
          onClick={() => feedAnimal(selectedAnimal.id)}
          disabled={!canFeed}
        >
          {canFeed ? 'Mata' : 'Redan matad'}
        </Button>
        <Countdown fedLast={selectedAnimal.lastFed} />
        <div className='flex w-1/2 gap-4 justify-center'>
          <div className='flex flex-col  p-1'>
            <p>Latinskt Namn: {selectedAnimal.latinName}</p>
            <p>Född: {selectedAnimal.yearOfBirth}</p>
            <p>
              Sist matad:{' '}
              {selectedAnimal.lastFed
                ? new Date(selectedAnimal.lastFed).toLocaleString()
                : 'Never'}
            </p>
          </div>
          <div className='flex flex-col   p-1'>
            <p>Status: {selectedAnimal.isFed ? 'Fed' : 'Not Fed'}</p>
            <p>Mediciner: {selectedAnimal.medicine}</p>
          </div>
        </div>
        <div className='w-1/2 justify-center'>
          <p>{selectedAnimal.longDescription}</p>
        </div>
      </div>
    </PageWrapper>
  );
};
