import AdminRoutes from './admin/routes/AdminRoutes';
import './App.css';
import UserRoutes from './user/routes/UserRoutes';
import SignUp from './auth/pages/SignUp';
import SignIn from './auth/pages/SignIn';
import { Route, Routes, useLocation } from 'react-router-dom';
import AdminNav from './components/AdminNav';
import UserProtectedRoutes from './user/routes/UserProtectedRoutes';
import AdminProtectedRoutes from './admin/routes/AdminProtectedRoutes';
import Navbar from './components/Navbar';
import Home from './user/pages/Home';
import Product from './user/pages/Product';

function App() {
  const location = useLocation();
  const isAdminRoute = AdminRoutes.some(route => location.pathname.startsWith(route.path));
  return (
    <div className="App">
      {isAdminRoute ? <AdminNav /> : <Navbar />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route element={<UserProtectedRoutes/>}>
          {UserRoutes.map(({path, element},index)=>(
            <Route key={index} path={path} element={element}/>
          ))}
        </Route>
        <Route element={<AdminProtectedRoutes/>}>
          {AdminRoutes.map(({path, element},index)=>(
            <Route key={index} path={path} element={element}/>
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;