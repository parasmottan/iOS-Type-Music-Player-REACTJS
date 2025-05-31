import React, { useContext } from "react";
import "./left.css";
import { SongContext } from "../../../context/SongContext";
import songs from "../../../../public/data";

function Left() {
  const { currentSongIndex } = useContext(SongContext);
  const currentSong = songs[currentSongIndex];

  return (
    <div className="left">
      <div className="logo">
        <img src={currentSong.cover} alt={currentSong.title} />
      </div>

      <div className="song-artist">
        <h3 className="scroll-text">{currentSong.title}</h3>
        <h4 className="scroll-text artist">@{currentSong.artist}</h4>
      </div>
    </div>
  );
}

export default Left;
