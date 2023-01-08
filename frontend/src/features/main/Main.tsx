import Questions from './questions/Questions';
import GreetingPage from './GreetingPage/GreetingPage';
import AboutPage from './AboutPage/AboutPage';
import ReviewsPage from './reviews/Page/ReviewsPage';
import Footer from '../footer/Footer';
import CostCalculationPage from './costCalculation/Page/CostCalculationPage';
import ApplicationForm from './form/ApplicationForm/ApplicationForm';

function Main(): JSX.Element {
  return (
    <div>
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
