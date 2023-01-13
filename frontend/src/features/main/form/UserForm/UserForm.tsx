import Request from '../types/Request'
import { UseFormRegister } from "react-hook-form";
import style from './UserForm.module.css';
import { useState } from 'react';

function UserForm({ register }: { register: UseFormRegister<Request> }): JSX.Element {
  const [click, setClick] = useState(false);
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
        placeholder="Email"
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
      <button type="submit" className={style.button} onClick={() => setClick((p) => (!p))}>
        свяжитесь со мной
      </button>
      {click === true && (
        <p className={style.bottom_text}>Ваша заявка успешно отправлена,<br></br> подождите пока с вами свяжется администратор</p>
      )}
    </div>
  )
}

export default UserForm
