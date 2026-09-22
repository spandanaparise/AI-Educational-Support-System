import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import AISupport from "./pages/AISupport";
import Classes from "./pages/Classes";
import OfflineLearning from "./pages/OfflineLearning";
import LowDataMode from "./pages/LowDataMode";
import StudyPlan from "./pages/StudyPlan";
import WeakTopics from "./pages/WeakTopics";
import Quizzes from "./pages/Quizzes";
import TeacherDashboard from "./pages/TeacherDashboard";
import LanguageSupport from "./pages/LanguageSupport";

function App() {
  const path = window.location.pathname;

  if (path === "/login") {
    return <Login />;
  }

  if (path === "/register") {
    return <Register />;
  }

  if (path === "/resources") {
    return <Resources />;
  }

  if (path === "/ai-support") {
    return <AISupport />;
  }

  if (path === "/classes") {
    return <Classes />;
  }

  if (path === "/offline-learning") {
    return <OfflineLearning />;
  }

  if (path === "/low-data") {
    return <LowDataMode />;
  }

  if (path === "/study-plan") {
    return <StudyPlan />;
  }

  if (path === "/weak-topics") {
    return <WeakTopics />;
  }

  if (path === "/quizzes") {
    return <Quizzes />;
  }

  if (path === "/teacher-dashboard") {
    return <TeacherDashboard />;
  }

  if (path === "/language-support") {
    return <LanguageSupport />;
  }

  if (path === "/dashboard") {
    return <Dashboard />;
  }

  return <Home />;
}

export default App;