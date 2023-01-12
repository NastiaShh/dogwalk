import { UseFormRegister } from "react-hook-form";
import Dog from '../types/Dog'

function DogQuestions({ register }: { register: UseFormRegister<Dog> }): JSX.Element {
  return (
    <>

      <div>
        <input type="radio" id="female" {...register("gender")} />
        <label htmlFor="female">Девочка</label>

        <input type="radio" id="male" {...register("gender")} />
        <label htmlFor="male">Мальчик</label>
      </div>

      <div>
        <input type="radio" id="female" {...register("sterilization")} />
        <label htmlFor="female">female</label>

        <input type="radio" id="male" {...register("sterilization")} />
        <label htmlFor="male">male</label>

        <input type="radio" id="male" {...register("sterilization")} />
        <label htmlFor="male">male</label>
      </div>

      <div>
        <input type="radio" id="female" {...register("dog_friendly")} />
        <label htmlFor="female">female</label>

        <input type="radio" id="male" {...register("dog_friendly")} />
        <label htmlFor="male">male</label>

        <input type="radio" id="male" {...register("dog_friendly")} />
        <label htmlFor="male">male</label>
      </div>

      <div>
        <input type="radio" id="female" {...register("cat_friendly")} />
        <label htmlFor="female">female</label>

        <input type="radio" id="male" {...register("cat_friendly")} />
        <label htmlFor="male">male</label>

        <input type="radio" id="male" {...register("cat_friendly")} />
        <label htmlFor="male">male</label>
      </div>

      <div>
        <input type="radio" id="female" {...register("home")} />
        <label htmlFor="female">female</label>

        <input type="radio" id="male" {...register("home")} />
        <label htmlFor="male">male</label>

        <input type="radio" id="male" {...register("home")} />
        <label htmlFor="male">male</label>
      </div>

      <div>
        <input type="radio" id="female" {...register("vaccination")} />
        <label htmlFor="female">female</label>

        <input type="radio" id="male" {...register("vaccination")} />
        <label htmlFor="male">male</label>

        <input type="radio" id="male" {...register("vaccination")} />
        <label htmlFor="male">male</label>
      </div>
    </>
  )
}

export default DogQuestions
