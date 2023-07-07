import { useRoutes } from "react-router-dom";

import AuthLayout from "./layouts/auth";
import MainLayout from "./layouts/main";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Subscriptions from "./pages/Subscriptions";
import Shorts from "./pages/Shorts";

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
        { path: "subscriptions", element: <Subscriptions /> },
        { path: "shorts", element: <Shorts /> },
      ],
    },
  ]);
};

export default Router;
