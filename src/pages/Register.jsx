import Navbar from "../components/Navbar";
import { useState } from "react";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    // Temporary frontend registration
    window.location.href = "/login";
  };

  return (
    <div className="register-page">
      <Navbar />

      <div className="register-container">

        <h1>Create Your Account 🎓</h1>

        <p>
          Join the AI Educational Support System.
        </p>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && (
            <p className="register-error">
              {error}
            </p>
          )}

          <button type="submit">
            Register
          </button>

        </form>

        <p className="login-text">
          Already have an account?{" "}
          <a href="/login">
            Login
          </a>
        </p>

      </div>
    </div>
  );
}

export default Register;