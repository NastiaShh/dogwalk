import React, { useEffect } from 'react';
import WalkersList from '../features/walkers/WalkersList/WalkersList';
import { loadWalkers } from '../features/walkers/walkersSlice';
import { useAppDispatch } from '../store';
import './App.css';
import Questions from '../features/main/questions/Questions';

function App(): JSX.Element {
  return (
    <div className="App">
      <Questions />
    </div>
  );
}

export default App;
