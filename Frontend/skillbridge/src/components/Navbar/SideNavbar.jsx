import { NavLink } from "react-router-dom";
import "./SideNavbar.css";

function SideNavbar({ isOpen, toggle }) {
  return (
     <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        {isOpen && <span className="logo-text">SkillBridge</span>}
        {/* Animated Hamburger */}
        <button
          onClick={toggle}
          className={`hamburger ${isOpen ? "open" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-item">🏠 {isOpen && "Dashboard"}</div>
        <div className="nav-item">🧭 {isOpen && "Decision"}</div>
        <div className="nav-item">📊 {isOpen && "Skill Gap"}</div>
        <div className="nav-item">🗺️ {isOpen && "Roadmap"}</div>
        <div className="nav-item">📚 {isOpen && "Resources"}</div>
      </nav>
    </aside>
  );
}

export default SideNavbar;
