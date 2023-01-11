import { Route, Routes } from 'react-router-dom';
import AdminPanel from '../features/admin/AdminPanel/AdminPanel';
import Main from '../features/main/Main';
import DogsList from '../features/profile/DogsData/DogsList/DogsList';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<DogsList />} />
        <Route path='/admin' element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
