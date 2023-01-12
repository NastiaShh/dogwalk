import { UseFormRegister } from "react-hook-form";
import Dog from '../types/Dog'
import style from './DogInfo.module.css'

function DogInfo({ register }: { register: UseFormRegister<Dog> }): JSX.Element {
  return (
    <div className={style.container}>
      <div className={style.parameter}>
        <label htmlFor="name">Имя собаки</label>
        <input
          type="text"
          placeholder="Шарик"
          {...register("name")}
        />
      </div>
      <div className={style.parameter}>
        <label htmlFor="breed">Порода</label>
        <input
          type="text"
          placeholder="Сиба-ину"
          {...register('breed')}
        />
      </div>
      <div className={style.parameter}>
        <label htmlFor="age">Возраст</label>
        <div>
          <input
            type="number"
            placeholder="5"
            className={style.ageInput}
            {...register('age')}
          />
          <span className={style.ageSpan}>лет</span>
        </div>
      </div>
      <div className={style.parameter}>
        <label htmlFor="size">Размер</label>
        <select {...register('size')} className={style.sizeInput}>
          <option value="маленькая">Маленькая</option>
          <option value="средняя" selected>Средняя</option>
          <option value="большая">Большая</option>
        </select>
      </div>
    </div>
  )
}

export default DogInfo;
