import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../../store"
import { loadRequest } from "../../main/form/requestsSlice"
import { selectRequests } from "../../main/form/selectors"
import WalkRequest from "../WalkRequest/WalkRequest"
import style from './AdminPanel.module.css';



function AdminPanel(): JSX.Element {
  const requests = useSelector(selectRequests)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadRequest())
  }, [dispatch])

  return (
    <div className={style.requests}>
      <h3 className={style.request_head}>Заявки</h3>
      <div className={style.requests_block}>
        <div className={style.req_head}>Необработанные</div>
        {requests.length !== 0 ? (
          requests.map((request) => request.status === 'не обработано' && (
            <WalkRequest
              key={request.id}
              request={request}
            />
          ))
        )
          : (<div>Записей нет</div>)}
      </div>


      <div className={style.requests_block}>
        <div className={style.req_head}>В работе</div>
        {requests.length !== 0 ? (
          requests.map((request) => request.status === 'в работе' && (
            <WalkRequest
              key={request.id}
              request={request}
            />
          ))
        )
          : (<div>Записей нет</div>)}
      </div>

      <div className={style.requests_block}>
        <div className={style.req_head}>Завершенные</div>
        {requests.length !== 0 ? (
          requests.map((request) => request.status === 'завершено' && (
            <WalkRequest
              key={request.id}
              request={request}
            />
          ))
        )
          : (<div>Записей нет</div>)}
      </div>
    </div>
  )
}

export default AdminPanel


