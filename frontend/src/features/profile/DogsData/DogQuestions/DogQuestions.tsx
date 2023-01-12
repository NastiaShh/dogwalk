import { UseFormRegister } from "react-hook-form";
import Dog from '../types/Dog';
import style from './DogQuestions.module.css';

function DogQuestions({ register }: { register: UseFormRegister<Dog> }): JSX.Element {
  return (
    <div className={style.container}>
      <p className={style.parameterTitle}>Пол</p>
      <div className={style.parameterContainer}>
        <input type="radio" id="female" {...register("gender")} className={style.inputContainer} />
        <label htmlFor="female" className={style.label}>Девочка</label>

        <input type="radio" id="male" {...register("gender")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Мальчик</label>
      </div>

      <p className={style.parameterTitle}>Ваша собака стерилизована?</p>
      <div className={style.parameterContainer}>
        <input type="radio" id="female" {...register("sterilization")} className={style.inputContainer} />
        <label htmlFor="female" className={style.label}>Да</label>

        <input type="radio" id="male" {...register("sterilization")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Нет</label>

        <input type="radio" id="male" {...register("sterilization")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Не знаю точно</label>
      </div>

      <p className={style.parameterTitle}>Ваша собака дружелюбна к другм собакам?</p>
      <div className={style.parameterContainer}>
        <input type="radio" id="female" {...register("dog_friendly")} className={style.inputContainer} />
        <label htmlFor="female" className={style.label}>Да</label>

        <input type="radio" id="male" {...register("dog_friendly")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Нет</label>

        <input type="radio" id="male" {...register("dog_friendly")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Не знаю точно</label>
      </div>

      <p className={style.parameterTitle}>Ваша собака дружелюбна к кошкам?</p>
      <div className={style.parameterContainer}>
        <input type="radio" id="female" {...register("cat_friendly")} className={style.inputContainer} />
        <label htmlFor="female" className={style.label}>Да</label>

        <input type="radio" id="male" {...register("cat_friendly")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Нет</label>

        <input type="radio" id="male" {...register("cat_friendly")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Не знаю точно</label>
      </div>

      <p className={style.parameterTitle}>Остается ли собака дома одна?</p>
      <div className={style.parameterContainer}>
        <input type="radio" id="female" {...register("home")} className={style.inputContainer} />
        <label htmlFor="female" className={style.label}>Да, пока я на работе</label>

        <input type="radio" id="male" {...register("home")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Да, на пару часов</label>

        <input type="radio" id="male" {...register("home")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>С собакой всегда кто-то дома</label>
      </div>

      <p className={style.parameterTitle}>Собака вакцинирована?</p>
      <div className={style.parameterContainer}>
        <input type="radio" id="female" {...register("vaccination")} className={style.inputContainer} />
        <label htmlFor="female" className={style.label}>Да</label>

        <input type="radio" id="male" {...register("vaccination")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Нет</label>

        <input type="radio" id="male" {...register("vaccination")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Не знаю точно</label>
      </div>
    </div>
  )
}

export default DogQuestions;
