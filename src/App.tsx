
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      
    </div>
  );
}

export default App;