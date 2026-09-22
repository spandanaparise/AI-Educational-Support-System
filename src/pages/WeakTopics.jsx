import Navbar from "../components/Navbar";
import { useState } from "react";
import "./WeakTopics.css";

function WeakTopics() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [showRecommendation, setShowRecommendation] = useState(false);

  const topics = {
    Mathematics: {
      icon: "📐",
      recommendation:
        "Practice algebraic equations and basic problem-solving exercises before moving to advanced topics."
    },

    Science: {
      icon: "🔬",
      recommendation:
        "Review basic physics concepts such as force, motion, and energy using simple examples."
    },

    "Computer Science": {
      icon: "💻",
      recommendation:
        "Practice Python fundamentals, especially conditions, loops, functions, and basic problem solving."
    },

    English: {
      icon: "📖",
      recommendation:
        "Practice vocabulary, sentence formation, reading comprehension, and everyday communication."
    }
  };

  const handleAnalyze = () => {
    if (!selectedTopic) return;

    setShowRecommendation(true);
  };

  return (
    <div className="weak-topics-page">
      <Navbar />

      <main className="weak-topics-content">

        <section className="weak-topics-header">

          <span className="weak-topics-label">
            💡 AI LEARNING INSIGHTS
          </span>

          <h1>
            Improve Your <span>Weak Topics.</span>
          </h1>

          <p>
            Identify subjects that need more attention and
            receive personalized learning recommendations.
          </p>

        </section>

        <section className="weak-analysis-card">

          <div className="weak-analysis-icon">
            🤖
          </div>

          <div className="weak-analysis-content">

            <span>
              AI WEAK-TOPIC DETECTION
            </span>

            <h2>
              Which subject needs more practice?
            </h2>

            <p>
              Select a subject to receive a learning
              recommendation.
            </p>

            <select
              value={selectedTopic}
              onChange={(e) => {
                setSelectedTopic(e.target.value);
                setShowRecommendation(false);
              }}
            >
              <option value="">
                Select a subject
              </option>

              <option value="Mathematics">
                Mathematics
              </option>

              <option value="Science">
                Science
              </option>

              <option value="Computer Science">
                Computer Science
              </option>

              <option value="English">
                English
              </option>
            </select>

            <button
              onClick={handleAnalyze}
              disabled={!selectedTopic}
            >
              🤖 Analyze Topic
            </button>

          </div>

        </section>

        {showRecommendation && selectedTopic && (

          <section className="recommendation-card">

            <div className="recommendation-icon">
              {topics[selectedTopic].icon}
            </div>

            <div>

              <span>
                AI RECOMMENDATION
              </span>

              <h2>
                {selectedTopic}
              </h2>

              <p>
                {topics[selectedTopic].recommendation}
              </p>

              <div className="recommendation-points">

                <span>
                  ✓ Review learning materials
                </span>

                <span>
                  ✓ Practice related questions
                </span>

                <span>
                  ✓ Take a quiz after practicing
                </span>

              </div>

            </div>

          </section>

        )}

        <section className="weak-topic-grid">

          <div className="weak-topic-card">

            <div className="weak-topic-icon">
              📐
            </div>

            <span>
              MATHEMATICS
            </span>

            <h3>
              Algebra & Equations
            </h3>

            <div className="topic-progress">

              <div className="topic-progress-bar">
                <div
                  className="topic-progress-fill"
                  style={{ width: "45%" }}
                ></div>
              </div>

              <strong>
                45%
              </strong>

            </div>

            <p>
              More practice recommended
            </p>

          </div>

          <div className="weak-topic-card">

            <div className="weak-topic-icon">
              🔬
            </div>

            <span>
              SCIENCE
            </span>

            <h3>
              Physics Basics
            </h3>

            <div className="topic-progress">

              <div className="topic-progress-bar">
                <div
                  className="topic-progress-fill"
                  style={{ width: "62%" }}
                ></div>
              </div>

              <strong>
                62%
              </strong>

            </div>

            <p>
              Continue practicing
            </p>

          </div>

          <div className="weak-topic-card">

            <div className="weak-topic-icon">
              💻
            </div>

            <span>
              COMPUTER SCIENCE
            </span>

            <h3>
              Python Fundamentals
            </h3>

            <div className="topic-progress">

              <div className="topic-progress-bar">
                <div
                  className="topic-progress-fill"
                  style={{ width: "78%" }}
                ></div>
              </div>

              <strong>
                78%
              </strong>

            </div>

            <p>
              Good progress
            </p>

          </div>

          <div className="weak-topic-card">

            <div className="weak-topic-icon">
              📖
            </div>

            <span>
              ENGLISH
            </span>

            <h3>
              Communication Skills
            </h3>

            <div className="topic-progress">

              <div className="topic-progress-bar">
                <div
                  className="topic-progress-fill"
                  style={{ width: "55%" }}
                ></div>
              </div>

              <strong>
                55%
              </strong>

            </div>

            <p>
              More practice recommended
            </p>

          </div>

        </section>

        <section className="weak-info-card">

          <div className="weak-info-icon">
            🧠
          </div>

          <div>

            <span>
              HOW AI CAN HELP
            </span>

            <h2>
              Personalized Learning Recommendations
            </h2>

            <p>
              The AI system can analyze quiz results,
              completed learning materials, and student
              activity to identify topics that need more
              attention.
            </p>

            <div className="weak-info-points">

              <span>
                ✓ Analyze quiz performance
              </span>

              <span>
                ✓ Detect weak topics
              </span>

              <span>
                ✓ Recommend learning materials
              </span>

              <span>
                ✓ Improve study plans
              </span>

            </div>

          </div>

        </section>

        <div className="weak-topics-actions">

          <a href="/dashboard">
            ← Back to Dashboard
          </a>

          <a href="/quizzes">
            📝 Take Quiz
          </a>

          <a href="/study-plan">
            🤖 Study Plan
          </a>

        </div>

      </main>
    </div>
  );
}

export default WeakTopics;