import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const primaryLinks = [
  { to: "/", label: "Home", icon: HomeIcon },
  { to: "/liked", label: "Liked Videos", icon: LikeIcon },
  { to: "/history", label: "History", icon: HistoryIcon },
  { to: "/my-content", label: "My content", icon: ContentIcon },
  { to: "/collection", label: "Collection", icon: CollectionIcon },
  { to: "/subscribers", label: "Subscribers", icon: UsersIcon },
];

const footerLinks = [
  { to: "/support", label: "Support", icon: SupportIcon },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div className={`sidebar-backdrop ${open ? "show" : ""}`} onClick={onClose} />
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <nav className="sidebar-nav">
          {primaryLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
              onClick={onClose}
            >
              <link.icon />
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        <nav className="sidebar-footer">
          {footerLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
              onClick={onClose}
            >
              <link.icon />
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5z" />
    </svg>
  );
}

function LikeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 11v10H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3zm3 10h6.2a2 2 0 0 0 1.9-1.4l2.3-7A1.5 1.5 0 0 0 19 10.5h-5.2l.8-3.7A1.8 1.8 0 0 0 13 4.7L10 11h0v10z" />
    </svg>
  );
}

function HistoryIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4.5 12a7.5 7.5 0 1 0 2-5.1" />
      <path d="M4.5 5.5V8H7M12 8v5l3 2" />
    </svg>
  );
}

function ContentIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 9h8M8 13h5" />
    </svg>
  );
}

function CollectionIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7h16v12H4zM7 7V5h10v2" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.7-3 2.8-4.5 5.5-4.5s4.8 1.5 5.5 4.5" />
      <circle cx="17" cy="9" r="2.2" />
      <path d="M16 14.6c2 .3 3.5 1.5 4.2 3.4" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 16.2v.3M9.5 9.6A2.5 2.5 0 0 1 12 8c1.4 0 2.5 1 2.5 2.3 0 1.5-1.3 2-2.5 2.5v.8" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a7.8 7.8 0 0 0 .1-6l-2 .3a5.8 5.8 0 0 0-1.3-2.2l1.2-1.6a8 8 0 0 0-4.3-2.2l-.4 2A6 6 0 0 0 10 5.4l-.4-2A8 8 0 0 0 5.4 5.7l1.2 1.6A5.8 5.8 0 0 0 5.3 9.5l-2-.3a7.8 7.8 0 0 0 .1 6l2-.3c.3.8.7 1.6 1.3 2.2L5.4 18.7a8 8 0 0 0 4.3 2.2l.4-2a6 6 0 0 0 2.6.1l.4 2a8 8 0 0 0 4.3-2.2l-1.2-1.6c.6-.6 1-1.4 1.3-2.2l2 .3z" />
    </svg>
  );
}
