import React from "react";

const Navbar: React.FC = () => (
  <nav className="navbar">
    <img src="/logo.png" alt="Pixell River Logo" className="logo" />
    <ul className="nav-links">
      <li><a href="#">Employees</a></li>
      <li><a href="#">Organization</a></li>
    </ul>
  </nav>
);

export default Navbar;
