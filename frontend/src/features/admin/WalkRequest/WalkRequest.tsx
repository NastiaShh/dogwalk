import { useAppDispatch } from "../../../store";
import { changeRequest, deleteRequest } from "../../main/form/requestsSlice";
import Request from "../../main/form/types/Request";
import style from './WalkRequest.module.css';


type RequestProps = {
  request: Request
};

function WalkRequest({ request }: RequestProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
      <div className={`${style.card} ${(request.status === 'не обработано') ? style.cardUnfinished : (request.status === 'в работе') ? style.cardInWork : style.cardFinished}`}>
        <div className={style.cardBody}>
          <div className={style.row}>
            <div className={style.label}>Имя</div>
            <div className={style.infoText}>{request.name}</div>
          </div>
          {request.date && (
            <div className={style.row}>
              <div className={style.label}>Дата</div>
              <div className={style.infoText}>{request.time}</div>
            </div>
          )}
          <div className={style.row}>
            <div className={style.label}>Номер телефона</div>
            <div className={style.infoText}>{request.phone}</div>
          </div>
          <div className={style.row}>
            <div className={style.label}>Почта</div>
            <div className={style.infoText}>{request.email}</div>
          </div>
        </div>
        <div className={style.buttons}>
          {request.status !== 'завершено' && (
            <button className={style.btnChange} onClick={() => dispatch(changeRequest(request))}>изменить</button>
          )}
          <button className={style.btnDelete} onClick={() => dispatch(deleteRequest(request))}>удалить</button>
          
        </div>
      </div>
  )
}

export default WalkRequest
