import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Home from './Home'
import {Routes, Route } from 'react-router-dom';
import HouseDetails from './Components/Houses/HouseDetails';

function App() {
  

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />}/> <Route/>
      <Route path = "/login" element={<Login/>}></Route>
      <Route path = "/signup" element={<Signup/>}></Route>
      <Route path="/house/:id" element={<HouseDetails/>}></Route>

    </Routes>
  </div>
  )
}

export default App 
