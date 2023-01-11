import { useEffect } from 'react';
import Questions from './questions/Questions';
import GreetingPage from './GreetingPage/GreetingPage';
import AboutPage from './AboutPage/AboutPage';
import ReviewsPage from './reviews/Page/ReviewsPage';
import Footer from '../footer/Footer';
import CostCalculationPage from './costCalculation/Page/CostCalculationPage';
import ApplicationForm from './form/ApplicationForm/ApplicationForm';
// import RegisterPage from '../auth/RegisterPage';
// import LoginPage from '../auth/LoginPage';
import { RootState, useAppDispatch } from '../../store';
import { checkUser } from '../auth/authSlice';
// import { useSelector } from 'react-redux';
// import AdminPanel from '../admin/AdminPanel/AdminPanel';
import AdminPanel from '../admin/AdminPanel/AdminPanel'

function Main(): JSX.Element {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);
  
  // для проверки пользователя из рут-стейта
  // const { authChecked, user } = useSelector((state: RootState) => state.auth);
  // console.log(authChecked, user);

  return (
    <div>
      <AdminPanel />
      <GreetingPage />
      <AboutPage />
      <CostCalculationPage />
      <Questions />
      <ReviewsPage />
      <ApplicationForm />
      <Footer />
    </div>
  );
}

export default Main;
