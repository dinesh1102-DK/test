import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FeedbackForm from "./FeedbackForm";
import Feedback from "./Feedback";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Form</Link> |{" "}
        <Link to="/feedback">Feedback</Link>
      </nav>

      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;