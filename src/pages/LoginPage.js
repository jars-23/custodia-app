import { useNavigate } from "react-router-dom";
import LoginFormComponent from "../components/LoginFormComponent";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simular autenticación
    console.log("Usuario autenticado");
    navigate("/dashboard"); // Redirigir después del login
  };

  return (
    <div>
      <LoginFormComponent onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;