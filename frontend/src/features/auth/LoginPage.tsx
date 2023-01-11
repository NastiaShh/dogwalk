import React from 'react';
import { useAppDispatch } from '../../store';
// import { useNavigate } from 'react-router-dom';
import { login } from './authSlice';

function LoginPage(): JSX.Element {
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
    <form onSubmit={handleSubmit}>
      <h2>Вход</h2>
      <div>
        <label htmlFor="email-input">
          Email
        </label>
        <input
          type="text"
          id="email-input"
          name="email"
          value={email}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="password-input">
          Пароль
        </label>
        <input
          type="password"
          id="password-input"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">
        Войти
      </button>
    </form>
  );
}

export default LoginPage;
