import Request from '../types/Request'
import { useForm } from "react-hook-form";
import { createRequest } from '../requestsSlice';
import { RootState, useAppDispatch } from '../../../../store';
import style from './ApplicationForm.module.css';
import { useSelector } from 'react-redux';
import UserForm from '../UserForm/UserForm';
import UnregisterUserForm from '../UnregisterUserForm/UnregisterUserForm';
import dog from './images/dog.png';

function ApplicationForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<Request>();

  const onSubmit = (data: Request): void => {
    dispatch(createRequest(data));
    reset()
  };

  const { authChecked } = useSelector((state: RootState) => state.auth)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.container} id='form'>
      <h1 className={style.title}>Записаться на консультацию</h1>
      {authChecked ? (
        <UserForm register={register} />
      ) : (
        <UnregisterUserForm register={register} />
      )}
      <img src={dog} alt='dog' className={style.dog} />
    </form>
  )
}

export default ApplicationForm
