import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import { Params } from "../common/interface/Params";
import { VideoItem } from "../common/interface/Video";

const { VITE_YOUTUBE_API_URL, VITE_YOUTUBE_API_KEY } = import.meta.env;

const PoupularVideo = () => {
  const [videoList, setVideoList] = useState<VideoItem[]>();

  const fetchVideoList = async () => {
    const params: Params = {
      part: "snippet",
      chart: "mostPopular",
      regionCode: "KR",
      // maxResults: 50,
      key: VITE_YOUTUBE_API_KEY,
    };
    try {
      const response = await axios.get<{ items: VideoItem[] }>(
        `${VITE_YOUTUBE_API_URL}/videos`,
        {
          paramsSerializer: (params) => qs.stringify(params),
          params: params,
        }
      );
      console.log(response.data.items);
      setVideoList(response.data.items);
    } catch (error) {}
  };

  useEffect(() => {
    fetchVideoList();
  }, []);

  return (
    <div>
      <div>
        {videoList && videoList.map((item) => <div>{item.snippet.title}</div>)}
      </div>
    </div>
  );
};

export default PoupularVideo;
