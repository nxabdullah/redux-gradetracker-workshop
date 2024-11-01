import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Course";
import Toasts from "./components/layout/Toasts";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container mx-auto px-6 pb-12 py-12">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses/1" element={<Course />} />
          <Route path="/courses/:courseId" element={<Course />} />
        </Routes>
      </main>
      <Toasts />
    </Router>
  );
}

export default App;
