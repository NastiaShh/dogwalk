import style from './AboutPage.module.css';
import heart from './images/heart.svg';
import bone from './images/bone.svg';
import boneTwo from './images/boneTwo.svg';

function AboutPage(): JSX.Element {
  return (
    <section className={style.container}>
      <h2 className={style.title}>Dogwalk готов прийти к вам на помощь в&nbsp;любое время</h2>
      <img src={bone} alt='bone' className={style.bone} />
      <img src={boneTwo} alt='bone' className={style.boneTwo} />
      <div className={style.about}>
        <div className={style.item}>
          <img src={heart} alt='heart' className={style.heart} />
          <p className={style.text}>Погуляем с вашим питомцем!</p>
        </div>
        <div className={style.item}>
          <img src={heart} alt='heart' className={style.heart} />
          <p className={style.text}>Сводим собаку за вас 
          к ветеринару или на стрижку!</p>
        </div>
        <div className={style.item}>
          <img src={heart} alt='heart' className={style.heart} />
          <p className={style.text}>Оказываем услуги по передержке. 
          Наши проверенные догситтеры возьмут питомца к себе домой.</p>
        </div>
        <div className={style.item}>
          <img src={heart} alt='heart' className={style.heart} />
          <p className={style.text}>Дневная няня для собак 
          побудет с вашим любимцем дома.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
