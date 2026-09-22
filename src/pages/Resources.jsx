import Navbar from "../components/Navbar";
import { useState } from "react";
import "./Resources.css";

function Resources() {
  const [selectedResource, setSelectedResource] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [showMaterial, setShowMaterial] = useState(false);

  const subjects = [
    "Mathematics",
    "Science",
    "Computer Science",
    "English"
  ];

  const subjectContent = {
    Mathematics: {
      description:
        "Learn important mathematical concepts through simple explanations and practice.",
      topic: "Algebra Basics",
      points: [
        "Variables represent unknown values.",
        "An equation contains two expressions that are equal.",
        "Solve equations by performing the same operation on both sides."
      ],
      example:
        "Example: If x + 5 = 12, then x = 7."
    },

    Science: {
      description:
        "Explore basic science concepts using simple explanations and examples.",
      topic: "Introduction to Physics",
      points: [
        "Force can change the motion of an object.",
        "Energy is the ability to do work.",
        "Motion describes how an object changes its position."
      ],
      example:
        "Example: A moving bicycle has kinetic energy."
    },

    "Computer Science": {
      description:
        "Learn programming and computer science concepts step by step.",
      topic: "Python Fundamentals",
      points: [
        "Variables are used to store data.",
        "Conditions help programs make decisions.",
        "Loops allow repeated execution of instructions."
      ],
      example:
        "Example: name = 'Student' stores text inside a variable."
    },

    English: {
      description:
        "Improve vocabulary, grammar, reading, and communication skills.",
      topic: "Communication Skills",
      points: [
        "Use clear and simple sentences.",
        "Listen carefully when communicating with others.",
        "Practice reading and speaking regularly."
      ],
      example:
        "Example: Clear communication helps people understand your ideas."
    }
  };

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
    setSelectedSubject("");
    setShowMaterial(false);
  };

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
    setShowMaterial(false);
  };

  const handleOpenMaterial = () => {
    setShowMaterial(true);
  };

  return (
    <div className="resources-page">
      <Navbar />

      <div className="resources-content">

        <h1>
          Learning Resources 📚
        </h1>

        <p className="resources-intro">
          Access educational materials designed to support
          accessible and flexible learning.
        </p>

        <div className="resources-container">

          <div className="resource-card">

            <div className="resource-icon">
              📖
            </div>

            <h2>
              Study Notes
            </h2>

            <p>
              Access simple and useful notes for different subjects.
            </p>

            <button
              onClick={() =>
                handleResourceClick("Study Notes")
              }
            >
              View Notes
            </button>

          </div>

          <div className="resource-card">

            <div className="resource-icon">
              🎥
            </div>

            <h2>
              Video Lessons
            </h2>

            <p>
              Learn through educational videos and visual lessons.
            </p>

            <button
              onClick={() =>
                handleResourceClick("Video Lessons")
              }
            >
              Watch Videos
            </button>

          </div>

          <div className="resource-card">

            <div className="resource-icon">
              📝
            </div>

            <h2>
              Practice Materials
            </h2>

            <p>
              Practice your knowledge with questions and exercises.
            </p>

            <button
              onClick={() =>
                handleResourceClick("Practice Materials")
              }
            >
              Practice Now
            </button>

          </div>

          <div className="resource-card">

            <div className="resource-icon">
              📥
            </div>

            <h2>
              Offline Resources
            </h2>

            <p>
              Access learning materials suitable for limited
              internet connectivity.
            </p>

            <button
              onClick={() =>
                handleResourceClick("Offline Resources")
              }
            >
              Explore
            </button>

          </div>

        </div>

        {selectedResource && (

          <div className="selected-resource">

            <h2>
              {selectedResource}
            </h2>

            <p>
              Select a subject to explore available learning materials.
            </p>

            <div className="subject-container">

              {subjects.map((subject) => (

                <button
                  className="subject-button"
                  key={subject}
                  onClick={() =>
                    handleSubjectClick(subject)
                  }
                >
                  {subject}
                </button>

              ))}

            </div>

            {selectedSubject && (

              <div className="subject-content">

                <h3>
                  {selectedSubject}
                </h3>

                <p>
                  {subjectContent[selectedSubject].description}
                </p>

                <button
                  className="content-button"
                  onClick={handleOpenMaterial}
                >
                  📚 Open Learning Material
                </button>

              </div>

            )}

            {showMaterial && (

              <div className="learning-material">

                <h3>
                  📚 {subjectContent[selectedSubject].topic}
                </h3>

                <p>
                  {subjectContent[selectedSubject].description}
                </p>

                <div className="material-box">

                  <h4>
                    📖 Key Concepts
                  </h4>

                  {subjectContent[selectedSubject].points.map(
                    (point, index) => (
                      <p key={index}>
                        ✓ {point}
                      </p>
                    )
                  )}

                </div>

                <div className="material-box">

                  <h4>
                    💡 Example
                  </h4>

                  <p>
                    {subjectContent[selectedSubject].example}
                  </p>

                </div>

                <div className="material-box">

                  <h4>
                    📝 Practice Activity
                  </h4>

                  <p>
                    Review the concepts above and write down
                    one example in your own words.
                  </p>

                </div>

              </div>

            )}

          </div>

        )}

        <div
          style={{
            marginTop: "35px",
            textAlign: "center"
          }}
        >
          <a
            href="/dashboard"
            style={{
              color: "#e66c5d",
              fontWeight: "700",
              textDecoration: "none"
            }}
          >
            ← Back to Dashboard
          </a>
        </div>

      </div>
    </div>
  );
}

export default Resources;