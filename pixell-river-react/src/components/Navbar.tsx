import React from "react";

const Navbar: React.FC = () => (
  <nav className="navbar" role="navigation" aria-label="Main navigation">
    <div style={{display:"flex",alignItems:"center",gap:12}}>
      <svg className="logo" width="36" height="36" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <rect x="4" y="4" width="56" height="56" rx="8" fill="#0b63a6"/>
        <path d="M16 44 L32 20 L48 44 Z" fill="#fff"/>
      </svg>
      <strong>Pixell River Financial</strong>
    </div>
    <ul className="nav-links">
      <li><a href="#employees">Employees</a></li>
      <li><a href="#organization">Organization</a></li>
    </ul>
  </nav>
);

export default Navbar;
