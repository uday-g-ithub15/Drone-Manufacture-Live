import './App.css';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Purchase from './pages/Purchase/Purchase';
import Parts from './pages/Home/Parts';
import Register from './pages/Login/Register';
import Login from './pages/Login/Login';
import PrivateLogin from './pages/Private/PrivateLogin';
import Error from './pages/Shared/Error';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/parts' element={<Parts />} >
        </Route>
        <Route path='/purchase/:id' element={<PrivateLogin><Purchase /></PrivateLogin>}></Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
