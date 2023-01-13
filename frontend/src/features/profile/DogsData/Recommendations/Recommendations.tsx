import { UseFormRegister } from "react-hook-form";
import Dog from '../types/Dog'
import style from './Recommendations.module.css';
import { useSelector } from 'react-redux';
import { selectDog } from '../../selectors';
import { useState } from "react";
import dogPicture from './img/dog1.jpg';
import dogPicture1 from './img/dog2.jpg';


function Recommendations({ register, selectedDogName }: { register: UseFormRegister<Dog>, selectedDogName: string }): JSX.Element {
  const [click, setClick] = useState(false);
  const dogs = useSelector(selectDog);
  const dog = dogs.filter((dog) => dog.name === selectedDogName)[0];

  return (
    <div className={style.container}>
        <div style={{display: click === true ? 'none' : 'flex', flexDirection: 'column'}}>
        <p className={style.title}>Рекомендации по прогулкам/передержке</p>
        <textarea
          {...register("description")}
          className={style.description}
          placeholder="Напишите сюда сведения о собаке (индивидуальные особенности,
            режим питания, состояние здоровья и другие рекомендации)"
          defaultValue={dog ? dog.description : ''}
        />
        <button type="submit" className={style.buttonNext} onClick={() => setClick((p) => (!p))}>
          готово
        </button>
        </div>

      {/* <>
      <p className={style.title}>Рекомендации по прогулкам/передержке</p>
      <textarea
        {...register("description")}
        className={style.description}
        placeholder="Напишите сюда сведения о собаке (индивидуальные особенности,
          режим питания, состояние здоровья и другие рекомендации)"
        defaultValue={dog ? dog.description : ''}
      />
      <button type="submit" className={style.buttonNext} onClick={() => setClick((p) => (!p))}>
        готово
      </button>
      </> */}
      
      {click === true && (
        <>
        <p className={style.bottom_text}>Ваш питомец успешно сохранен!</p>
        <img className={style.dogPicture} src={dogPicture1} alt='cute dog' />
        </>
      )}
    </div>
  );
}

export default Recommendations
