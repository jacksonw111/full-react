import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/dashboard")}>login</button>
    </div>
  );
};
export default LoginPage;
