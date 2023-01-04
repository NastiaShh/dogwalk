import Request from "../../main/form/types/Request";
import style from './WalkRequest.module.css';


type RequestProps = {
  request: Request
}

function WalkRequest({ request }: RequestProps): JSX.Element {
  return (
    <div className={style.request_card}>
      <div className={style.request_body}><strong>Имя:</strong>{request.name}</div>
      {/* <div><strong>Дата:</strong> {req.date}</div>
<div><strong>Время:</strong> {req.time}</div> */}
      <div><strong>Номер телефона:</strong>{request.phone}</div>
      <div><strong>Почта:</strong>{request.email}</div>
      <div>
        <button type="button" className={style.btn_change}>Изменить статус</button>
        <button type="button"
          className={style.btn_delete}>Удалить заявку</button>
      </div>
    </div>
  )
}

export default WalkRequest


