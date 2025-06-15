import { useContext } from 'react';
import { AnimalContext } from '../../contexts/animalContext';
import { Link } from 'react-router';
import WarningSvg from '../icons/warningSvg';
import { Countdown } from '../countdown/countdown';

export const Card = () => {
  const animalContext = useContext(AnimalContext);
  if (!animalContext) {
    return <p>Loading...</p>;
  }
  if (animalContext.animal.length === 0) {
    return <p>No animals found.</p>;
  }
  const now = new Date();
  return (
    <div className='card'>
      <ul className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 '>
        {animalContext.animal.map((animal) => {
          const lastFed = animal.lastFed ? new Date(animal.lastFed) : null;
          const hoursSinceFed = lastFed
            ? (now.getTime() - lastFed.getTime()) / (1000 * 60 * 60)
            : Infinity;
          return (
            <li
              key={animal.id}
              className={`border p-4 rounded shadow hover:scale-105 transition-transform cursor-pointer theme ${
                hoursSinceFed >= 3 && hoursSinceFed <= 5
                  ? 'border-yellow-500'
                  : hoursSinceFed > 5
                  ? 'border-red-500'
                  : 'border-green-500'
              }`}
            >
              <Link to={`/animal/${animal.id}`}>
                <h3 className='text-2xl'>{animal.name}</h3>
                {animal.isFed && hoursSinceFed < 3 ? (
                  <p className='text-green-500'>Matad</p>
                ) : hoursSinceFed >= 3 && hoursSinceFed <= 5 ? (
                  <div className='flex items-center gap-2'>
                    <WarningSvg className='w-6 h-6' color='#eab308' />
                    <p className='text-yellow-500'>Måste matas snart</p>
                  </div>
                ) : (
                  <div className='flex items-center gap-2'>
                    <WarningSvg className='w-6 h-6' color='#ef4444' />
                    <p className='text-red-500'>Måste matas nu!</p>
                  </div>
                )}
                <img
                  src={animal.imageUrl}
                  alt={animal.name}
                  className={`w-full h-56 object-cover mb-2' ${
                    animal.name == 'Acke' ? 'blur-2xl' : ''
                  }`}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
                    (e.currentTarget as HTMLImageElement).alt =
                      'Image not available';
                  }}
                />
                <h4>{animal.latinName}</h4>
                <p>{animal.yearOfBirth}</p>
                <p>{animal.shortDescription}</p>
                <p>
                  Matad sist:{' '}
                  {animal.lastFed
                    ? new Date(animal.lastFed).toLocaleString()
                    : 'Never'}
                </p>
                {animal.lastFed && (
                  <Countdown fedLast={new Date(animal.lastFed)} />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
