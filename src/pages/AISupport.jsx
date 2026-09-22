import Navbar from "../components/Navbar";
import { useState } from "react";
import "./AISupport.css";

function AISupport() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hello! 👋 I'm your AI Learning Assistant. Ask me a question about your studies."
    }
  ]);

  const getAIResponse = (userQuestion) => {
    const questionText = userQuestion.toLowerCase();

    if (
      questionText.includes("python") ||
      questionText.includes("programming")
    ) {
      return "Python is a programming language commonly used for AI, Machine Learning, data analysis, and software development.";
    }

    if (
      questionText.includes("machine learning") ||
      questionText.includes("ml")
    ) {
      return "Machine Learning is a branch of AI where computers learn patterns from data and use those patterns to make predictions or decisions.";
    }

    if (
      questionText.includes("ai") ||
      questionText.includes("artificial intelligence")
    ) {
      return "Artificial Intelligence is the field of creating systems that can perform tasks that normally require human intelligence, such as learning, reasoning, and understanding language.";
    }

    if (
      questionText.includes("math") ||
      questionText.includes("mathematics")
    ) {
      return "Mathematics helps you understand logical thinking, calculations, statistics, and many concepts used in Computer Science and AI.";
    }

    if (
      questionText.includes("hello") ||
      questionText.includes("hi")
    ) {
      return "Hello! 👋 I'm happy to help you with your studies. Ask me about AI, Python, Machine Learning, Mathematics, or other learning topics.";
    }

    return "That's a good question! 🤖 A detailed AI-generated answer will be connected to the backend later. For now, try asking me about Python, AI, Machine Learning, or Mathematics.";
  };

  const handleSend = () => {
    if (question.trim() === "") return;

    const userQuestion = question.trim();

    const studentMessage = {
      type: "student",
      text: userQuestion
    };

    const aiMessage = {
      type: "ai",
      text: getAIResponse(userQuestion)
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      studentMessage,
      aiMessage
    ]);

    // Save AI activity
    const currentActivity =
      Number(localStorage.getItem("aiActivity")) || 0;

    const newActivity = Math.min(currentActivity + 10, 100);

    localStorage.setItem("aiActivity", newActivity);

    setQuestion("");
  };

  return (
    <div className="ai-support-page">
      <Navbar />

      <div className="ai-content">
        <h1>AI Learning Support 🤖</h1>

        <p className="ai-intro">
          Ask questions and get educational support through our AI-powered
          learning assistant.
        </p>

        <div className="chat-box">
          <div className="messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.type === "ai"
                    ? "ai-message"
                    : "student-message"
                }
              >
                <strong>
                  {message.type === "ai"
                    ? "🤖 AI Assistant"
                    : "👤 You"}
                </strong>

                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <div className="question-area">
            <input
              type="text"
              placeholder="Ask your question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />

            <button onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AISupport;