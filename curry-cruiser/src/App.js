import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
