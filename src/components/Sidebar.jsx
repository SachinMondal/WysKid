import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const handleLogout = () => {
    axios.get("http://localhost:5000/api/v1/user/logout");
    localStorage.clear();
    window.location.href = "/login";
    console.log("Logout clicked");
  };

  return (
    <div className="absolute top-0 left-0 flex flex-col p-4 md:p-2 w-1/4 h-screen items-center justify-center lg:text-4xl text-2xl bg-secondary">
      <Link to="/game" className="p-4">
        Chapters
      </Link>
      <Link to="/game/quiz" className="p-4">
        Quiz
      </Link>
      <Link to="/game/leaderboard" className="p-4">
        Leaderboard
      </Link>

      <babelutton onClick={handleLogout}>Logout</babelutton>
    </div>
  );
}
