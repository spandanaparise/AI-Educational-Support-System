import Navbar from "../components/Navbar";
import { useState } from "react";
import "./TeacherDashboard.css";

function TeacherDashboard() {
  const [message, setMessage] = useState("");

  const handleToolClick = (tool) => {
    setMessage(
      `${tool} selected. This feature will be connected to the backend later.`
    );
  };

  return (
    <div className="teacher-dashboard-page">
      <Navbar />

      <main className="teacher-dashboard-content">

        <section className="teacher-header">

          <div>
            <span className="teacher-label">
              👩‍🏫 TEACHER DASHBOARD
            </span>

            <h1>
              Manage Your <span>Classroom.</span>
            </h1>

            <p>
              Monitor students, share learning materials,
              assign tasks, and track academic progress.
            </p>
          </div>

          <div className="teacher-profile">

            <div className="teacher-profile-avatar">
              👩‍🏫
            </div>

            <div>
              <strong>Teacher</strong>
              <p>Mathematics Instructor</p>
            </div>

          </div>

        </section>

        <section className="teacher-overview">

          <div className="teacher-stat-card peach-stat">
            <div className="teacher-stat-icon">👨‍🎓</div>

            <div>
              <span>STUDENTS</span>
              <h2>48</h2>
              <p>Active students</p>
            </div>
          </div>

          <div className="teacher-stat-card lavender-stat">
            <div className="teacher-stat-icon">📚</div>

            <div>
              <span>MATERIALS</span>
              <h2>24</h2>
              <p>Learning resources</p>
            </div>
          </div>

          <div className="teacher-stat-card blush-stat">
            <div className="teacher-stat-icon">📝</div>

            <div>
              <span>TASKS</span>
              <h2>12</h2>
              <p>Assigned tasks</p>
            </div>
          </div>

          <div className="teacher-stat-card cream-stat">
            <div className="teacher-stat-icon">📊</div>

            <div>
              <span>AVERAGE PROGRESS</span>
              <h2>72%</h2>
              <p>Class performance</p>
            </div>
          </div>

        </section>

        <section className="teacher-section">

          <div className="teacher-section-heading">
            <span>CLASSROOM MANAGEMENT</span>
            <h2>📋 Teaching Tools</h2>
          </div>

          <div className="teacher-tools-grid">

            <div className="teacher-tool-card">

              <div className="teacher-tool-icon">
                👨‍🎓
              </div>

              <h3>
                Student Progress
              </h3>

              <p>
                Monitor student learning progress,
                completed activities, and quiz performance.
              </p>

              <button
                onClick={() =>
                  handleToolClick("Student Progress")
                }
              >
                View Students →
              </button>

            </div>

            <div className="teacher-tool-card">

              <div className="teacher-tool-icon">
                📚
              </div>

              <h3>
                Learning Materials
              </h3>

              <p>
                Upload and organize notes, videos,
                assignments, and other learning resources.
              </p>

              <button
                onClick={() =>
                  handleToolClick("Learning Materials")
                }
              >
                Manage Materials →
              </button>

            </div>

            <div className="teacher-tool-card">

              <div className="teacher-tool-icon">
                📝
              </div>

              <h3>
                Tasks & Assignments
              </h3>

              <p>
                Create tasks and assignments and monitor
                whether students have completed them.
              </p>

              <button
                onClick={() =>
                  handleToolClick("Tasks & Assignments")
                }
              >
                Manage Tasks →
              </button>

            </div>

            <div className="teacher-tool-card">

              <div className="teacher-tool-icon">
                📊
              </div>

              <h3>
                Performance Reports
              </h3>

              <p>
                View class-level performance and identify
                topics where students need additional support.
              </p>

              <button
                onClick={() =>
                  handleToolClick("Performance Reports")
                }
              >
                View Reports →
              </button>

            </div>

          </div>

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

        <section className="student-performance">

          <div className="teacher-section-heading">
            <span>CLASS PERFORMANCE</span>
            <h2>📊 Student Progress Overview</h2>
          </div>

          <div className="performance-card">

            <div className="performance-row">

              <div className="student-name">
                <div className="student-avatar">A</div>

                <div>
                  <strong>Student A</strong>
                  <p>Mathematics</p>
                </div>
              </div>

              <div className="performance-progress">

                <div className="performance-bar">
                  <div
                    className="performance-fill"
                    style={{ width: "85%" }}
                  ></div>
                </div>

                <span>85%</span>

              </div>

            </div>

            <div className="performance-row">

              <div className="student-name">
                <div className="student-avatar">B</div>

                <div>
                  <strong>Student B</strong>
                  <p>Mathematics</p>
                </div>
              </div>

              <div className="performance-progress">

                <div className="performance-bar">
                  <div
                    className="performance-fill"
                    style={{ width: "68%" }}
                  ></div>
                </div>

                <span>68%</span>

              </div>

            </div>

            <div className="performance-row">

              <div className="student-name">
                <div className="student-avatar">C</div>

                <div>
                  <strong>Student C</strong>
                  <p>Mathematics</p>
                </div>
              </div>

              <div className="performance-progress">

                <div className="performance-bar">
                  <div
                    className="performance-fill"
                    style={{ width: "54%" }}
                  ></div>
                </div>

                <span>54%</span>

              </div>

            </div>

            <div className="performance-row">

              <div className="student-name">
                <div className="student-avatar">D</div>

                <div>
                  <strong>Student D</strong>
                  <p>Mathematics</p>
                </div>
              </div>

              <div className="performance-progress">

                <div className="performance-bar">
                  <div
                    className="performance-fill"
                    style={{ width: "76%" }}
                  ></div>
                </div>

                <span>76%</span>

              </div>

            </div>

          </div>

        </section>

        <section className="teacher-ai-card">

          <div className="teacher-ai-icon">
            🤖
          </div>

          <div>

            <span>
              AI LEARNING INSIGHTS
            </span>

            <h2>
              Identify Students Who Need More Support
            </h2>

            <p>
              AI analysis can use quiz performance,
              learning activity, and completed materials
              to identify weak topics and provide useful
              learning recommendations.
            </p>

            <div className="ai-insight-points">
              <span>✓ Weak-topic detection</span>
              <span>✓ Student progress analysis</span>
              <span>✓ Personalized recommendations</span>
            </div>

          </div>

        </section>

        <div className="teacher-actions">

          <a href="/dashboard">
            ← Student Dashboard
          </a>

          <a href="/resources">
            📚 Learning Resources
          </a>

          <a href="/">
            🏠 Home
          </a>

        </div>

      </main>
    </div>
  );
}

export default TeacherDashboard;