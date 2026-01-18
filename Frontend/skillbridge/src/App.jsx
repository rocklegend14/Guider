import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'

import Auth from './pages/Auth.jsx'
import Profile from './pages/Profile.jsx'


import AppLayout from "./layout/AppLayout.jsx";
import Auth from './pages/Auth/Auth.jsx'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/signup" element={<Auth />} />

      <Route path="/profile" element={<Profile />} />


      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Route>

    </Routes>
  )
}

export default App
