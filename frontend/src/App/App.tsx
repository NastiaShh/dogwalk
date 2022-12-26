import React, { useEffect } from 'react';
import WalkersList from '../features/walkers/WalkersList/WalkersList';
import { loadWalkers } from '../features/walkers/walkersSlice';
import { useAppDispatch } from '../store';
import './App.css';
import Questions from '../features/main/questions/Questions';
import GreetingPage from '../features/main/GreetingPage/GreetingPage';
import AboutPage from '../features/main/AboutPage/AboutPage';
import ReviewPage from '../features/main/reviews/Page/ReviewsPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <GreetingPage />
      <AboutPage />
      <Questions />
      <ReviewPage />
      <WalkersList />
    </div>
  );
}

export default App;
