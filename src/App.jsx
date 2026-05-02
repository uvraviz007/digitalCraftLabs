import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
