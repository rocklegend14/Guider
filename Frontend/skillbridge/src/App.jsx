import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Auth from './pages/Auth.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/signup" element={<Auth />} />
    </Routes>
  )
}

export default App
