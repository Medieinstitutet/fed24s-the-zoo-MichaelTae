import { useParams } from 'react-router';
import { useContext } from 'react';
import { AnimalContext } from '../contexts/animalContext';

export const AnimalDetail = () => {
  const { id } = useParams();
  const { animal } = useContext(AnimalContext);
  const selectedAnimal = animal.find((a) => a.id === Number(id));

  if (!selectedAnimal) return <div>Animal not found</div>;

  return (
    <div>
      <h2>{selectedAnimal.name}</h2>
      <img src={selectedAnimal.imageUrl} alt={selectedAnimal.name} />
      <p>{selectedAnimal.longDescription}</p>
    </div>
  );
};
