import style from '../GreetingPage.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

function Navbar(): JSX.Element {
  const { authChecked, role } = useSelector((state: RootState) => state.auth)
  return (
    <nav className={style.nav}>
      {authChecked === true && role === 'admin' ? (
        <a href="/" className={style.link}>Заявки</a>
      ) : (
        <>
          <a href="#services" className={style.link}>Услуги</a>
          <a href="#prices" className={style.link}>Стоимость</a>
          <a href="#questions" className={style.link}>Вопросы</a>
          <a href="#reviews" className={style.link}>Отзывы</a>
        </>
      )}
      {authChecked === true && role === 'user' && (
        <a href="/" className={style.link}>Личный кабинет</a>
      )}
      {authChecked === true && (
        <a href="/" className={style.link}>Выйти</a>
      )}
    </nav>
  );
}

export default Navbar;
