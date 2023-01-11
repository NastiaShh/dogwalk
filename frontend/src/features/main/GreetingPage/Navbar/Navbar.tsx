import style from '../GreetingPage.module.css';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../store';
import { logout } from '../../../auth/authSlice';

function Navbar(): JSX.Element {
  const dispatch = useAppDispatch();

  const { authChecked, role } = useSelector((state: RootState) => state.auth);

  const handleLogout = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <nav className={style.nav}>
      {authChecked === true && role === 'admin' && (
        <a href="/" className={style.link}>Заявки</a>
      )}
      {authChecked === true && role === 'user' && (
        <a href="/" className={style.link}>Личный кабинет</a>
      )}
      {authChecked === true && (
        <a href="/api/auth/logout" className={style.link} onClick={handleLogout}>Выйти</a>
      )}
      {authChecked === false && (
        <>
          <a href="#services" className={style.link}>Услуги</a>
          <a href="#cost" className={style.link}>Стоимость</a>
          <a href="#questions" className={style.link}>Вопросы</a>
          <a href="#reviews" className={style.link}>Отзывы</a>
        </>
      )}
    </nav>
  );
}

export default Navbar;
