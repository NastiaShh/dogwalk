import { UseFormRegister } from "react-hook-form";
import Dog from '../types/Dog'


function DogInfo({ register }: { register: UseFormRegister<Dog> }): JSX.Element {
  return (
    <div>
      <p>Имя собаки</p>
      <input
        type="text"
        {...register("name")}
      />
      <p>Порода</p>
      <input
        type="text"
        {...register('breed')}
      />
      <p>Возраст</p>
      <input
        type="number"
        {...register('age')}
      />
      <p>Размер</p>
      <select {...register('size')}>
        <option value="маленькая">Маленькая</option>
        <option value="средняя">Средняя</option>
        <option value="большая">Большая</option>
      </select>
      <button type="button">
        далее
      </button>
    </div>
  )
}

export default DogInfo
