import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store";
import { createDog, loadDogs } from "../../dogsSlice";
import DogInfo from "../DogInfo/DogInfo"
import DogQuestions from "../DogQuestions/DogQuestions";
import Recommendations from "../Recommendations/Recommendations";
import Dog from '../types/Dog'


function DogPage(): JSX.Element {
  const dispatch = useAppDispatch()
  const { register, handleSubmit, setValue } = useForm<Dog>();

  const onSubmit = (data: Dog): void => {
    dispatch(createDog(data))
  }

  const { dogs } = useSelector((state: RootState) => state.dogs)

  useEffect(() => {
    dispatch(loadDogs())
  }, [dispatch])

  console.log(dogs)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DogInfo register={register} />
        <DogQuestions register={register} />
        <Recommendations register={register} />
      </form>
    </>
  )
}



export default DogPage
