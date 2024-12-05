import React, { useEffect } from "react";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import "./Footer.css";

import { Grid, Slider } from "@mui/material";

function Footer({ spotify }) {
  const [{ item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    if (spotify) {
      spotify.getMyCurrentPlaybackState().then((r) => {
        console.log("Current playback state: ", r);

        dispatch({
          type: "SET_PLAYING",
          playing: r?.is_playing || false,
        });

        dispatch({
          type: "SET_ITEM",
          item: r?.item || null,
        });
      }).catch((error) => console.error("Error fetching playback state: ", error));
    } else {
      console.error("Spotify instance is undefined!");
    }
  }, [spotify, dispatch]);

  const handlePlayPause = () => {
    if (spotify) {
      if (playing) {
        spotify.pause().then(() => {
          dispatch({
            type: "SET_PLAYING",
            playing: false,
          });
        }).catch((error) => console.error("Error pausing playback: ", error));
      } else {
        spotify.play().then(() => {
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        }).catch((error) => console.error("Error resuming playback: ", error));
      }
    }
  };

  const skipNext = () => {
    if (spotify) {
      spotify.skipToNext().then(() => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r?.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      }).catch((error) => console.error("Error skipping to next track: ", error));
    }
  };

  const skipPrevious = () => {
    if (spotify) {
      spotify.skipToPrevious().then(() => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r?.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      }).catch((error) => console.error("Error skipping to previous track: ", error));
    }
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={item?.album?.images[0]?.url || "default-album-image-url"}
          alt={item?.name || "No song playing"}
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists?.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon onClick={skipPrevious} className="footer__icon" />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        )}
        <SkipNextIcon onClick={skipNext} className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
