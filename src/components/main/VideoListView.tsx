import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { VideoListSelector, VideoTypeState } from "../../common/atom/ViewState";
import VideoCard from "../Card/VideoCard";
import styled from "styled-components";

const VideoListView = () => {
  const videotype = useRecoilValue(VideoTypeState);
  const { state, contents } = useRecoilValueLoadable(VideoListSelector);
  console.log(videotype);
  return (
    <RootStyle>
      {state === "hasValue" && (
        <VideoList>
          {contents.map((item) => (
            <VideoCard
              thumbnails={item.snippet.thumbnails}
              videoTitle={item.snippet.title}
              channelTitle={item.snippet.channelTitle}
              description={item.snippet.description}
            />
          ))}
        </VideoList>
      )}
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

export default VideoListView;
