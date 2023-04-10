
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Login from './components/Login';
import Purchase from './pages/Purchase';
// import { isLoading } from './store/slices/isLoading.slice';
import Loader from './components/Loader';
import { useSelector } from 'react-redux';

function App() {
  const isLoading = useSelector(state => state.isLoading)
  return (
    <HashRouter>
      <div className="App">
        {/* <Loader /> */}
        {isLoading && <Loader />}
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