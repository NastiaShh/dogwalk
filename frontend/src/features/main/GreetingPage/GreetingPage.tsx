import style from './GreetingPage.module.css';
import dog from './images/dog.png';
import Navbar from './Navbar/Navbar';

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
      <Navbar />
      <img src={dog} alt='dog' className={style.dog} />
    </section>
  );
}

export default GreetingPage;
