import { useAppDispatch } from "../../../store";
import { changeRequest, deleteRequest } from "../../main/form/requestsSlice";
import Request from "../../main/form/types/Request";
import style from './WalkRequest.module.css';


type RequestProps = {
  request: Request
}

function WalkRequest({ request }: RequestProps): JSX.Element {
  const dispatch = useAppDispatch()
  return (
    <div className={style.request_card}>
      <div className={style.request_body}><strong>Имя:</strong>{request.name}</div>
      {request.date && (
        <>
          <div><strong>Дата:</strong> {request.date}</div>
          <div><strong>Время:</strong> {request.time}</div>
        </>
      )}
      <div><strong>Номер телефона:</strong>{request.phone}</div>
      <div><strong>Почта:</strong>{request.email}</div>
      <div>
        <button type="button" className={style.btn_change} onClick={() => dispatch(changeRequest(request))}>Изменить статус</button>
        <button type="button"
          className={style.btn_delete} onClick={() => dispatch(deleteRequest(request))}>Удалить заявку</button>
      </div>
    </div>
  )
}

export default WalkRequest


