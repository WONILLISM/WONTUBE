export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface VideoItem {
  etag: string;
  id: string;
  kind: string;
  snippet: {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    resourceId: {
      kind: string;
      channelId: string;
    };
    defaultAudioLanguage: string;
    description: string;
    liveBroadcastContent: string;
    localized: {
      discription: string;
      title: string;
    };
    publishedAt: string;
    tags: string[];
    thumbnails: {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
      standard: Thumbnail;
      maxres: Thumbnail;
    };
    title: string;
  };
}
