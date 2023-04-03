import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Purchase from './pages/Purchase';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/login/' element={<Login />} />
          <Route path='/purchase/' element={<Purchase />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;