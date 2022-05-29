import './App.css';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Purchase from './pages/Purchase/Purchase';
import Parts from './pages/Home/Parts';
import Register from './pages/Login/Register';
import Login from './pages/Login/Login';
import PrivateLogin from './pages/Private/PrivateLogin';
import Error from './pages/Shared/Error';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import Blogs from './pages/Blogs/Blogs';
import Dashboard from './pages/Dashboard/Dashboard';
import MyProfile from './pages/Dashboard/MyProfile';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllUsers from './pages/Dashboard/AllUsers';
import ManageOrder from './pages/Dashboard/ManageOrder';
import ManageProduct from './pages/Dashboard/ManageProduct';
import AddProduct from './pages/Dashboard/AddProduct';
import PrivateAdmin from './pages/Private/PrivateAdmin';

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
        <Route path='/portfolio' element={<MyPortfolio />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/dashboard' element={<PrivateLogin><Dashboard /></PrivateLogin>} >
          <Route index element={<MyProfile />} />
          <Route path='/dashboard/myorder' element={<MyOrders />} />
          <Route path='/dashboard/reviews' element={<AddReview />} />
          <Route path='/dashboard/manageuser' element={<PrivateAdmin><AllUsers /></PrivateAdmin>} />
          <Route path='/dashboard/manageorders' element={<PrivateAdmin><ManageOrder /></PrivateAdmin>} />
          <Route path='/dashboard/manageproduct' element={<PrivateAdmin><ManageProduct /></PrivateAdmin>} />
          <Route path='/dashboard/addproduct' element={<PrivateAdmin><AddProduct /></PrivateAdmin>} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
