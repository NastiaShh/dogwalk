import Request from "../../main/form/types/Request";

type RequestProps = {
  request: Request
}

function WalkRequest({ request }: RequestProps): JSX.Element {
  return (
    <div>
      <p>{request.name}</p>
      <p>{request.phone}</p>
      <p>{request.email}</p>
      <p>{request.status}</p>
    </div>
  )
}

export default WalkRequest


