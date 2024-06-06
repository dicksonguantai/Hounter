import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Home from './Home';
import HouseDetails from './Components/Houses/HouseDetails';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
    
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/house/:id" element={<HouseDetails />} />
          </Routes>
        </main>
        <Footer />
      
    </div>
  );
}

export default App;
