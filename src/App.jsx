import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signUpPage";
import AdminHomePage from "./pages/admin/adminHomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignupPage />} />
          <Route path="/adminHome/*" element={<AdminHomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
