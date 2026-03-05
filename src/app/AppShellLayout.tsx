import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Components/LayOut-Component/Sidebar";
import HeaderBar from "../Components/LayOut-Component/HeaderBar";
import ThemeToggle from "../Components/UI-Component/ThemeToggle";
import { useState } from "react";

export default function AppShellLayout() {
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Route based header config (simple + fast)
  const headerConfig = (() => {
    if (pathname.startsWith("/dashboard") || pathname.startsWith("/scan")) {
      return {
        breadcrumbs: "Scan / Private Assets / New Scan",
        actions: (
          <>
            <button className="btn">Export Report</button>
            <button className="btn danger">Stop Scan</button>
            <ThemeToggle />
          </>
        ),
      };
    }
    
    return { breadcrumbs: "", actions: <ThemeToggle /> };
  })();

  return (
    <div className="app-shell">
     {sidebarOpen && (
        <div
        className="sidebar-overlay"
        onClick={()=>setSidebarOpen(false)}
        />
     )} 
     <Sidebar isOpen={sidebarOpen} onClose={()=>setSidebarOpen(false)}/>

      <main className="app-main">
        <HeaderBar breadcrumbs={headerConfig.breadcrumbs} actions={headerConfig.actions} 
        onMenuClick={()=>setSidebarOpen(true)} />
        <div className="app-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}