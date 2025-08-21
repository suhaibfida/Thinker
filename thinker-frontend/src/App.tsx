import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Signup } from "./pages/auth/Signup";
import { Login } from "./pages/auth/Login";

import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Signup />
      <Login />
      <Dashboard />
    </>
  );
}

export default App;
