import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Newspaper, LogIn, UserPlus, LogOut, User } from "lucide-react";

export default function Navbar({ currentUser, onLogout }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__brand">
        <Newspaper size={22} />
        <span>4 Recent News</span>
      </NavLink>

      <div className="navbar__links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/reviews" className={({ isActive }) => (isActive ? "active" : "")}>
          Reviews
        </NavLink>
        <NavLink to="/saved" className={({ isActive }) => (isActive ? "active" : "")}>
          Saved News
        </NavLink>
      </div>

      {currentUser ? (
        <div className="navbar__user">
          <span className="navbar__username">
            <User size={14} /> {currentUser.name}
          </span>
          <button
            className="btn btn--ghost"
            onClick={() => {
              onLogout();
              navigate("/login");
            }}
          >
            <LogOut size={14} /> Logout
          </button>
        </div>
      ) : (
        <div className="navbar__user">
          <button className="btn btn--ghost" onClick={() => navigate("/login")}>
            <LogIn size={14} /> Login
          </button>
          <button className="btn btn--outline" onClick={() => navigate("/register")}>
            <UserPlus size={14} /> Register
          </button>
        </div>
      )}
    </nav>
  );
}
