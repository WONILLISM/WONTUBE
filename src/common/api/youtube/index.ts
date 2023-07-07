import axios from "axios";
import qs from "qs";
import { getAccessToken } from "../auth";

const { VITE_YOUTUBE_API_URL, VITE_YOUTUBE_API_KEY } = import.meta.env;

const youtubeAPI = axios.create({
  baseURL: VITE_YOUTUBE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => qs.stringify(params),
  params: {
    key: VITE_YOUTUBE_API_KEY,
  },
});

export const getPopularVideo = async () => {
  const params = {
    part: "snippet",
    chart: "mostPopular",
    regionCode: "KR",
    maxResults: 16,
  };

  try {
    const response = await youtubeAPI.get(`/videos`, {
      params: params,
    });
    // console.log(response.data.items);
    return response.data.items;
  } catch (error) {
    console.log(error);
  }
};

export const getSubscriptionsList = async () => {
  const accessToken = getAccessToken();
  const params = {
    part: "snippet",
    mine: true,
    maxResults: 5,
  };

  try {
    const response = await youtubeAPI.get(`/subscriptions`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: params,
    });
    return response.data.items;
  } catch (error) {
    console.log(error);
  }
};

export const getSubscriptionVideo = async (id: string) => {
  const params = {
    part: "snippet",
    channelId: id,
    maxResults: 3,
  };

  try {
    const response = await youtubeAPI.get(`/activities`, {
      params: params,
    });
    // console.log(response);
    return response.data.items;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchVideo = async (searchText: string) => {
  const params = {
    part: "snippet",
    q: searchText,
    maxResults: 16,
  };

  try {
    const response = await youtubeAPI.get(`/search`, {
      params: params,
    });
    // console.log(response);
    return response.data.items;
  } catch (error) {
    console.log(error);
  }
};
