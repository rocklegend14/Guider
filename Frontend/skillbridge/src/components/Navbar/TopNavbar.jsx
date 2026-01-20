import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import "./TopNavbar.css";

function TopNavbar({ isSidebarOpen }) {
  
  //Logout function
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("isAuth"); // or clear()
    navigate("/login", { replace: true });
  };

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className={`topbar ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <h1 className="page-title">Dashboard</h1>

      <div className="user-info" ref={dropdownRef}>
        <div className="avatar-container">
         <span className="username">Welcome, User</span>
         <div className="avatar" onClick={() => setOpen(!open)}>U</div>
         <span className="caret"onClick={() => setOpen(!open)}>▾</span>
        {open && (
          <div className="dropdown">
            <button><Link to ="/profile">Profile</Link></button>
            <button>Settings</button>
            <button onClick={logout}className="logout">Logout</button>
          </div>
        )}
        </div>
      </div>
    </header>
  );
}

export default TopNavbar;
