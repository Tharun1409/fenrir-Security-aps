import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import './Header.css'
type HeaderBarProps = {
  breadcrumbs: ReactNode;
  actions?: ReactNode;
  rightMeta?: ReactNode;
  onMenuClick?: ()=> void;
};

export default function HeaderBar({ breadcrumbs, actions, rightMeta, onMenuClick }: HeaderBarProps) {
 
  useLocation();

  return (
    <div className="page-header">
        <button className="mobile-menu-btn" onClick={onMenuClick} aria-label="Open Menu">
             ☰
        </button>
      <div className="breadcrumbs">{breadcrumbs}</div>

      <div className="header-actions">
        {rightMeta ? <div className="header-meta">{rightMeta}</div> : null}
        {actions}
      </div>
    </div>
  );
}