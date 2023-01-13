import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../../store";
import { createDog, loadDogs } from "../../dogsSlice";
import FormStepper from "../../Page/components/FormStepper";
import DogInfo from "../DogInfo/DogInfo"
import DogQuestions from "../DogQuestions/DogQuestions";
import Recommendations from "../Recommendations/Recommendations";
import Dog from '../types/Dog'


function DogPage({activeStep, selectedDogName}: {activeStep: number, selectedDogName: string}): JSX.Element {
  const dispatch = useAppDispatch()
  const { register, handleSubmit, setValue, reset } = useForm<Dog>();

  const onSubmit = (data: Dog): void => {
    dispatch(createDog(data))
    reset()
  }

  const { dogs } = useSelector((state: RootState) => state.dogs)

  useEffect(() => {
    dispatch(loadDogs())
  }, [dispatch])

  console.log(dogs)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <DogInfo register={register} />
        <DogQuestions register={register} />
        <Recommendations register={register} /> */}
        {activeStep === 0 && (
          <DogInfo register={register} selectedDogName={selectedDogName}/>
        )}
        {activeStep === 1 && (
          <DogQuestions register={register} selectedDogName={selectedDogName}/>
        )}
        {activeStep === 2 && (
          <Recommendations register={register} selectedDogName={selectedDogName}/>
        )}
      </form>
    </>
  )
}



export default DogPage
