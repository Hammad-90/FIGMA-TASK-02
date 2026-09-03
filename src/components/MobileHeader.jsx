import React from 'react';

const SearchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

function MobileHeader() {
  return (
    <header className="mobile-header">
      <div className="mobile-logo">
        <div className="logo-icon">▶</div>
        <span>PLAY</span>
      </div>
      <button aria-label="Search">
        <SearchIcon />
      </button>
    </header>
  );
}

export default MobileHeader;
