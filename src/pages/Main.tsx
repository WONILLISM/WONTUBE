import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import PoupularVideo from "../components/PoupularVideo";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("access-token");
    navigate("/", { replace: true });
  };

  return (
    <div>
      <div>
        <button onClick={handleLogout}>logout</button>
      </div>
      <PoupularVideo />
    </div>
  );
};

export default Dashboard;
