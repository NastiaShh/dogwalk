import style from './AdminPanel.module.css'
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../../store"
import { loadRequest } from "../../main/form/requestsSlice"
import { selectRequests } from "../../main/form/selectors"
import WalkRequest from "../WalkRequest/WalkRequest"

export default function AdminPanel(): JSX.Element {
  const requests = useSelector(selectRequests)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadRequest())
  }, [dispatch])

  return (
    <div>
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
  );
};
