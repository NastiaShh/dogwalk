import { useEffect } from 'react';
import Questions from './questions/Questions';
import GreetingPage from './GreetingPage/GreetingPage';
import AboutPage from './AboutPage/AboutPage';
import ReviewsPage from './reviews/Page/ReviewsPage';
import Footer from '../footer/Footer';
import CostCalculationPage from './costCalculation/Page/CostCalculationPage';
import ApplicationForm from './form/ApplicationForm/ApplicationForm';
import { RootState, useAppDispatch } from '../../store';
import { checkUser } from '../auth/authSlice';
import ProfilePage from '../profile/Page/ProfilePage';
import FormStepper from '../profile/Page/components/FormStepper';
// import { useSelector } from 'react-redux';

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
      {/* <ProfilePage /> */}
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
