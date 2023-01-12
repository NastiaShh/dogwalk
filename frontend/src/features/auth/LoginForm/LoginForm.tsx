import { useAppDispatch } from '../../../store';
import { useForm } from 'react-hook-form';
import { login } from '../authSlice';
import style from './LoginForm.module.css';
import { LoggedUser } from '../types/UserState';
import { useSelector } from 'react-redux';
import { selectLoginError } from '../selectors';

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const loginError = useSelector(selectLoginError);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoggedUser>();

  const handleFormSubmit = handleSubmit(async (data) => {
    const dispatchResult = await dispatch(login(data));

    if (login.fulfilled.match(dispatchResult)) {
      reset();
    }
  });

  return (
    <form onSubmit={handleFormSubmit} className={style.container}>
      {loginError && <div className={style.error}>{loginError}</div>}
      <input
        type="text"
        id="email-input"
        placeholder="Email"
        className={style.input}
        {...register('email', { required: 'Укажите имя пользователя' })}
      />
      {errors.email && <div className={style.error}>{errors.email.message}</div>}
      <input
        type="password"
        id="password-input"
        placeholder="Пароль"
        className={style.input}
        {...register('password', { required: 'Придумайте пароль' })}
      />
      {errors.password && <div className={style.error}>{errors.password.message}</div>}
      <button type="submit" className={style.button}>
        войти
      </button>
    </form>
  );
}

export default LoginForm;
