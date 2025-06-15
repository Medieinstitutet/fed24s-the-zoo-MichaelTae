import { useContext } from 'react';
import { AnimalContext } from '../contexts/animalContext';
import { AnimalActionTypes } from '../reducers/animalReducer';

export const useFeedAnimal = () => {
  const { dispatch } = useContext(AnimalContext);

  const feedAnimal = (animalId: number) => {
    dispatch({
      type: AnimalActionTypes.FEED,
      payload: animalId,
    });
  };

  return feedAnimal;
};
