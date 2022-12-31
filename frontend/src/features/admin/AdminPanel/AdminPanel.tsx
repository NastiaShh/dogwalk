import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../../store"
import { loadRequest } from "../../main/form/requestsSlice"
import { selectRequests } from "../../main/form/selectors"
import WalkRequest from "../WalkRequest/WalkRequest"


function AdminPanel(): JSX.Element {
  const requests = useSelector(selectRequests)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadRequest())
  }, [dispatch])

  return (
    <div>
      {requests.map((request) => (
        <WalkRequest key={request.id} request={request} />
      ))}
    </div>
  )
}

export default AdminPanel


