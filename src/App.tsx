import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import DeliveryPage from './pages/DeliveryPage';
import OrderPage from './pages/OrderPage';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

function App() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/delivery' element={<DeliveryPage/>} />
        <Route path='/orders' element={<OrderPage/>} />
        
        {/* Redirect /app to either /delivery or /orders based on authentication */}
        <Route path='/app' element={
          isAuthenticated ? <Navigate to="/delivery" /> : <Navigate to="/login" />
        } />
        
        {/* Catch-all redirect to home page */}
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;