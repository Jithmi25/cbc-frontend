import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import SignupPage from "./pages/signUpPage";
import AdminHomePage from "./pages/admin/adminHomePage";
import { Toaster } from "react-hot-toast";
import FileUplodTest from "./pages/text";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <Toaster  position="top-right" reverseOrder={false}/>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signUp" element={<SignupPage />} />
          <Route path="/adminHome/*" element={<AdminHomePage />} />
          <Route path="/testing" element={<FileUplodTest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
