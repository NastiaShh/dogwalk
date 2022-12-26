import './App.css';
import Questions from '../features/main/questions/Questions';
import GreetingPage from '../features/main/GreetingPage/GreetingPage';
import AboutPage from '../features/main/AboutPage/AboutPage';
import ApplicationForm from '../features/main/form/ApplicationForm/ApplicationForm';

function App(): JSX.Element {
  return (
    <div className="App">
      <GreetingPage />
      <AboutPage />
      <Questions />
      <ApplicationForm />
    </div>
  );
}

export default App;
