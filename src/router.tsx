import { useRoutes } from "react-router-dom";

import AuthLayout from "./layouts/auth";
import MainLayout from "./layouts/main";
import Login from "./pages/Login";
import Main from "./pages/Main";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <AuthLayout />,
      children: [{ path: "login", element: <Login /> }],
    },
    {
      path: "/main",
      element: <MainLayout />,
      children: [
        { path: "", element: <Main /> },
        { path: "subscription", element: <div>hi</div> },
      ],
    },
  ]);
};

export default Router;
