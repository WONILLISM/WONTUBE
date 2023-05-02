import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (res) => {
      // console.log(res);
      localStorage.setItem("access-token", res.access_token);
      navigate("/dashboard");
    },
    scope:
      "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/spreadsheets",
  });
  return <button onClick={() => login()}>google login</button>;
};

export default GoogleLogin;
