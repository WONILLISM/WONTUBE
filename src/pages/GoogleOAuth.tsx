import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleOAuth = () => {
  const navigate = useNavigate();

  const getAccessToken = () => {
    const url = new URL(window.location.href);
    const hash = url.hash as string;
    const accessToken = hash.split("=")[1].split("&")[0];
    localStorage.setItem("access-token", accessToken);
  };

  useEffect(() => {
    getAccessToken();
    navigate("/");
  }, []);
  return <></>;
};

export default GoogleOAuth;
