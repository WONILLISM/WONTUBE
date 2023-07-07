import { useEffect, useState } from "react";
import styled from "styled-components";
import { VideoItem } from "../../../common/interface/Video";
import { getSubscriptionVideo } from "../../../common/api/youtube";
import VideoCard from "../../Card/VideoCard";

interface VideoListProps {
  id: string;
}

const VideoList = ({ id }: VideoListProps) => {
  const [videos, setVideos] = useState<VideoItem[]>();

  const fetchVideoList = async () => {
    const res = await getSubscriptionVideo(id);

    setVideos(res);
  };

  useEffect(() => {
    fetchVideoList();
  }, []);

  return (
    <>
      {videos &&
        videos.map((video) => (
          <VideoCard
            thumbnails={video.snippet.thumbnails}
            videoTitle={video.snippet.title}
            channelTitle={video.snippet.channelTitle}
            description={video.snippet.description}
          />
        ))}
    </>
  );
};

interface Props {
  data: VideoItem[];
}

const SubscriptionList = ({ data }: Props) => {
  return (
    <RootStyle>
      {data.map((item) => (
        <Wrapper>
          <VideoCard
            thumbnails={item.snippet.thumbnails}
            videoTitle={item.snippet.title}
            channelTitle={item.snippet.channelTitle}
            description={item.snippet.description}
          />
          <VideoList id={item.snippet.resourceId.channelId} />
        </Wrapper>
      ))}
    </RootStyle>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const RootStyle = styled.div`
  /* display: flex;

  gap: 16px; */
`;

export default SubscriptionList;
