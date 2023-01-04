import Questions from './questions/Questions';
import GreetingPage from './GreetingPage/GreetingPage';
import AboutPage from './AboutPage/AboutPage';
import ReviewPage from './reviews/Page/ReviewsPage';
import Footer from '../footer/Footer';

function Main(): JSX.Element {
  return (
    <div>
      <GreetingPage />
      <AboutPage />
      <Questions />
      <ReviewPage />
      <Footer />
    </div>
  );
}

export default Main;
