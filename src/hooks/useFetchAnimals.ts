import { useEffect } from 'react';
import { useContext } from 'react';
import { AnimalContext } from '../contexts/animalContext';
import { AnimalActionTypes } from '../reducers/animalReducer';
import type { IAnimal } from '../models/Ianimal';

const API_URL = 'https://animals.azurewebsites.net/api/animals';

export const useFetchAnimals = () => {
  const { dispatch } = useContext(AnimalContext);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch animals');
        const data: IAnimal[] = await response.json();
        dispatch({ type: AnimalActionTypes.GET, payload: data });
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnimals();
  }, [dispatch]);
};
