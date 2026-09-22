import Navbar from "../components/Navbar";
import { useState } from "react";
import "./Quizzes.css";

function Quizzes() {
  const questions = [
    {
      question: "What is the result of 5 + 7?",
      options: ["10", "11", "12", "13"],
      answer: "12"
    },
    {
      question:
        "Which language is commonly used for AI and Machine Learning?",
      options: ["HTML", "Python", "CSS", "SQL"],
      answer: "Python"
    },
    {
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Program Utility",
        "Control Processing User"
      ],
      answer: "Central Processing Unit"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const isCorrect =
      selectedAnswer === questions[currentQuestion].answer;

    const updatedScore = isCorrect ? score + 1 : score;

    if (currentQuestion === questions.length - 1) {
  setScore(updatedScore);

  const finalPercentage = Math.round(
    (updatedScore / questions.length) * 100
  );

  localStorage.setItem(
    "quizScore",
    finalPercentage
  );

  setQuizCompleted(true);

  return;
}

    setScore(updatedScore);
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer("");
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setQuizCompleted(false);
  };

  const percentage = Math.round(
    (score / questions.length) * 100
  );

  const passed = percentage >= 50;

  return (
    <div className="quizzes-page">
      <Navbar />

      <main className="quizzes-content">

        <section className="quizzes-header">

          <span className="quizzes-label">
            📝 OFFLINE QUIZZES
          </span>

          <h1>
            Test Your <span>Knowledge.</span>
          </h1>

          <p>
            Practice your knowledge with quizzes that can
            continue working even when internet connectivity
            is unavailable.
          </p>

        </section>

        <section className="quiz-status-card">

          <div className="quiz-status-icon">
            📥
          </div>

          <div>

            <span>
              OFFLINE READY
            </span>

            <h2>
              Quiz Available Without Internet
            </h2>

            <p>
              Your quiz answers can be stored locally and
              synchronized later when internet becomes available.
            </p>

          </div>

          <div className="offline-ready-badge">
            ● Offline Ready
          </div>

        </section>

        {!quizCompleted ? (

          <section className="quiz-card">

            <div className="quiz-top">

              <div>
                <span>QUESTION</span>

                <h2>
                  {currentQuestion + 1} / {questions.length}
                </h2>
              </div>

              <div className="quiz-subject">
                Computer & General Knowledge
              </div>

            </div>

            <div className="question-progress">

              <div className="question-progress-bar">

                <div
                  className="question-progress-fill"
                  style={{
                    width: `${
                      ((currentQuestion + 1) /
                        questions.length) *
                      100
                    }%`
                  }}
                ></div>

              </div>

            </div>

            <h3 className="question-text">
              {questions[currentQuestion].question}
            </h3>

            <div className="options-container">

              {questions[currentQuestion].options.map(
                (option) => (

                  <button
                    key={option}
                    className={
                      selectedAnswer === option
                        ? "quiz-option selected"
                        : "quiz-option"
                    }
                    onClick={() =>
                      handleAnswer(option)
                    }
                  >

                    <span className="option-circle">
                      {selectedAnswer === option
                        ? "✓"
                        : ""}
                    </span>

                    {option}

                  </button>

                )
              )}

            </div>

            <button
              className="next-question-button"
              onClick={handleNext}
              disabled={!selectedAnswer}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question →"}
            </button>

          </section>

        ) : (

          <section className="quiz-result-card">

            <div className="result-icon">
              {passed ? "🎉" : "📚"}
            </div>

            <span>
              QUIZ COMPLETED
            </span>

            <h2>
              {passed
                ? "Great Job!"
                : "Keep Practicing!"}
            </h2>

            <p>
              {passed
                ? "You have successfully completed the quiz."
                : "Review the learning materials and try the quiz again."}
            </p>

            <div className="score-circle">

              <strong>
                {score}/{questions.length}
              </strong>

              <span>
                Score
              </span>

            </div>

            <div
              style={{
                marginTop: "20px",
                fontSize: "18px",
                fontWeight: "700",
                color: "#5c4b65"
              }}
            >
              {percentage}% Correct
            </div>

            <p className="result-message">
              Your quiz performance can be used by the
              AI system to understand your learning progress
              and identify topics that need more practice.
            </p>

            <button
              className="restart-button"
              onClick={restartQuiz}
            >
              🔄 Try Again
            </button>

          </section>

        )}

        <section className="quiz-features">

          <div className="quiz-feature-card">

            <div className="quiz-feature-icon">
              📥
            </div>

            <h3>
              Offline Access
            </h3>

            <p>
              Take quizzes without requiring an active
              internet connection.
            </p>

          </div>

          <div className="quiz-feature-card">

            <div className="quiz-feature-icon">
              💾
            </div>

            <h3>
              Save Progress
            </h3>

            <p>
              Your quiz activity can be stored and synchronized
              when connectivity returns.
            </p>

          </div>

          <div className="quiz-feature-card">

            <div className="quiz-feature-icon">
              🤖
            </div>

            <h3>
              AI Analysis
            </h3>

            <p>
              Quiz performance can help identify weak topics
              and improve your personalized study plan.
            </p>

          </div>

        </section>

        <div className="quizzes-actions">

          <a href="/dashboard">
            ← Back to Dashboard
          </a>

          <a href="/offline-learning">
            📥 Offline Learning
          </a>

          <a href="/study-plan">
            🤖 Study Plan
          </a>

        </div>

      </main>
    </div>
  );
}

export default Quizzes;