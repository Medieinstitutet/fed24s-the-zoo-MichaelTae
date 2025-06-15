import { useEffect } from 'react';
import { useContext } from 'react';
import { AnimalContext } from '../contexts/animalContext';
import { AnimalActionTypes } from '../reducers/animalReducer';
import type { IAnimal } from '../models/Ianimal';

const API_URL = 'https://animals.azurewebsites.net/api/animals';

function updateFedStatus(animals: IAnimal[]): IAnimal[] {
  const now = new Date();
  return animals.map((a) => {
    const lastFed = a.lastFed ? new Date(a.lastFed) : null;
    const isFed =
      lastFed !== null &&
      now.getTime() - lastFed.getTime() < 4 * 60 * 60 * 1000;
    return { ...a, isFed: Boolean(isFed) };
  });
}
export const useFetchAnimals = () => {
  const { dispatch } = useContext(AnimalContext);

  useEffect(() => {
    const loadAnimals = async () => {
      const localAnimals = localStorage.getItem('animals');
      if (localAnimals) {
        let animals: IAnimal[] = JSON.parse(localAnimals);
        animals = updateFedStatus(animals);
        localStorage.setItem('animals', JSON.stringify(animals));
        dispatch({ type: AnimalActionTypes.GET, payload: animals });
      } else {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) throw new Error('Failed to fetch animals');
          let data: IAnimal[] = await response.json();
          data = updateFedStatus(data);
          localStorage.setItem('animals', JSON.stringify(data));
          dispatch({ type: AnimalActionTypes.GET, payload: data });
        } catch (error) {
          console.error(error);
        }
      }
    };

    loadAnimals();
  }, [dispatch]);
};
