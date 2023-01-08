import style from './GreetingPage.module.css';
import dog from './images/dog.png';
import { TextField } from '@mui/material';

function GreetingPage(): JSX.Element {
  return (
    <section className={style.container}>
      <div className={style.greeting}>
        <h4 className={style.logo}>dogwalk</h4>
        <h1 className={style.title}><span className={style.span}>Безопасный</span> выгул и&nbsp;передержка собак в&nbsp;Санкт&#8209;Петербурге</h1>
        <form className={style.form}>
          <a href='#form' className={style.button}>попробовать</a>
        </form>
      </div>
      <nav className={style.nav}>
        <a href="#services" className={style.link}>Услуги</a>
        <a href="#prices" className={style.link}>Стоимость</a>
        <a href="#questions" className={style.link}>Вопросы</a>
        <a href="#reviews" className={style.link}>Отзывы</a>
      </nav>
      <img src={dog} alt='dog' className={style.dog} />
    </section>
  );
}

export default GreetingPage;
