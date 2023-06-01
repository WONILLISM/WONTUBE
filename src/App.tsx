import { GoogleOAuthProvider } from "@react-oauth/google";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Router from "./router";
import { RecoilRoot } from "recoil";

const { VITE_GOOGLE_OAUTH_CLIENT_ID } = import.meta.env;

function App() {
  return (
    <RecoilRoot>
      <GoogleOAuthProvider clientId={`${VITE_GOOGLE_OAUTH_CLIENT_ID}`}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </GoogleOAuthProvider>
    </RecoilRoot>
  );
}

export default App;
