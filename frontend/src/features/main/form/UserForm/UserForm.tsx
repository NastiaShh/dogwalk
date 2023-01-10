import Request from '../types/Request'
import { useForm } from "react-hook-form";
import style from './UserForm.module.css';

function UserForm(): JSX.Element {
  const { register } = useForm<Request>();


  return (
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
      <button type="submit" className={style.button}>
        свяжитесь со мной
      </button>
      <p className={style.bottom_text}>Обращаем ваше внимание, что заказ услуги возможен только<br></br> через наш сайт после регистрации</p>
    </div>
  )
}

export default UserForm
