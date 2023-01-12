import Request from '../types/Request'
import { UseFormRegister } from "react-hook-form";
import style from '../ApplicationForm/ApplicationForm.module.css';
import { useState } from 'react';

function UnregisterUserForm({ register }: { register: UseFormRegister<Request> }): JSX.Element {
  const [click, setClick] = useState(false)
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
      <button type="submit" className={style.button} onClick={() => setClick((p) => (!p))}>
        свяжитесь со мной
      </button>
      {click === true && (
        <p className={style.message_text}>Ваша заявка успешно отправлена, подождите пока с вами свяжется администратор</p>
      )}
      <p className={style.bottom_text}>Обращаем ваше внимание, что заказ услуги возможен только<br></br> через наш сайт после регистрации</p>
    </div>
  )
}

export default UnregisterUserForm
