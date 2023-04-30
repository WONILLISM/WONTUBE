import { useGoogleLogin } from "@react-oauth/google";

const GoogleLogin = () => {
  const login = useGoogleLogin({
    onSuccess: (res) => {
      console.log(res);
      localStorage.setItem("access-token", res.access_token);
    },
    scope: "https://www.googleapis.com/auth/youtube",
  });
  return <button onClick={() => login()}>google login</button>;
};

export default GoogleLogin;
