import './App.css';
import Questions from '../features/main/questions/Questions';
import GreetingPage from '../features/main/GreetingPage/GreetingPage';
import AboutPage from '../features/main/AboutPage/AboutPage';
import ReviewPage from '../features/main/reviews/Page/ReviewsPage';
// import ApplicationForm from '../features/main/form/ApplicationForm/ApplicationForm';
// import LoginPage from '../features/auth/LoginPage';
import Footer from '../features/footer/Footer';

function App(): JSX.Element {
  return (
    <div className="App">
      <GreetingPage />
      <AboutPage />
      <Questions />
      <ReviewPage />
      {/* <ApplicationForm /> */}
      {/* <LoginPage /> */}
      <Footer />
    </div>
  );
}

export default App;
