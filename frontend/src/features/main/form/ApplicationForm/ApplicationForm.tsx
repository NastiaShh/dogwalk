import Request from '../types/Request'
import { useForm } from "react-hook-form";
import { createRequest } from '../requestsSlice';
import { useAppDispatch } from '../../../../store';
import style from './ApplicationForm.module.css';




function ApplicationForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<Request>();

  const onSubmit = (data: Request): void => {
    dispatch(createRequest(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
      <h1>Записаться на консультацию</h1>
      <div className={style.block}>
        <p className={style.text}>Остались вопросы или у Вас есть особые пожелания?<br></br>Заполните заявку и наш менеджер свяжется с Вами для уточнения всех деталей </p>
        <input
          type="text"
          placeholder="Имя"
          {...register("name")}
        />
        <input
          type="tel"
          placeholder="+7 (999) 999-99-99"
          {...register("phone")}
        />
        <input
          type="email"
          placeholder="email"
          {...register("email")}
        />
        <button type="submit" className={style.button}>
          свяжитесь со мной
        </button>
        <p className={style.bottom_text}>Обращаем ваше внимание, что заказ услуги возможен только<br></br> через наш сайт после регистрации</p>
      </div>
    </form>
  )
}

export default ApplicationForm
