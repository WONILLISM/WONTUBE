import axios from "axios";
import { googleLogout } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { Params } from "../common/interface/Params";
import PoupularVideo from "../components/PoupularVideo";

const { VITE_YOUTUBE_API_URL } = import.meta.env;

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("access-token");
    navigate("/", { replace: true });
  };

  return (
    <div>
      <div>
        <button onClick={handleLogout}>logout</button>
      </div>
      <PoupularVideo />
    </div>
  );
};

export default Dashboard;
