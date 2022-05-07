import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Component/Home";
import LoginForm from "./Component/LoginForm";
import { useState } from "react";
import NotFound from "./Component/NotFound";

export default () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <LoginForm user={user} setUser={setUser} />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
