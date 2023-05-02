import { googleLogout } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const { VITE_YOUTUBE_API_URL } = import.meta.env;

interface Subscription {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("access-token");
    navigate("/", { replace: true });
  };

  const fetchSubscriptions = async () => {
    try {
      const response = await axios.get<{
        items: Subscription[];
      }>(
        `${VITE_YOUTUBE_API_URL}/subscriptions?part=snippet&mine=true&maxResults=50`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response);
      setSubscriptions(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setAccessToken(localStorage.getItem("access-token"));
  }, []);

  useEffect(() => {
    fetchSubscriptions();
  }, [accessToken]);

  return (
    <div>
      {accessToken && (
        <div>
          <button onClick={handleLogout}>logout</button>
        </div>
      )}
      <div>
        {subscriptions.map((subscription) => (
          <div key={subscription.id}>
            <img
              src={subscription.snippet.thumbnails.default.url}
              alt={subscription.snippet.title}
            />
            <p>{subscription.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
