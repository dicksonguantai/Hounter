import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Home from './Home'
import {Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />}/> <Route/>
      <Route path = "/login" element={<Login/>}></Route>
      <Route path = "/signup" element={<Signup/>}></Route>
    </Routes>
  </div>
  )
}

export default App 
