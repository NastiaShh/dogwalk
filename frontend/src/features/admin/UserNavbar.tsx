import style from './UserNavbar.module.css';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { NavLink } from 'react-router-dom';
import { logout } from '../auth/authSlice';

function UserNavbar(): JSX.Element {
  const dispatch = useAppDispatch();

  const { authChecked, role } = useSelector((state: RootState) => state.auth);

  const handleLogout = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <nav className={style.nav}>
      <NavLink className={style.link} to='/'>На главную</NavLink>
      {authChecked === true && role === 'admin' && (
        <NavLink className={style.link} to='/admin'>Заявки</NavLink>
      )}
      {authChecked === true && role === 'user' && (
        <NavLink className={style.link} to='/profile'>Личный кабинет</NavLink>
      )}
      {authChecked === true && (
        <NavLink className={style.link} to='/api/auth/logout' onClick={handleLogout}>Выйти</NavLink>
      )}
    </nav>
  );
}

export default UserNavbar;
