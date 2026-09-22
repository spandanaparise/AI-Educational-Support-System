import Navbar from "../components/Navbar";
import "./Dashboard.css";

function Dashboard() {
  const savedQuizScore = localStorage.getItem("quizScore");
  const savedAIActivity = localStorage.getItem("aiActivity");

  const quizProgress = savedQuizScore
    ? Number(savedQuizScore)
    : 50;

  const aiProgress = savedAIActivity
    ? Number(savedAIActivity)
    : 0;

  return (
    <div className="dashboard-page">
      <Navbar />

      <div className="dashboard-content">
        <h1>Welcome to Your Learning Dashboard 👋</h1>

        <p className="dashboard-intro">
          Learn online or offline, get AI-powered support,
          complete activities, and track your learning progress.
        </p>

        <div className="student-profile">
          <div className="profile-header">
            <div className="profile-avatar">👤</div>

            <div>
              <h2>Student Learning Space</h2>
              <p>Your personalized learning area.</p>
            </div>
          </div>
        </div>

        <h2 className="section-title">Learning Features</h2>

        <div className="dashboard-feature-grid">

          <div className="feature-dashboard-card">
            <div className="dashboard-feature-icon">🎓</div>
            <h3>Hybrid Classes</h3>
            <p>
              Attend online classes or access learning materials
              offline when internet connectivity is limited.
            </p>
            <a href="/classes">View Classes</a>
          </div>

          <div className="feature-dashboard-card">
            <div className="dashboard-feature-icon">📥</div>
            <h3>Offline Learning</h3>
            <p>
              Continue learning offline and synchronize your
              learning activity when internet becomes available.
            </p>
            <a href="/offline-learning">Offline Learning</a>
          </div>

          <div className="feature-dashboard-card">
            <div className="dashboard-feature-icon">📶</div>
            <h3>Low-Data Mode</h3>
            <p>
              Reduce data usage while accessing educational
              content and learning resources.
            </p>
            <a href="/low-data">Enable Low-Data Mode</a>
          </div>

          <div className="feature-dashboard-card">
            <div className="dashboard-feature-icon">🤖</div>
            <h3>AI Study Plan</h3>
            <p>
              Get a personalized study plan based on your
              learning activities and goals.
            </p>
            <a href="/study-plan">Create Study Plan</a>
          </div>

          <div className="feature-dashboard-card">
            <div className="dashboard-feature-icon">💡</div>
            <h3>Weak Topics</h3>
            <p>
              Identify topics that need more attention and
              receive AI-based learning recommendations.
            </p>
            <a href="/weak-topics">View Recommendations</a>
          </div>

          <div className="feature-dashboard-card">
            <div className="dashboard-feature-icon">📝</div>
            <h3>Offline Quizzes</h3>
            <p>
              Practice your knowledge with quizzes even when
              an internet connection is unavailable.
            </p>
            <a href="/quizzes">Take Quiz</a>
          </div>

          <div className="feature-dashboard-card">
            <div className="dashboard-feature-icon">📚</div>
            <h3>Materials & Tasks</h3>
            <p>
              Access study materials and keep track of your
              assigned learning tasks.
            </p>
            <a href="/resources">View Materials</a>
          </div>

          <div className="feature-dashboard-card">
            <div className="dashboard-feature-icon">📊</div>
            <h3>Progress Tracker</h3>
            <p>
              Monitor your completed activities, quiz
              performance, and overall learning progress.
            </p>
            <a href="#progress">View Progress</a>
          </div>

        </div>

        <section className="progress-section" id="progress">
          <h2>📊 My Learning Progress</h2>

          <div className="progress-container">

            <div className="progress-card">
              <h3>📚 Learning Materials</h3>
              <p>Materials Completed</p>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "70%" }}
                ></div>
              </div>

              <span>70% completed</span>
            </div>

            <div className="progress-card">
              <h3>📝 Quizzes</h3>
              <p>Latest Quiz Performance</p>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${quizProgress}%` }}
                ></div>
              </div>

              <span>{quizProgress}% completed</span>
            </div>

            <div className="progress-card">
              <h3>🤖 AI Learning</h3>
              <p>AI Support Activity</p>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${aiProgress}%` }}
                ></div>
              </div>

              <span>{aiProgress}% activity</span>
            </div>

          </div>
        </section>

        <div className="language-support">
          <h2>🌐 Language Support</h2>

          <p>
            Choose simple or local-language learning support
            when available.
          </p>

          <select
            defaultValue="English"
            onChange={(e) => {
              if (e.target.value !== "English") {
                window.location.href = "/language-support";
              }
            }}
          >
            <option value="English">English</option>
            <option value="Simple English">Simple English</option>
            <option value="Telugu">Telugu</option>
            <option value="Hindi">Hindi</option>
          </select>

          <a
            href="/language-support"
            className="language-support-link"
          >
            🌐 Open Language Support
          </a>
        </div>

        <div className="dashboard-actions">
          <a href="/" className="home-button">
            🏠 Back to Home
          </a>

          <a href="/login" className="logout-button">
            🚪 Logout
          </a>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;