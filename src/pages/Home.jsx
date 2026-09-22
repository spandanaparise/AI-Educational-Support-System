import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <Navbar />

      <section className="hero">

        <div className="hero-content">

          <h1>
            AI-Based Educational
            <span> Support System</span>
          </h1>

          <p className="hero-subtitle">
            Bridging the Digital Divide in Remote Education
          </p>

          <p className="hero-description">
            Accessible learning resources and educational support
            for students in remote and underserved regions.
          </p>

          <a href="/dashboard" className="start-button">
            Start Learning
          </a>

        </div>

      </section>

      <section className="features">

        <h2>What We Provide</h2>

        <p className="features-intro">
          Learning support designed to make education more accessible
          and engaging.
        </p>

        <div className="feature-container">

          <a href="/resources" className="feature-card">

            <div className="feature-icon">📚</div>

            <h3>Learning Resources</h3>

            <p>
              Access educational notes, study materials, and
              digital learning resources.
            </p>

          </a>

          <a href="/ai-support" className="feature-card">

            <div className="feature-icon">🤖</div>

            <h3>AI Learning Support</h3>

            <p>
              Get learning assistance and support through
              AI-based educational tools.
            </p>

          </a>

          <div className="feature-card">

            <div className="feature-icon">📶</div>

            <h3>Low-Bandwidth Learning</h3>

            <p>
              Support learning in areas with limited internet
              connectivity and digital resources.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;