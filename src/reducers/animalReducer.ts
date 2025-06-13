import type { IAnimal } from '../models/Ianimal';

export enum AnimalActionTypes {
  FEED,
  GET,
}

export type AnimalAction =
  | { type: AnimalActionTypes.FEED; payload: string }
  | { type: AnimalActionTypes.GET; payload: IAnimal[] };

export const AnimalReducer = (
  animal: IAnimal[],
  action: AnimalAction
): IAnimal[] => {
  switch (action.type) {
    case AnimalActionTypes.FEED:
      return animal.map((a) => {
        if (a.id === parseInt(action.payload)) {
          return {
            ...a,
            isFed: true,
            lastFed: new Date(),
          };
        }
        return a;
      });
    case AnimalActionTypes.GET:
      return action.payload;
    default:
      return animal;
  }
};
