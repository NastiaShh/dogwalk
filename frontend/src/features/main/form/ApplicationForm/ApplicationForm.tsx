import Request from '../types/Request'
import { useForm } from "react-hook-form";
import { createRequest } from '../requestsSlice';
import { useAppDispatch } from '../../../../store';


function ApplicationForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<Request>();

  const onSubmit = (data: Request): void => {
    dispatch(createRequest(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1>Записаться на консультацию</h1>
        <input
          type="text"
          placeholder="Имя"
          {...register("name")}
        />
        <input
          type="tel"
          placeholder="+7"
          {...register("phone")}
        />
        <input
          type="email"
          placeholder="email"
          {...register("email")}
        />
        <input
          type="date"
          placeholder="date"
          {...register("date")}
        />
        <input
          type="time"
          placeholder="time"
          {...register("time")}
        />
        <button type="submit">
          добавить
        </button>
      </div>
    </form>
  )
}

export default ApplicationForm
