import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../../store"
import { checkUser } from "../../auth/authSlice"


function UserData(): JSX.Element {
  const dispatch = useAppDispatch()
  const { user } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])
  return (
    <div>
      <h1>Основные данные</h1>

      <div>
        <form >

          <div>
            <label htmlFor="firstName">Имя</label>
            <input id="firstName" type="text" defaultValue={user?.name} disabled />
          </div>

          <div>
            <label htmlFor="phone">Номер телефона</label>
            <input id="phone" type="phone" defaultValue={user?.phone} disabled />
          </div>

          <div>
            <label htmlFor="email">Электронная почта</label>
            <input id="email" type="email" defaultValue={user?.email} disabled />
          </div>

        </form>

        <div>
          {/* <img src={user?.photo} alt="фотография пользователя" /> */}
        </div>
      </div>
    </div>
  )
}

export default UserData
