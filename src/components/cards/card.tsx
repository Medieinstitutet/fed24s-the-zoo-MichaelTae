import { useContext } from 'react';
import { AnimalContext } from '../../contexts/animalContext';
import { Link } from 'react-router';
import WarningSvg from '../icons/warningSvg';
import { Countdown } from '../countdown/countdown';
import { motion } from 'framer-motion';
export const Card = () => {
  const animalContext = useContext(AnimalContext);
  if (!animalContext) {
    return <p>Loading...</p>;
  }
  if (animalContext.animal.length === 0) {
    return <p>No animals found.</p>;
  }
  const now = new Date();

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
    hidden: {},
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className='card '>
      <motion.ul
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'
        initial='hidden'
        animate='visible'
        variants={listVariants}
      >
        {animalContext.animal.map((animal) => {
          const lastFed = animal.lastFed ? new Date(animal.lastFed) : null;
          const hoursSinceFed = lastFed
            ? (now.getTime() - lastFed.getTime()) / (1000 * 60 * 60)
            : Infinity;
          return (
            <motion.li
              key={animal.id}
              variants={itemVariants}
              className={`border p-4 rounded shadow-md hover:scale-105 transition-transform cursor-pointer theme  ${
                hoursSinceFed >= 3 && hoursSinceFed <= 5
                  ? 'border-yellow-500'
                  : hoursSinceFed > 5
                  ? 'border-red-500'
                  : 'border-green-500'
              }`}
            >
              <Link to={`/animal/${animal.id}`} className='flex flex-col gap-1'>
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
                  loading='lazy'
                  src={animal.imageUrl}
                  alt={animal.name}
                  className={`w-full h-56 object-cover mb-2`}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
                    (e.currentTarget as HTMLImageElement).alt =
                      'Image not available';
                  }}
                />
                <h4>Latinskt namn: {animal.latinName}</h4>
                <p>Född: {animal.yearOfBirth}</p>
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
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};
