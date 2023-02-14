import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home";
import List from './pages/List/List';
import Hotel from './pages/hotel/Hotel';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';


function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/hotels" element={<List />} />
      <Route  path="/hotels/:id" element={<Hotel />} />
      <Route  path="/login" element={<Login />} />
      <Route  path="/signup" element={<Signup />} />
    </Routes>
  </Router>
  );
}

export default App;
