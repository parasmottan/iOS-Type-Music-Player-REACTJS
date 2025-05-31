import React, { useContext } from 'react';
import './mainCard.css';
import CardTop from '../CardTop/CardTop';
import CardBottom from '../CardBottom/CardBottom';
import { SongContext } from '../../context/SongContext';
import songs from '../../../public/data';

function MainCard() {
  const { currentSongIndex } = useContext(SongContext);
  const currentSong = songs[currentSongIndex];

  return (
    <div className='main-card'>
      <img
        src={currentSong.cover}
        alt="cover-art"
        className='cover-art'
      />

      <CardTop />
      <CardBottom />
      
    </div>
  );
}

export default MainCard;
