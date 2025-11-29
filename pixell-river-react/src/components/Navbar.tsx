import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useUser, SignInButton, SignOutButton } from "@clerk/clerk-react";

const Navbar: React.FC = () => {
  const location = useLocation();
  const { isSignedIn } = useUser();

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div style={{display:"flex",alignItems:"center",gap:12}}>
        <svg className="logo" width="36" height="36" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
          <rect x="4" y="4" width="56" height="56" rx="8" fill="#0b63a6"/>
          <path d="M16 44 L32 20 L48 44 Z" fill="#fff"/>
        </svg>
        <strong>Pixell River Financial</strong>
      </div>
      <ul className="nav-links">
        <li>
          <Link 
            to="/employees" 
            className={location.pathname === "/employees" ? "active" : ""}
          >
            Employees
          </Link>
        </li>
        <li>
          <Link 
            to="/organization" 
            className={location.pathname === "/organization" ? "active" : ""}
          >
            Organization
          </Link>
        </li>
        <li>
          {isSignedIn ? (
            <SignOutButton>
              <button style={{background:"none",border:"none",color:"inherit",cursor:"pointer",fontWeight:600}}>
                Logout
              </button>
            </SignOutButton>
          ) : (
            <SignInButton>
              <button style={{background:"none",border:"none",color:"inherit",cursor:"pointer",fontWeight:600}}>
                Login
              </button>
            </SignInButton>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
