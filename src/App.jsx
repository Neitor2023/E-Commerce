import "./styles.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewsDetail from "./pages/NewsDetail";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";

function App() {
  const isLoading = useSelector( state => state.isLoading )
  return (
    <HashRouter>
      <div className="App">
        { isLoading && <Loader />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
