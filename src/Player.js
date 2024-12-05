import React from "react";
import Footer from "./Footer"
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body"

function Player({spotify}) {
  if (!spotify) {
    return <div>Spotify is not initialized. Please log in again.</div>;
  }
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify}/>
      </div>

      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
