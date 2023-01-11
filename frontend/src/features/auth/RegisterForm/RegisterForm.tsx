import React from 'react';
import { useAppDispatch } from '../../../store';
// import { useNavigate } from 'react-router-dom';
import { register } from '../authSlice';
import style from './RegisterForm.module.css';

function RegisterForm(): JSX.Element {
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
    <form onSubmit={handleSubmit} className={style.container}>
      <input
        type="text"
        id="name-input"
        name="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Имя"
        className={style.input}
      />
      <input
        type="text"
        id="email-input"
        name="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
        className={style.input}
      />
      <input
        type="text"
        id="phone-input"
        name="phone"
        value={phone}
        onChange={handlePhoneChange}
        placeholder="+7 (999) 999 99 99"
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
      <input
        type="password"
        id="password-repeat-input"
        name="password-repeat"
        value={passwordRepeat}
        onChange={handlePasswordRepeatChange}
        placeholder="Повторите пароль"
        className={style.input}
      />
      <button type="submit" className={style.button}>
        зарегистрироваться
      </button>
    </form>
  );
}

export default RegisterForm;
