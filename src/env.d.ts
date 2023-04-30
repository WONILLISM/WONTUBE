interface ImportMetaEnv {
  readonly VITE_GOOGLE_OAUTH_CLIENT_ID?: string;
  readonly VITE_GOOGLE_OAUTH_CLIENT_SECRET_KEY?: string;
  readonly VITE_GOOGLE_OAUTH_URI?: string;
  readonly VITE_GOOGLE_OAUTH_TOKEN_URI?: string;
  readonly VITE_YOUTUBE_API_URL?: string;
  readonly VITE_YOUTUBE_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
