import { UseFormRegister } from "react-hook-form";
import Dog from '../types/Dog'
import style from './Recommendations.module.css';
import styles from './../Page/DogPage.module.css';

function Recommendations({ register }: { register: UseFormRegister<Dog> }): JSX.Element {
  return (
    <div>
      <p className={style.title}>Рекомендации по прогулкам/передержке</p>
      <textarea
        {...register("description")}
        className={style.description}
        placeholder="Напишите сюда сведения о собаке (индивидуальные особенности,
          режим питания, состояние здоровья и другие рекомендации)"
      />
      <button type="submit" className={styles.buttonNext}>
        готово
      </button>
    </div>
  );
}

export default Recommendations
