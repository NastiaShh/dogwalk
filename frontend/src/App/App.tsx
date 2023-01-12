import { Route, Routes } from 'react-router-dom';
import AdminPanel from '../features/admin/AdminPanel/AdminPanel';
import Main from '../features/main/Main';
import ProfilePage from '../features/profile/Page/ProfilePage';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/admin' element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
