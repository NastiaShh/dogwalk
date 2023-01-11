import Request from '../types/Request'
import { useForm } from "react-hook-form";
import { createRequest } from '../requestsSlice';
import { RootState, useAppDispatch } from '../../../../store';
import style from './ApplicationForm.module.css';
import { useSelector } from 'react-redux';
import UserForm from '../UserForm/UserForm';
import UnregisterUserForm from '../UnregisterUserForm/UnregisterUserForm';




function ApplicationForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { handleSubmit } = useForm<Request>();

  const onSubmit = (data: Request): void => {
    dispatch(createRequest(data));
  };

  const { authChecked } = useSelector((state: RootState) => state.auth)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.container} id='form'>
      <h1>Записаться на консультацию</h1>
      {authChecked ? (
        <UserForm />
      ) : (
        <UnregisterUserForm />
      )}
    </form>
  )
}

export default ApplicationForm
