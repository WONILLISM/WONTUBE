import styled from "styled-components";
import { Thumbnail } from "../../common/interface/Video";

interface Props {
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard: Thumbnail;
    maxres: Thumbnail;
  };
  videoTitle: string;
  channelTitle: string;
  description?: string;
}
const VideoCard = ({
  thumbnails,
  videoTitle,
  channelTitle,
}: // description,
Props) => {
  return (
    <RootStyle>
      <ImageArea>
        <img
          className="img"
          src={thumbnails.high.url}
          width={thumbnails.high.width}
          // height={thumbnails.high.height}
        />
      </ImageArea>
      <ContentArea>
        <LogoArea>logo</LogoArea>
        <div>
          <div className="video-title">{videoTitle}</div>
          <div className="channel-title">{channelTitle}</div>
          <div className="video-views">views</div>
        </div>
      </ContentArea>
    </RootStyle>
  );
};

const RootStyle = styled.div`
  max-width: 480px;
`;

const ImageArea = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  max-width: 480px;

  &:hover {
    cursor: pointer;
  }

  & .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentArea = styled.div`
  display: flex;

  & .video-title {
    margin: 12px 0 4px 0;
    &:hover {
      cursor: pointer;
    }
  }

  & .channel-title {
    font-size: 14px;
    color: #7494a7;
    &:hover {
      cursor: pointer;
    }
  }
  & .video-views {
    font-size: 14px;
    color: #7494a7;
  }
`;

const LogoArea = styled.div`
  margin: 12px 12px 0 0;
`;

export default VideoCard;
