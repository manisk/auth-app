import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
