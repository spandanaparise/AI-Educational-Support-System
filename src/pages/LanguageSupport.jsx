import Navbar from "../components/Navbar";
import { useState } from "react";
import "./LanguageSupport.css";

function LanguageSupport() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languageContent = {
    English: {
      title: "Learn in Your Language.",
      description:
        "Choose a language that makes learning easier and more comfortable for you.",
      welcome: "Welcome to your learning space!",
      message:
        "Access study materials, quizzes, AI support, and learning activities in a simple and understandable language."
    },

    "Simple English": {
      title: "Learn Easily.",
      description:
        "Use simple English to understand your lessons more easily.",
      welcome: "Welcome to your learning space!",
      message:
        "Read lessons, take quizzes, and get learning help using simple words and clear explanations."
    },

    Telugu: {
      title: "మీ భాషలో నేర్చుకోండి.",
      description:
        "మీకు సులభంగా అర్థమయ్యే భాషను ఎంచుకోండి.",
      welcome: "మీ లెర్నింగ్ స్పేస్‌కు స్వాగతం!",
      message:
        "స్టడీ మెటీరియల్స్, క్విజ్‌లు మరియు AI లెర్నింగ్ సపోర్ట్‌ను సులభమైన భాషలో ఉపయోగించండి."
    },

    Hindi: {
      title: "अपनी भाषा में सीखें।",
      description:
        "ऐसी भाषा चुनें जिसमें आपको पढ़ना और सीखना आसान लगे।",
      welcome: "आपके लर्निंग स्पेस में आपका स्वागत है!",
      message:
        "स्टडी सामग्री, क्विज़ और AI लर्निंग सपोर्ट को आसान भाषा में इस्तेमाल करें।"
    }
  };

  const currentContent = languageContent[selectedLanguage];

  return (
    <div className="language-support-page">
      <Navbar />

      <main className="language-support-content">

        <section className="language-header">

          <span className="language-label">
            🌐 LANGUAGE SUPPORT
          </span>

          <h1>
            {currentContent.title}
          </h1>

          <p>
            {currentContent.description}
          </p>

        </section>

        <section className="language-selector-card">

          <div className="language-icon">
            🌐
          </div>

          <div className="language-selector-content">

            <span>
              SELECT LANGUAGE
            </span>

            <h2>
              Choose Your Learning Language
            </h2>

            <p>
              You can change your preferred language whenever
              you want.
            </p>

            <select
              value={selectedLanguage}
              onChange={(e) =>
                setSelectedLanguage(e.target.value)
              }
            >
              <option value="English">
                English
              </option>

              <option value="Simple English">
                Simple English
              </option>

              <option value="Telugu">
                తెలుగు
              </option>

              <option value="Hindi">
                हिन्दी
              </option>
            </select>

          </div>

        </section>

        <section className="language-preview">

          <div className="preview-header">

            <span>
              LANGUAGE PREVIEW
            </span>

            <div className="selected-language-badge">
              {selectedLanguage}
            </div>

          </div>

          <div className="preview-content">

            <div className="preview-icon">
              📚
            </div>

            <div>
              <h2>
                {currentContent.welcome}
              </h2>

              <p>
                {currentContent.message}
              </p>
            </div>

          </div>

        </section>

        <section className="language-features">

          <div className="language-feature-card">

            <div className="feature-language-icon">
              📖
            </div>

            <h3>
              Simple Learning
            </h3>

            <p>
              Learning content can be presented using
              simple and easy-to-understand language.
            </p>

          </div>

          <div className="language-feature-card">

            <div className="feature-language-icon">
              🤖
            </div>

            <h3>
              AI Language Support
            </h3>

            <p>
              AI-based learning assistance can provide
              explanations in the selected language.
            </p>

          </div>

          <div className="language-feature-card">

            <div className="feature-language-icon">
              🌍
            </div>

            <h3>
              Local Languages
            </h3>

            <p>
              Local-language support can help students
              access education more comfortably.
            </p>

          </div>

        </section>

        <section className="language-info">

          <div className="language-info-icon">
            💡
          </div>

          <div>

            <span>
              ACCESSIBLE EDUCATION
            </span>

            <h2>
              Learning Should Be Easy to Understand
            </h2>

            <p>
              Language support helps reduce communication
              barriers and makes digital learning more
              accessible for students from different regions.
            </p>

            <div className="language-points">

              <span>✓ Simple explanations</span>
              <span>✓ Local-language support</span>
              <span>✓ Better accessibility</span>

            </div>

          </div>

        </section>

        <div className="language-actions">

          <a href="/dashboard">
            ← Back to Dashboard
          </a>

          <a href="/ai-support">
            🤖 AI Support
          </a>

          <a href="/resources">
            📚 Resources
          </a>

        </div>

      </main>
    </div>
  );
}

export default LanguageSupport;