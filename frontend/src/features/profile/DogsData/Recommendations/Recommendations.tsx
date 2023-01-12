import { UseFormRegister } from "react-hook-form";
import Dog from '../types/Dog'
import styles from './../Page/DogPage.module.css';

function Recommendations({ register }: { register: UseFormRegister<Dog> }): JSX.Element {
  return (
    <div>
      <p>Рекомендации по прогулкам/передержке</p>
      <textarea {...register("description")} />
      <button type="submit" className={styles.buttonNext}>
        готово
      </button>
    </div>
  )
}

export default Recommendations
