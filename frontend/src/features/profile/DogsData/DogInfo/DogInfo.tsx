import { UseFormRegister } from "react-hook-form";
import Dog from '../types/Dog'
import style from './DogInfo.module.css'
import { useSelector } from 'react-redux';
import { selectDog } from '../../selectors';

function DogInfo({ register, selectedDogName }: { register: UseFormRegister<Dog>, selectedDogName: string }): JSX.Element {
  const dogs = useSelector(selectDog);
  const dog = dogs.filter((dog) => dog.name === selectedDogName)[0];

  return (
    <div className={style.container}>x
      <div className={style.parameter}>
        <label htmlFor="name">Имя собаки</label>
        <input
          type="text"
          placeholder="Шарик"
          {...register("name")}
          defaultValue={dog ? dog.name : ''}
        />
      </div>
      <div className={style.parameter}>
        <label htmlFor="breed">Порода</label>
        <input
          type="text"
          placeholder="Сиба-ину"
          {...register('breed')}
          defaultValue={dog ? dog.breed : ''}
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
            defaultValue={dog ? dog.age : ''}
          />
          <span className={style.ageSpan}>лет</span>
        </div>
      </div>
      <div className={style.parameter}>
        <label htmlFor="size">Размер</label>
        <select {...register('size')} className={style.sizeInput} defaultValue={dog ? dog.size : ''}>
          <option value="маленькая">Маленькая</option>
          <option value="средняя" selected>Средняя</option>
          <option value="большая">Большая</option>
        </select>
      </div>
    </div>
  )
}

export default DogInfo;
