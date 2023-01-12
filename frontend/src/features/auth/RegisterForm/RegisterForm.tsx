import { useAppDispatch } from '../../../store';
import { useForm } from 'react-hook-form';
import { registerUser } from '../authSlice';
import style from './RegisterForm.module.css';
import { RegisteredUser } from '../types/UserState';
import { useSelector } from 'react-redux';
import { selectAuthError } from '../selectors';

function RegisterForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const authError = useSelector(selectAuthError);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisteredUser>();

  const handleFormSubmit = handleSubmit(async (data) => {
    const dispatchResult = await dispatch(registerUser(data));

    if (registerUser.fulfilled.match(dispatchResult)) {
      reset();
    }
  });

  return (
    <form onSubmit={handleFormSubmit} className={style.container}>
      {authError && <div className={style.error}>{authError}</div>}
      <input
        type="text"
        id="name-input"
        placeholder="Имя"
        className={style.input}
        {...register('name', { required: 'Укажите имя пользователя' })}
      />
      {errors.name && <div className={style.error}>{errors.name.message}</div>}
      <input
        type="text"
        id="email-input"
        placeholder="Email"
        className={style.input}
        {...register('email', { required: 'Укажите email пользователя' })}
      />
      {errors.email && <div className={style.error}>{errors.email.message}</div>}
      <input
        type="tel"
        id="phone-input"
        placeholder="+7 (999) 999 99 99"
        className={style.input}
        {...register('phone', { required: 'Укажите телефон пользователя' })}
      />
      {errors.phone && <div className={style.error}>{errors.phone.message}</div>}
      <input
        type="password"
        id="password-input"
        minLength={6}
        placeholder="Пароль"
        className={style.input}
        {...register('password', { required: 'Придумайте пароль' })}
      />
      {errors.password && <div className={style.error}>{errors.password.message}</div>}
      <input
        type="password"
        id="password-repeat-input"
        minLength={6}
        placeholder="Повторите пароль"
        className={style.input}
        {...register('passwordRepeat', { required: 'Повторите пароль' })}
      />
      {errors.passwordRepeat && <div className={style.error}>{errors.passwordRepeat.message}</div>}
      <button type="submit" className={style.button}>
        зарегистрироваться
      </button>
    </form>
  );
}

export default RegisterForm;
