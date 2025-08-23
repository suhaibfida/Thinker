import { Dashboard } from "./pages/Dashboard";
import { Sharedpage } from "./pages/Sharedpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/auth/Signup";
import { Login } from "./pages/auth/Login";

import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Dashboard />} />
          <Route path="/sharedpage " element={<Sharedpage />} />
        </Routes>
      </BrowserRouter>
      {/* <Signup />
      <Login /> */}
      {/* <Dashboard /> */}
      hello
    </>
  );
}

export default App;
