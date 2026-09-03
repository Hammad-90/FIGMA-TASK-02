import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePlay } from "../context/PlayContext";
import "./Header.css";

export default function Header({ onMenuClick }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { user, logout } = usePlay();

  function handleSearch(event) {
    event.preventDefault();
    const value = query.trim();
    if (value) {
      navigate(`/search?q=${encodeURIComponent(value)}`);
    } else {
      navigate("/");
    }
  }

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuClick} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
        <Link to="/" className="logo" aria-label="PLAY home">
  <img
    src="/logo.png"
    alt="PLAY"
    className="logo-image"
    style={{ height: 50, width: "auto", maxWidth: 110, maxHeight: 50 }}
  />
</Link>
      </div>

      <form className="search-form" onSubmit={handleSearch}>
        <span className="search-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path
              d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm8.1-1.4 3.2 3.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <input
          type="search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search videos"
        />
      </form>

      <div className="header-right">
        <button className="icon-btn" aria-label="More options">
          <span />
          <span />
          <span />
        </button>
        {user ? (
          <>
            <span className="user-chip">{user.name}</span>
            <button className="login-link ghost-text" onClick={logout}>
              Log out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-link">
              Log in
            </Link>
            <Link to="/signup" className="signup-btn">
              Sign up
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
