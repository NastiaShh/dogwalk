import { UseFormRegister } from "react-hook-form";
import Dog from '../types/Dog'
import style from './Recommendations.module.css';

function Recommendations({ register }: { register: UseFormRegister<Dog> }): JSX.Element {
  return (
    <div className={style.container}>
      <p className={style.title}>Рекомендации по прогулкам/передержке</p>
      <textarea
        {...register("description")}
        className={style.description}
        placeholder="Напишите сюда сведения о собаке (индивидуальные особенности,
          режим питания, состояние здоровья и другие рекомендации)"
      />
      <button type="submit" className={style.buttonNext}>
        готово
      </button>
    </div>
  );
}

export default Recommendations
