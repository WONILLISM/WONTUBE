interface ImportMetaEnv {
  readonly VITE_GOOGLE_OAUTH_CLIENT_ID?: string;
  readonly VITE_GOOGLE_OAUTH_URI?: string;
  readonly VITE_GOOGLE_OAUTH_TOKEN_URI?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
