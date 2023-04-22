const { VITE_GOOGLE_OAUTH_CLIENT_ID, VITE_GOOGLE_OAUTH_URI } = import.meta.env;

const GoogleLogin = () => {
  const handleButtonClick = () => {
    const url =
      VITE_GOOGLE_OAUTH_URI +
      "?client_id=" +
      VITE_GOOGLE_OAUTH_CLIENT_ID +
      "&response_type=token&redirect_uri=http://localhost:5173/redirect&scope=https://www.googleapis.com/auth/userinfo.email";
    window.location.assign(url);
  };

  return <button onClick={handleButtonClick}>GoogleLogin</button>;
};

export default GoogleLogin;
