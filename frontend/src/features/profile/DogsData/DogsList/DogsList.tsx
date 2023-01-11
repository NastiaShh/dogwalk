import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store";
import { createDog, loadDogs } from "../../dogsSlice";
import DogInfo from "../DogInfo/DogInfo"
import DogQuestions from "../DogQuestions/DogQuestions";
import Recommendations from "../Recommendations/Recommendations";
import Dog from '../types/Dog'


function DogsList(): JSX.Element {
  const dispatch = useAppDispatch()

  const { dogs } = useSelector((state: RootState) => state.dogs)

  useEffect(() => {
    dispatch(loadDogs())
  }, [dispatch])

  return (
    <>
      {
        dogs.map((dog) => (
          <div>
            {dog.name}
          </div>
        ))
      }
    </>
  )
}

export default DogsList
