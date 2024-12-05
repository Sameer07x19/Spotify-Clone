
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI || "http://localhost:3000/";

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID || "0849c974d88e42688e164ee8b3953761";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  const hash = window.location.hash.substring(1);
  if (!hash) return {};
  
  return hash
    .split("&")
    .reduce((initial, item) => {
      const parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(" "))}&response_type=token&show_dialog=true`;
