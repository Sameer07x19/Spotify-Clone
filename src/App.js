import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hashUrl = getTokenFromUrl();
    window.location.hash = ""; // Clear the hash from the URL
    const _token = hashUrl.access_token;
  
    if (_token) {
      // Set the token and initialize Spotify instance
      spotify.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
  
      // Fetch user profile
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      }).catch((error) => console.error('Error fetching user:', error));
  
      // Fetch user playlists
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      }).catch((error) => console.error('Error fetching playlists:', error));
  
      // Save Spotify instance in the Data Layer
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
  
      // Fetch Discover Weekly playlist
      spotify.getPlaylist("6mPaOI88WM2aSPZ3cAEloe").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      }).catch((error) => console.error('Error fetching Discover Weekly:', error));
  
      // Fetch user's top artists
      spotify.getMyTopArtists().then((response) => {
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        });
      }).catch((error) => console.error('Error fetching top artists:', error));
    }
  }, [dispatch]);
  

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
