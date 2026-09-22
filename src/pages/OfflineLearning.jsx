import Navbar from "../components/Navbar";
import { useState } from "react";
import "./OfflineLearning.css";

function OfflineLearning() {
  const [message, setMessage] = useState("");

  const handleContinue = (lessonName) => {
    setMessage(
      `📚 Opening "${lessonName}". The offline lesson content will be connected later.`
    );
  };

  const handleSync = () => {
    setMessage(
      "🔄 Sync started. Your offline learning progress will be synchronized when the backend is connected."
    );
  };

  return (
    <div className="offline-learning-page">
      <Navbar />

      <main className="offline-learning-content">

        <section className="offline-header">
          <span className="offline-label">
            📥 OFFLINE LEARNING
          </span>

          <h1>
            Learn Without <span>Internet.</span>
          </h1>

          <p>
            Download your learning materials when you are connected
            and continue studying even when the internet is unavailable.
          </p>
        </section>

        <section className="connection-card">

          <div className="connection-icon">
            📶
          </div>

          <div className="connection-info">
            <span>CONNECTION STATUS</span>
            <h2>Offline Mode Ready</h2>
            <p>
              Your downloaded learning materials are available.
            </p>
          </div>

          <div className="offline-status">
            ● Offline
          </div>

        </section>

        <section className="offline-section">

          <div className="offline-section-heading">

            <div>
              <span>AVAILABLE OFFLINE</span>
              <h2>📚 My Downloaded Lessons</h2>
            </div>

            <span className="material-count">
              4 Materials
            </span>

          </div>

          <div className="offline-material-grid">

            <div className="offline-material-card">

              <div className="material-icon coral-icon">
                📐
              </div>

              <div className="material-details">

                <span className="material-subject">
                  Mathematics
                </span>

                <h3>
                  Algebra Basics
                </h3>

                <p>
                  Introduction to algebraic expressions,
                  equations, and basic problem solving.
                </p>

                <div className="material-meta">
                  <span>📖 6 Lessons</span>
                  <span>⏱ 45 min</span>
                </div>

              </div>

              <button
                onClick={() =>
                  handleContinue("Algebra Basics")
                }
              >
                Continue →
              </button>

            </div>

            <div className="offline-material-card">

              <div className="material-icon lavender-icon">
                🔬
              </div>

              <div className="material-details">

                <span className="material-subject">
                  Science
                </span>

                <h3>
                  Introduction to Physics
                </h3>

                <p>
                  Learn basic concepts of motion, force,
                  energy, and everyday physics.
                </p>

                <div className="material-meta">
                  <span>📖 8 Lessons</span>
                  <span>⏱ 1 hr</span>
                </div>

              </div>

              <button
                onClick={() =>
                  handleContinue("Introduction to Physics")
                }
              >
                Continue →
              </button>

            </div>

            <div className="offline-material-card">

              <div className="material-icon blush-icon">
                💻
              </div>

              <div className="material-details">

                <span className="material-subject">
                  Computer Science
                </span>

                <h3>
                  Python Fundamentals
                </h3>

                <p>
                  Practice Python variables, conditions,
                  loops, and basic programming concepts.
                </p>

                <div className="material-meta">
                  <span>📖 10 Lessons</span>
                  <span>⏱ 2 hrs</span>
                </div>

              </div>

              <button
                onClick={() =>
                  handleContinue("Python Fundamentals")
                }
              >
                Continue →
              </button>

            </div>

            <div className="offline-material-card">

              <div className="material-icon peach-icon">
                📖
              </div>

              <div className="material-details">

                <span className="material-subject">
                  English
                </span>

                <h3>
                  Communication Skills
                </h3>

                <p>
                  Improve vocabulary, reading, writing,
                  and everyday communication skills.
                </p>

                <div className="material-meta">
                  <span>📖 6 Lessons</span>
                  <span>⏱ 1 hr</span>
                </div>

              </div>

              <button
                onClick={() =>
                  handleContinue("Communication Skills")
                }
              >
                Continue →
              </button>

            </div>

          </div>

        </section>

        <section className="smart-sync">

          <div className="sync-visual">
            🔄
          </div>

          <div className="sync-text">

            <span>SMART SYNCHRONIZATION</span>

            <h2>
              Your Learning Never Stops
            </h2>

            <p>
              Activities completed while offline can be synchronized
              automatically when an internet connection becomes available.
            </p>

            <div className="sync-points">
              <div>✓ Offline activity saved</div>
              <div>✓ Progress preserved</div>
              <div>✓ Automatically synchronized</div>
            </div>

          </div>

          <button
            className="sync-now-button"
            onClick={handleSync}
          >
            Sync Now
          </button>

        </section>

        <section className="storage-section">

          <div className="storage-header">

            <div>
              <span>OFFLINE STORAGE</span>
              <h2>📦 Downloaded Content</h2>
            </div>

            <strong>62%</strong>

          </div>

          <div className="storage-bar">
            <div className="storage-fill"></div>
          </div>

          <p>
            620 MB of 1 GB used
          </p>

        </section>

        {message && (
          <div
            style={{
              marginTop: "25px",
              padding: "16px 20px",
              background: "#fff0ec",
              border: "1px solid #eadfe3",
              borderRadius: "12px",
              color: "#5c4b65",
              fontSize: "14px",
              lineHeight: "1.6"
            }}
          >
            {message}
          </div>
        )}

        <div className="offline-actions">

          <a href="/dashboard">
            ← Back to Dashboard
          </a>

          <a href="/classes">
            🎓 View Classes
          </a>

        </div>

      </main>
    </div>
  );
}

export default OfflineLearning;