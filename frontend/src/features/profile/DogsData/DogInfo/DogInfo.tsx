import { useForm } from "react-hook-form";
import Dog from '../types/Dog'


function DogInfo(): JSX.Element {
  const { register } = useForm<Dog>();

  return (
    <form >
      <input
        type="text"
        {...register("name")}
      />
      <input
        type="text"
        {...register('breed')}
      />
      <input
        type="text"
        {...register('age')}
      />
      <input
        type="text"
        {...register('size')}
      />
    </form>
  )
}

export default DogInfo
