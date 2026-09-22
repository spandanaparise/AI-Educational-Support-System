import Navbar from "../components/Navbar";
import { useState } from "react";
import "./Classes.css";

function Classes() {
  const [message, setMessage] = useState("");

  const handleJoinClass = (className) => {
    setMessage(`You selected "${className}". The live class feature will connect to the backend later.`);
  };

  const handleContinueLearning = (lessonName) => {
    setMessage(`Opening "${lessonName}". Offline lesson content will be connected later.`);
  };

  const handleSync = () => {
    setMessage("🔄 Sync started. Your offline learning activity will be synchronized when the backend is connected.");
  };

  return (
    <div className="classes-page">
      <Navbar />

      <main className="classes-content">

        <section className="classes-header">
          <span className="classes-label">
            🎓 HYBRID LEARNING
          </span>

          <h1>
            Learn <span>Anywhere.</span>
          </h1>

          <p>
            Join online classes when you have internet access
            or continue learning with materials available offline.
          </p>
        </section>

        <section className="learning-status">

          <div className="status-item">
            <div className="status-icon online-icon">
              🟢
            </div>

            <div>
              <strong>Online Learning</strong>
              <p>Live classes and interactive sessions</p>
            </div>
          </div>

          <div className="status-divider"></div>

          <div className="status-item">
            <div className="status-icon offline-icon">
              📥
            </div>

            <div>
              <strong>Offline Learning</strong>
              <p>Downloaded lessons available anytime</p>
            </div>
          </div>

        </section>

        <section className="class-section">

          <div className="section-heading">

            <div>
              <span>LIVE NOW & UPCOMING</span>
              <h2>🌐 Online Classes</h2>
            </div>

            <div className="live-badge">
              ● Online
            </div>

          </div>

          <div className="class-grid">

            <div className="class-card online-card">

              <div className="class-top">
                <span className="subject-tag coral-tag">
                  Mathematics
                </span>

                <span className="class-time">
                  10:00 AM
                </span>
              </div>

              <h3>
                Introduction to Algebra
              </h3>

              <p>
                Learn the fundamentals of algebra through
                a simple interactive class.
              </p>

              <div className="teacher">

                <div className="teacher-avatar">
                  👩‍🏫
                </div>

                <div>
                  <strong>Teacher</strong>
                  <p>Mathematics Instructor</p>
                </div>

              </div>

              <button
                className="join-button"
                onClick={() =>
                  handleJoinClass("Introduction to Algebra")
                }
              >
                Join Class →
              </button>

            </div>

            <div className="class-card online-card">

              <div className="class-top">

                <span className="subject-tag lavender-tag">
                  Science
                </span>

                <span className="class-time">
                  2:00 PM
                </span>

              </div>

              <h3>
                Basics of Physics
              </h3>

              <p>
                Understand important physics concepts
                with examples and demonstrations.
              </p>

              <div className="teacher">

                <div className="teacher-avatar">
                  👨‍🏫
                </div>

                <div>
                  <strong>Teacher</strong>
                  <p>Science Instructor</p>
                </div>

              </div>

              <button
                className="join-button"
                onClick={() =>
                  handleJoinClass("Basics of Physics")
                }
              >
                Join Class →
              </button>

            </div>

          </div>

        </section>

        <section className="class-section offline-section">

          <div className="section-heading">

            <div>
              <span>AVAILABLE WITHOUT INTERNET</span>
              <h2>📥 Offline Classes</h2>
            </div>

            <div className="offline-badge">
              Offline Ready
            </div>

          </div>

          <div className="class-grid">

            <div className="class-card offline-card">

              <div className="class-top">

                <span className="subject-tag blush-tag">
                  Computer Science
                </span>

                <span className="download-status">
                  ✓ Downloaded
                </span>

              </div>

              <h3>
                Python Programming Basics
              </h3>

              <p>
                Learn Python fundamentals using
                downloadable lessons and examples.
              </p>

              <div className="offline-info">
                <span>📚 8 Lessons</span>
                <span>⏱ 2 Hours</span>
              </div>

              <button
                className="offline-button"
                onClick={() =>
                  handleContinueLearning(
                    "Python Programming Basics"
                  )
                }
              >
                Continue Learning →
              </button>

            </div>

            <div className="class-card offline-card">

              <div className="class-top">

                <span className="subject-tag peach-tag">
                  English
                </span>

                <span className="download-status">
                  ✓ Downloaded
                </span>

              </div>

              <h3>
                Communication Skills
              </h3>

              <p>
                Improve reading, writing, and communication
                skills with offline learning materials.
              </p>

              <div className="offline-info">
                <span>📚 6 Lessons</span>
                <span>⏱ 1.5 Hours</span>
              </div>

              <button
                className="offline-button"
                onClick={() =>
                  handleContinueLearning(
                    "Communication Skills"
                  )
                }
              >
                Continue Learning →
              </button>

            </div>

          </div>

        </section>

        <section className="sync-section">

          <div className="sync-icon">
            🔄
          </div>

          <div className="sync-content">

            <h2>
              Smart Learning Sync
            </h2>

            <p>
              Your offline learning activity can be synchronized
              when an internet connection becomes available.
            </p>

            <div className="sync-status">
              <span className="sync-dot"></span>
              Ready to synchronize
            </div>

          </div>

          <button
            className="sync-button"
            onClick={handleSync}
          >
            Sync Now
          </button>

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

        <div className="classes-actions">
          <a href="/dashboard">
            ← Back to Dashboard
          </a>
        </div>

      </main>
    </div>
  );
}

export default Classes;