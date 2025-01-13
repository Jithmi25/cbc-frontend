import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import LoginPage from './pages/loginPage';
import HomePage from './pages/start';
import SignupPage from './pages/signUpPage';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <BrowserRouter>
        <Routes> 
          <Route path="/Login" element={<LoginPage />} />
          <Route path="*" element={<HomePage/>} /> 
          <Route path="/SignUp" element={<SignupPage/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;

