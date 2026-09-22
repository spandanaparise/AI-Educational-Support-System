import Navbar from "../components/Navbar";
import { useState } from "react";
import "./StudyPlan.css";

function StudyPlan() {
  const [planGenerated, setPlanGenerated] = useState(false);

  const [subject, setSubject] = useState("Mathematics");
  const [studyTime, setStudyTime] = useState("1 Hour");
  const [goal, setGoal] = useState("Improve Understanding");
  const [preference, setPreference] = useState("Simple Explanations");

  const generatePlan = () => {
    setPlanGenerated(true);
  };

  return (
    <div className="study-plan-page">
      <Navbar />

      <main className="study-plan-content">

        <section className="study-plan-header">

          <span className="study-plan-label">
            🤖 AI PERSONALIZED LEARNING
          </span>

          <h1>
            Your Study Plan, <span>Your Way.</span>
          </h1>

          <p>
            Get a personalized study plan based on your subjects,
            learning goals, available time, and learning progress.
          </p>

        </section>

        <section className="plan-form-card">

          <div className="form-heading">
            <span>PERSONALIZE YOUR PLAN</span>

            <h2>
              🎯 Tell us about your learning goals
            </h2>
          </div>

          <div className="form-grid">

            <div className="form-group">
              <label>Main Subject</label>

              <select
                value={subject}
                onChange={(e) =>
                  setSubject(e.target.value)
                }
              >
                <option>Mathematics</option>
                <option>Science</option>
                <option>Computer Science</option>
                <option>English</option>
              </select>
            </div>

            <div className="form-group">
              <label>Daily Study Time</label>

              <select
                value={studyTime}
                onChange={(e) =>
                  setStudyTime(e.target.value)
                }
              >
                <option>30 Minutes</option>
                <option>1 Hour</option>
                <option>2 Hours</option>
                <option>3 Hours</option>
              </select>
            </div>

            <div className="form-group">
              <label>Learning Goal</label>

              <select
                value={goal}
                onChange={(e) =>
                  setGoal(e.target.value)
                }
              >
                <option>Improve Understanding</option>
                <option>Exam Preparation</option>
                <option>Practice More</option>
                <option>Complete Syllabus</option>
              </select>
            </div>

            <div className="form-group">
              <label>Learning Preference</label>

              <select
                value={preference}
                onChange={(e) =>
                  setPreference(e.target.value)
                }
              >
                <option>Simple Explanations</option>
                <option>Videos</option>
                <option>Practice Questions</option>
                <option>Mixed Learning</option>
              </select>
            </div>

          </div>

          <button
            className="generate-plan-button"
            onClick={generatePlan}
          >
            ✨ Generate My Study Plan
          </button>

        </section>

        {planGenerated && (
          <section className="generated-plan">

            <div className="generated-header">

              <div>
                <span>AI GENERATED PLAN</span>

                <h2>
                  📅 Your Personalized Study Schedule
                </h2>
              </div>

              <div className="ai-badge">
                🤖 AI Plan
              </div>

            </div>

            <div className="plan-summary">

              <div>
                <strong>{subject}</strong>
                <span>Subject</span>
              </div>

              <div>
                <strong>{studyTime}</strong>
                <span>Per Day</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Study Days</span>
              </div>

              <div>
                <strong>AI</strong>
                <span>Personalized</span>
              </div>

            </div>

            <div className="day-grid">

              <div className="day-card">

                <span className="day-number">
                  DAY 01
                </span>

                <h3>
                  📖 Learn the Basics
                </h3>

                <p>
                  Start learning {subject} using
                  {preference.toLowerCase()}.
                </p>

                <div className="task">
                  ✓ Read learning material
                </div>

                <div className="task">
                  ✓ Study important concepts
                </div>

                <div className="task">
                  ✓ Complete 5 practice questions
                </div>

              </div>

              <div className="day-card">

                <span className="day-number">
                  DAY 02
                </span>

                <h3>
                  🧠 Practice Concepts
                </h3>

                <p>
                  Strengthen your {subject} knowledge
                  through examples and practice.
                </p>

                <div className="task">
                  ✓ Review yesterday's lesson
                </div>

                <div className="task">
                  ✓ Solve practice exercises
                </div>

                <div className="task">
                  ✓ Review mistakes
                </div>

              </div>

              <div className="day-card">

                <span className="day-number">
                  DAY 03
                </span>

                <h3>
                  📝 Test Your Knowledge
                </h3>

                <p>
                  Test your understanding and prepare
                  for your goal: {goal}.
                </p>

                <div className="task">
                  ✓ Take a practice quiz
                </div>

                <div className="task">
                  ✓ Identify difficult topics
                </div>

                <div className="task">
                  ✓ Review weak areas
                </div>

              </div>

            </div>

          </section>
        )}

        <section className="ai-plan-info">

          <div className="ai-plan-icon">
            🤖
          </div>

          <div>

            <h2>
              How AI Personalizes Your Plan
            </h2>

            <p>
              The system can use your learning activity,
              quiz performance, completed materials, and
              weak topics to create a study plan that
              matches your learning needs.
            </p>

            <div className="ai-plan-points">
              <span>✓ Your progress</span>
              <span>✓ Quiz performance</span>
              <span>✓ Weak topics</span>
              <span>✓ Learning goals</span>
            </div>

          </div>

        </section>

        <div className="study-plan-actions">

          <a href="/dashboard">
            ← Back to Dashboard
          </a>

          <a href="/ai-support">
            🤖 AI Learning Support
          </a>

        </div>

      </main>
    </div>
  );
}

export default StudyPlan;