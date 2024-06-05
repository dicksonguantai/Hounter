import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { HouseProvider } from './Components/Houses/HouseContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Router>
    <React.StrictMode>
    <HouseProvider>
         <App />
    </HouseProvider>
    </React.StrictMode>
  </Router>
  
)
