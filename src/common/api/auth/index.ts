export const getAccessToken = (): string | null => {
  const accessToken = localStorage.getItem("access-token");
  if (!accessToken) return null;
  return accessToken;
};
