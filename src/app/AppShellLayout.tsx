import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Components/LayOut-Component/Sidebar";
import HeaderBar from "../Components/LayOut-Component/HeaderBar";
import ThemeToggle from "../Components/UI-Component/ThemeToggle";

export default function AppShellLayout() {
  const { pathname } = useLocation();

  // Route based header config (simple + fast)
  const headerConfig = (() => {
    if (pathname.startsWith("/dashboard")) {
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
    if (pathname.startsWith("/scan/")) {
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
      <Sidebar />
      <main className="app-main">
        <HeaderBar breadcrumbs={headerConfig.breadcrumbs} actions={headerConfig.actions} />
        <div className="app-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}