import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import './Header.css'
type HeaderBarProps = {
  breadcrumbs: ReactNode;
  actions?: ReactNode;
  rightMeta?: ReactNode;
};

export default function HeaderBar({ breadcrumbs, actions, rightMeta }: HeaderBarProps) {
 
  useLocation();

  return (
    <div className="page-header">
      <div className="breadcrumbs">{breadcrumbs}</div>

      <div className="header-actions">
        {rightMeta ? <div className="header-meta">{rightMeta}</div> : null}
        {actions}
      </div>
    </div>
  );
}