import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
// import 'bootstrap-icons/icons';
import 'react-toastify/dist/ReactToastify.css'
import { Component } from 'react';
import Booking from './Components/Booking';
import Show from './Components/Show';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Full_datails from './Components/Full_datails';



function App() {
  return (
    <BrowserRouter>
        <div className="App">
      <Routes>
          <Route path='/' element={<Show />}/>
          <Route path='/booking' element={<Booking />}/>
          <Route path='/full_details/:id' element={<Full_datails />}/>



      </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
