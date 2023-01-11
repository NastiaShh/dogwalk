import { RootState } from "../../store";
import Dog from "./DogsData/types/Dog";

export const selectDog = (state: RootState): Dog[] => state.dogs.dogs
