import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import Layout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import Groups from "./pages/administration/GroupsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />


        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/groups" element={<Groups />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
