export interface IAnimal {
  id: number;
  name: string;
  latinName: string;
  yearOfBirth: number;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  medicine: string;
  isFed: boolean;
  lastFed: Date;
}
export interface IAnimalResponse {
  animals: IAnimal[];
  total: number;
  page: number;
  pageSize: number;
}
