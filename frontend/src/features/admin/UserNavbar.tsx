import style from './UserNavbar.module.css';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../auth/authSlice';

function UserNavbar(): JSX.Element {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { authChecked } = useSelector((state: RootState) => state.auth);

  const handleLogout = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatch(logout());
    navigate('/')
  };

  return (
    <nav className={style.nav}>
      <div>
      <NavLink className={style.link} to='/'>На главную</NavLink>
      </div>
      {authChecked === true && (
        <NavLink className={style.link} to='/api/auth/logout' onClick={handleLogout}>Выйти</NavLink>
      )}
    </nav>
  );
}

export default UserNavbar;
