import Questions from './questions/Questions';
import GreetingPage from './GreetingPage/GreetingPage';
import AboutPage from './AboutPage/AboutPage';
import ReviewPage from './reviews/Page/ReviewsPage';
import Footer from '../footer/Footer';
import CostCalculationPage from './costCalculation/Page/CostCalculationPage';
import Page from './reviews/ReviewsSwiper/Page';


function Main(): JSX.Element {
  return (
    <div>
      <GreetingPage />
      <AboutPage />
      <CostCalculationPage/>
      <Questions />
      <ReviewPage />
      <Page />
      <Footer />
    </div>
  );
}

export default Main;
