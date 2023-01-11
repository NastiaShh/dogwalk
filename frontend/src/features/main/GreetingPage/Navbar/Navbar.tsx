import style from '../GreetingPage.module.css';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../store';
import { logout } from '../../../auth/authSlice';
import { NavLink } from 'react-router-dom';

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
        <NavLink className={style.link} to='/admin'>Заявки</NavLink>
      )}
      {authChecked === true && role === 'user' && (
        <NavLink className={style.link} to='/profile'>Личный кабинет</NavLink>
      )}
      {authChecked === true && (
        <NavLink className={style.link} to='/api/auth/logout' onClick={handleLogout}>Выйти</NavLink>
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
