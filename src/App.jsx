
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Login from './Components/Login';

const Home = () => (
  <>
    <Header />
    <About />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;