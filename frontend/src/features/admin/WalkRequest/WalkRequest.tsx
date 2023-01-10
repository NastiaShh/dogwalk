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
      <div className={style.card}>
        <div className={style.head}>
          <div className={style.info}>
            <div><strong>Имя:</strong>{request.name}</div>
            {request.date && (
              <>
                <div><strong>Дата:</strong>{request.date} {request.time}</div>
              </>
            )}
            <div><strong>Номер телефона:</strong>{request.phone}</div>
            <div><strong>Почта:</strong>{request.email}</div>
            <div>
              <button type="button" className={style.btn_change} onClick={() => dispatch(changeRequest(request))}>изменить</button>
              <button type="button"
                className={style.btn_delete} onClick={() => dispatch(deleteRequest(request))}>удалить</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default WalkRequest


