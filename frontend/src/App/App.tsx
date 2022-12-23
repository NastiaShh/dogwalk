import React, { useEffect } from 'react';
import WalkersList from '../features/walkers/WalkersList/WalkersList';
import { loadWalkers } from '../features/walkers/walkersSlice';
import { useAppDispatch } from '../store';
import './App.css';

function App(): JSX.Element {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadWalkers())
  }, [dispatch])

  return (
    <div className="App">
      <WalkersList />
    </div>
  );
}

export default App;
