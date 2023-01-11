import React from 'react';
import { useAppDispatch } from '../../store';
// import { useNavigate } from 'react-router-dom';
import { register } from './authSlice';

function RegisterPage(): JSX.Element {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordRepeat, setPasswordRepeat] = React.useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };
  
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };
  
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPhone(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handlePasswordRepeatChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPasswordRepeat(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    dispatch(register({ name, email, phone, password, passwordRepeat }));
    // navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
      <div>
        <label htmlFor="name-input">
          Имя
        </label>
        <input
          type="text"
          id="name-input"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="email-input">
          Email
        </label>
        <input
          type="text"
          id="email-input"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="phone-input">
          Телефон
        </label>
        <input
          type="text"
          id="phone-input"
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
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
      <div>
        <label htmlFor="password-input">
          Повторите пароль
        </label>
        <input
          type="password"
          id="password-repeat-input"
          name="password-repeat"
          value={passwordRepeat}
          onChange={handlePasswordRepeatChange}
        />
      </div>
      <button type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
}

export default RegisterPage;
