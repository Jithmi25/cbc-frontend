import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Corrected import


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
  {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="*" element={<h1><b>404 error</b></h1>} /> {/* Handle undefined paths */}
        {/* </Routes>
      </BrowserRouter> */} 
    </>
  );
}

export default App;

