import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./AppLayout.css";
import SideNavbar from "../components/Navbar/SideNavbar";
import TopNavbar from "../components/Navbar/TopNavbar";

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
     <div className= "app-layout">
      <SideNavbar 
        isOpen={isSidebarOpen}
        toggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />

      <div className={`main-wrapper ${ isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <TopNavbar isSidebarOpen={isSidebarOpen} />
        <main className="page-content" >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;