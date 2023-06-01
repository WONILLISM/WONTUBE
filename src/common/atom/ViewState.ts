import { atom, selector } from "recoil";
import { VideoType, ViewType } from "../interface/View";
import { getPopulerVideo, getSearchVideo } from "../api/youtube";
import { VideoItem } from "../interface/Video";

export const ViewTypeState = atom<ViewType>({
  key: "viewTypeState",
  default: "board",
});

export const VideoTypeState = atom<VideoType>({
  key: "videoTypeState",
  default: "popular",
});

export const SearchTextState = atom<string>({
  key: "searchTextState",
  default: "",
});

export const VideoListSelector = selector<VideoItem[]>({
  key: "videoListSelector",
  get: async ({ get }) => {
    const videoType = get(VideoTypeState);

    switch (videoType) {
      case "popular":
        const popularVideos = await getPopulerVideo();
        return popularVideos;
      case "search":
        const searchText = get(SearchTextState);
        const searchResult = await getSearchVideo(searchText);
        return searchResult;
      default:
        return [];
    }
  },
});

// export const VideoListState = atom<VideoItem[]>({
//   key: "videoListState",
//   default: [],
// });
