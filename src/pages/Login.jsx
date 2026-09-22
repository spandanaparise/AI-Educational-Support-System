import Navbar from "../components/Navbar";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");

    // Temporary frontend login
    window.location.href = "/dashboard";
  };

  return (
    <div className="login-page">
      <Navbar />

      <div className="login-container">

        <h1>Welcome Back 👋</h1>

        <p>
          Login to access your learning dashboard.
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button type="submit">
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account?{" "}
          <a href="/register">
            Register
          </a>
        </p>

      </div>
    </div>
  );
}

export default Login;