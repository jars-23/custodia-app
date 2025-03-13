import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import LoginPage from "./pages/LoginPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<h1>Bienvenido al Dashboard</h1>} />
        </Routes>
      </Router>
  );
}

export default App;
