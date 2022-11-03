import React from 'react';
import './App.css';
import Register from './components/Register';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import ViewAttendees from './components/Admin';

function App() {

  return (
   
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={ <Register/> } />
          <Route path="/Admin" element={ <ViewAttendees/> } />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
