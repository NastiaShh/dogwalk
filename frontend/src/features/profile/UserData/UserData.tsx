import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../../store"
import { checkUser } from "../../auth/authSlice"
import style from './UserData.module.css'

function UserData(): JSX.Element {
  const dispatch = useAppDispatch()
  const { user } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])
  return (
    <div>
      <div>
        <form className={style.container}>

          <div className={style.parameter}>
            <label htmlFor="firstName">Имя</label>
            <input id="firstName" type="text" defaultValue={user?.name} disabled />
          </div>

          <div className={style.parameter}>
            <label htmlFor="phone">Номер телефона</label>
            <input id="phone" type="phone" defaultValue={user?.phone} disabled />
          </div>

          <div className={style.parameter}>
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
