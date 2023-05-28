import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import { Params } from "../common/interface/Params";
import { VideoItem } from "../common/interface/Video";
import VideoCard from "./Card/VideoCard";
import styled from "styled-components";

const { VITE_YOUTUBE_API_URL, VITE_YOUTUBE_API_KEY } = import.meta.env;

const PoupularVideo = () => {
  const [videoList, setVideoList] = useState<VideoItem[]>();

  const fetchVideoList = async () => {
    const params: Params = {
      part: "snippet",
      chart: "mostPopular",
      regionCode: "KR",
      maxResults: 16,
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideoList();
  }, []);

  return (
    <RootStyle>
      <VideoList>
        {videoList &&
          videoList.map((item) => (
            <VideoCard
              thumbnails={item.snippet.thumbnails}
              videoTitle={item.snippet.title}
              channelTitle={item.snippet.channelTitle}
              description={item.snippet.description}
            />
          ))}
      </VideoList>
    </RootStyle>
  );
};

const RootStyle = styled.div`
  /* width: 100%; */
  margin: 0 16px;
`;

const VideoList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export default PoupularVideo;
