import { UseFormRegister } from "react-hook-form";
import Dog from '../types/Dog';
import style from './DogQuestions.module.css';
import { useSelector } from 'react-redux';
import { selectDog } from '../../selectors';

function DogQuestions({ register, selectedDogName }: { register: UseFormRegister<Dog>, selectedDogName: string }): JSX.Element {
  const dogs = useSelector(selectDog);
  const dog = dogs.filter((dog) => dog.name === selectedDogName)[0];
  
  return (
    <div className={style.container}>
      <div className={style.parameterContainer}>
        <p>Пол</p>
        {/* <input type="radio" id="female" {...register("gender")} className={style.inputContainer} /> */}
        <input type="text" id="gender" {...register("gender")} className={style.inputContainer} placeholder="мальчик / девочка" defaultValue={dog ? dog.gender : ''} />
        {/* <label htmlFor="gender" className={style.label}>Девочка</label>

        <input type="radio" id="male" {...register("gender")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Мальчик</label> */}
      </div>

      <div className={style.parameterContainer}>
        <p>Ваша собака стерилизована?</p>
        <input type="text" id="female" {...register("sterilization")} className={style.inputContainer}  placeholder="да / нет / не знаю точно" defaultValue={dog ? dog.sterilization : ''} />
        {/* <label htmlFor="female" className={style.label}>Да</label>

        <input type="radio" id="male" {...register("sterilization")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Нет</label>

        <input type="radio" id="male" {...register("sterilization")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Не знаю точно</label> */}
      </div>

      <div className={style.parameterContainer}>
        <p>Ваша собака дружелюбна к другм собакам?</p>
        <input type="text" id="female" {...register("dog_friendly")} className={style.inputContainer} placeholder="да / нет / не знаю точно" defaultValue={dog ? dog.dog_friendly : ''} />
        {/* <label htmlFor="female" className={style.label}>Да</label>

        <input type="radio" id="male" {...register("dog_friendly")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Нет</label>

        <input type="radio" id="male" {...register("dog_friendly")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Не знаю точно</label> */}
      </div>

      <div className={style.parameterContainer}>
        <p>Ваша собака дружелюбна к кошкам?</p>
        <input type="text" id="female" {...register("cat_friendly")} className={style.inputContainer} placeholder="да / нет / не знаю точно" defaultValue={dog ? dog.cat_friendly : ''} />
        {/* <label htmlFor="female" className={style.label}>Да</label>

        <input type="radio" id="male" {...register("cat_friendly")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Нет</label>

        <input type="radio" id="male" {...register("cat_friendly")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Не знаю точно</label> */}
      </div>

      <div className={style.parameterContainer}>
        <p>Остается ли собака дома одна?</p>
        <input type="text" id="female" {...register("home")} className={style.inputContainer} placeholder="да, пока я на работе" defaultValue={dog ? dog.home : ''} />
        {/* <label htmlFor="female" className={style.label}>Да, пока я на работе</label>

        <input type="radio" id="male" {...register("home")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Да, на пару часов</label>

        <input type="radio" id="male" {...register("home")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>С собакой всегда кто&#8209;то&nbsp;дома</label> */}
      </div>

      <div className={style.parameterContainer}>
        <p>Собака вакцинирована?</p>
        <input type="text" id="female" {...register("vaccination")} className={style.inputContainer} placeholder="да / нет / не знаю точно" defaultValue={dog ? dog.vaccination : ''} />
        {/* <label htmlFor="female" className={style.label}>Да</label>

        <input type="radio" id="male" {...register("vaccination")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Нет</label>

        <input type="radio" id="male" {...register("vaccination")} className={style.inputContainer} />
        <label htmlFor="male" className={style.label}>Не знаю точно</label> */}
      </div>
    </div>
  )
}

export default DogQuestions;
