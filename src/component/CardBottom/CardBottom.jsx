import React, { useEffect, useRef, useState, useContext } from "react";
import "./cardbottom.css";
import { FaPlay, FaPause } from "react-icons/fa";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import songs from "../../../public/data.js";
import { SongContext } from "../../context/SongContext.jsx";

function CardBottom() {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songPlay, setSongPlay] = useState(songs[0].path);

  const { currentSongIndex: currentIndex, setCurrentSongIndex: setCurrentIndex } = useContext(SongContext); // ✅ Step 2

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    setIsPlaying(!isPlaying);
  };

  const playSongAtIndex = (index) => {
    const boundedIndex = (index + songs.length) % songs.length;
    setCurrentIndex(boundedIndex); // ✅ global index set
    setSongPlay(songs[boundedIndex].path);
    setIsPlaying(false);
    setTimeout(() => {
      audioRef.current.play();
      setIsPlaying(true);
    }, 100);
  };

  const nextSong = () => {
    playSongAtIndex(currentIndex + 1);
  };

  const prevSong = () => {
    playSongAtIndex(currentIndex - 1);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []);

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const newTime = e.target.value;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  return (
    <div className="bottom">
      <div className="bottom-top">
        <div className="time-line">
          <span>{formatTime(currentTime)}</span>
          <span>-{formatTime(duration - currentTime)}</span>
        </div>

        <audio id="audio" ref={audioRef} src={songPlay} />

        <input
          type="range"
          id="seek"
          className="progress-bar"
          value={currentTime}
          onChange={handleSeek}
          min="0"
          max={duration || 0}
          style={{
            background: `linear-gradient(to right, #fff ${
              (currentTime / duration) * 100
            }%, #444 ${(currentTime / duration) * 100}%)`,
          }}
        />
      </div>

      <div className="bottom-down">
        <div className="previous" onClick={prevSong}>
          <GiPreviousButton className="icon" />
        </div>
        <div className="play" onClick={handlePlayPause}>
          {isPlaying ? <FaPause className="icon" /> : <FaPlay className="icon" />}
        </div>
        <div className="next" onClick={nextSong}>
          <GiNextButton className="icon" />
        </div>
      </div>

    



    </div>
  );
}

export default CardBottom;
