import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/RootLayout";
import Chapters from "./pages/Chapters";
import Quiz from "./pages/Quiz";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/game" element={<RootLayout />}>
          <Route index element={<Chapters />} />
          <Route path="quiz" element={<Quiz />} />
          <Route
            path="leaderboard"
            element={<h1>This will be the leaderboard</h1>}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
