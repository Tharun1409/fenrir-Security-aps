import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdFolder,
  MdSecurity,
  MdSchedule,
  MdNotifications,
  MdSettings,
  MdSupport,
} from "react-icons/md";

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Brand */}
      <div className="sidebar-brand">
        <div className="brand-mark">●</div>
        <div className="brand-name">aps</div>
      </div>

      {/* Main nav */}
      <nav className="sidebar-nav">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "side-link active" : "side-link")}
        >
          <span className="side-ic"><MdDashboard /></span>
          <span className="side-tx">Dashboard</span>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "side-link active" : "side-link")}
        >
          <span className="side-ic"><MdFolder /></span>
          <span className="side-tx">Projects</span>
        </NavLink>

        <NavLink
          to="/scans"
          className={({ isActive }) => (isActive ? "side-link active" : "side-link")}
        >
          <span className="side-ic"><MdSecurity /></span>
          <span className="side-tx">Scans</span>
        </NavLink>

        <NavLink
          to="/schedule"
          className={({ isActive }) => (isActive ? "side-link active" : "side-link")}
        >
          <span className="side-ic"><MdSchedule /></span>
          <span className="side-tx">Schedule</span>
        </NavLink>
      </nav>

      <div className="sidebar-divider" />

      {/* Secondary */}
      <div className="sidebar-secondary">
        <button className="side-link ghost" type="button">
          <span className="side-ic"><MdNotifications /></span>
          <span className="side-tx">Notifications</span>
        </button>

        <button className="side-link ghost" type="button">
          <span className="side-ic"><MdSettings /></span>
          <span className="side-tx">Settings</span>
        </button>

        <button className="side-link ghost" type="button">
          <span className="side-ic"><MdSupport /></span>
          <span className="side-tx">Support</span>
        </button>
      </div>

      {/* Footer user */}
      <div className="sidebar-footer">
        <div className="user-avatar">👤</div>
        <div className="user-meta">
          <div className="user-mail">admin@edu.com</div>
          <div className="user-role">Security Lead</div>
        </div>
        <div className="user-chev">›</div>
      </div>
    </aside>
  );
}

export default Sidebar;