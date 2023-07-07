import { useEffect, useState } from "react";
import styled from "styled-components";

import { VideoItem } from "../common/interface/Video";
import VideoCard from "../components/Card/VideoCard";
import { getPopularVideo } from "../common/api/youtube";

const Main = () => {
  const [videoList, setVideoList] = useState<VideoItem[] | null>();

  const fetchPopularVideo = async () => {
    const res = await getPopularVideo();

    setVideoList(res);
  };

  useEffect(() => {
    fetchPopularVideo();
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
  margin: 0 16px;
`;

const VideoList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export default Main;
