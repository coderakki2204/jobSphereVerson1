import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-bar">
      {/* Logo */}
      <div className="logo bg-blue-400">
        <img src="./src/photos/logo.svg" alt="logo" />
      </div>

      {/* Nav links */}
      <div className={`nav ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/application" onClick={() => setIsOpen(false)}>My Application</Link>
        <Link to="/companies" onClick={() => setIsOpen(false)}>Companies</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
      </div>

      {/* Login / Signup (desktop only) */}
      <div className="ls-button">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>

      {/* Hamburger (mobile only) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
