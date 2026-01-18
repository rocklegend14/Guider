import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Auth from './pages/Auth.jsx'
import Profile from './pages/Profile.jsx'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/signup" element={<Auth />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App
