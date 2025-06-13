import { useContext } from 'react';
import { AnimalContext } from '../../contexts/animalContext';
import { Link } from 'react-router';

export const Card = () => {
  const animalContext = useContext(AnimalContext);

  return (
    <div className='card  '>
      {animalContext.animal.length > 0 ? (
        <ul className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 '>
          {animalContext.animal.map((animal) => (
            <li
              key={animal.id}
              className='border p-4 rounded shadow hover:scale-105 transition-transform cursor-pointer theme '
            >
              <Link to={`/animal/${animal.id}`}>
                <h3>{animal.name}</h3>
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
                <p>{animal.isFed ? 'fed' : 'not fed'}</p>
                <p>{animal.shortDescription}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No animals found.</p>
      )}
    </div>
  );
};
