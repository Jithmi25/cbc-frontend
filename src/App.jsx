import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import LoginPage from './pages/loginPage';
import HomePage from './pages/start';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <BrowserRouter>
        <Routes> 
          <Route path="/Login" element={<LoginPage />} />
          <Route path="*" element={<HomePage/>} /> 
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;

