import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import * as api from './api';
// import { loginSuccess } from './actionsCreators';

function Login(): JSX.Element {
  // const dispatch = useDispatch();
  // понадобится для редиректа пользователя на главную после успешного логина
  // const navigate = useNavigate();

  // переменные состояния name и password связанные с полями формы
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  // при сабмите формы
  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    // отправляем запрос на сервер для логина
    api
      .login({
        email,
        password,
      })
      .then((user) => {
        // если сервер вернул ответ об успешном входе делаем dispatch, чтобы положить юзера в стэйт
        // dispatch(loginSuccess(user));

        // navigate('/');
        alert('Авторизация прошла успешно');
      })
      .catch((error) => {
        console.log(error.message);
      })
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

export default Login;
