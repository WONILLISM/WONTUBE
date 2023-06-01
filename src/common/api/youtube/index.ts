/**
 * search, popular, subscription, shorts
 */

import axios from "axios";
import qs from "qs";

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

export const getPopulerVideo = async () => {
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
