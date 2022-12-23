import React from 'react';
import './App.css';
import GreetingPage from '../features/main/GreetingPage/GreetingPage';
import AboutPage from '../features/main/AboutPage/AboutPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <GreetingPage />
      <AboutPage />
    </div>
  );
}

export default App;
