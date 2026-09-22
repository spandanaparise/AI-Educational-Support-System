import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        <img src={logo} alt="AI Educational Support Logo" />
      </a>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/resources">Resources</a>
        <a href="/ai-support">AI Support</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>
  );
}

export default Navbar;