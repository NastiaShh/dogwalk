import { UseFormRegister } from "react-hook-form";
import Dog from '../types/Dog'
import style from './Recommendations.module.css';
import { useSelector } from 'react-redux';
import { selectDog } from '../../selectors';

function Recommendations({ register, selectedDogName }: { register: UseFormRegister<Dog>, selectedDogName: string }): JSX.Element {
  const dogs = useSelector(selectDog);
  const dog = dogs.filter((dog) => dog.name === selectedDogName)[0];
  
  return (
    <div className={style.container}>
      <p className={style.title}>Рекомендации по прогулкам/передержке</p>
      <textarea
        {...register("description")}
        className={style.description}
        placeholder="Напишите сюда сведения о собаке (индивидуальные особенности,
          режим питания, состояние здоровья и другие рекомендации)"
        defaultValue={dog ? dog.description : ''}
      />
      <button type="submit" className={style.buttonNext}>
        готово
      </button>
    </div>
  );
}

export default Recommendations
