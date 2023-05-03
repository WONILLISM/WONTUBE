import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Dashboard from "./pages/Dashboard";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const { VITE_GOOGLE_OAUTH_CLIENT_ID } = import.meta.env;

function App() {
  return (
    <GoogleOAuthProvider clientId={`${VITE_GOOGLE_OAUTH_CLIENT_ID}`}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
