import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 0.5rem;

  cursor: pointer;

  /* border: 1px solid #9ab3c3; */
  background-color: #9ab3c322;
  box-shadow: 0 0 12px 4px #085168, 0 0 2px 2px #9ab3c3;
  border-radius: 4px;
  color: #ffffff;

  letter-spacing: 0.06em;
`;

const YoutubeLogin = () => {
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
  return (
    <ButtonStyle onClick={() => login()}>
      <img src="./assets/youtube_social_icon_red.png" width={40} />
      Sign in with YouTube
    </ButtonStyle>
  );
};

export default YoutubeLogin;
