import { createContext, type Dispatch } from 'react';
import type { IAnimal } from '../models/Ianimal';
import type { AnimalAction } from '../reducers/animalReducer';

interface IAnimalContext {
  animal: IAnimal[];
  dispatch: Dispatch<AnimalAction>;
}

export const AnimalContext = createContext<IAnimalContext>({
  animal: [],
  dispatch: () => {},
});
