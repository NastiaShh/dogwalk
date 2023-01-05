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
        <div className={style.requests_block}>
          <div className={style.request_head}>Необработанные заявки</div>
          {requests.length !== 0 ? (
            requests.map((request) => request.status === 'обрабатывается' && (
              <WalkRequest
                key={request.id}
                request={request}
              />
            ))
          )
            : (<div>Записей нет</div>)}
        </div>
        <div className={style.requests_block}>
          <div className={style.request_head}>Обработанные заявки</div>
          {requests.length !== 0 ? (
            requests.map((request) => request.status === 'обработано' && (
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


