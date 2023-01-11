import style from './AdminPanel.module.css'
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../../store"
import { loadRequest } from "../../main/form/requestsSlice"
import { selectRequests } from "../../main/form/selectors"
import WalkRequest from "../WalkRequest/WalkRequest"

import Footer from '../../footer/Footer'
import UserNavbar from '../UserNavbar'

export default function AdminPanel(): JSX.Element {
  const requests = useSelector(selectRequests)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadRequest())
  }, [dispatch])

  return (
    <>
      <UserNavbar />
      <div className={style.page}>
        <div className={style.container}>
          <h3 className={style.title}>Заявки</h3>
          <div className={style.content}>
            <section className={style.section}>
              <h4 className={style.sectionTitle}>Необработанные</h4>
              {requests.length !== 0 ? (
                requests.map((request) => request.status === 'не обработано' && (
                  <WalkRequest
                    key={request.id}
                    request={request}
                  />
                ))
              )
                : (<div>Записей нет</div>)}
            </section>
            <section className={style.section}>
              <h4 className={style.sectionTitle}>В работе</h4>
              {requests.length !== 0 ? (
                requests.map((request) => request.status === 'в работе' && (
                  <WalkRequest
                    key={request.id}
                    request={request}
                  />
                ))
              )
                : (<div>Записей нет</div>)}
            </section>
            <section className={style.section}>
              <h4 className={style.sectionTitle}>Завершенные</h4>
              {requests.length !== 0 ? (
                requests.map((request) => request.status === 'завершено' && (
                  <WalkRequest
                    key={request.id}
                    request={request}
                  />
                ))
              )
                : (<div>Записей нет</div>)}
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
