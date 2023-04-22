import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GoogleOAuth from "./pages/GoogleOAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redirect" element={<GoogleOAuth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
