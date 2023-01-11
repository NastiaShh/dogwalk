import React from 'react';
import { useAppDispatch } from '../../../store';
// import { useNavigate } from 'react-router-dom';
import { login } from '../authSlice';
import style from './LoginForm.module.css';

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    // делаем dispatch, чтобы положить юзера в стэйт
    dispatch(login({ email, password }));
    // navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <input
        type="text"
        id="email-input"
        name="email"
        value={email}
        onChange={handleNameChange}
        placeholder="Email"
        className={style.input}
      />
      <input
        type="password"
        id="password-input"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Пароль"
        className={style.input}
      />
      <button type="submit" className={style.button}>
        войти
      </button>
    </form>
  );
}

export default LoginForm;
