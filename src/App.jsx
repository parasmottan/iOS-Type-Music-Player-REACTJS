import { useContext } from 'react';
import { SongProvider, SongContext } from './context/SongContext';
import Card from './component/Card-Cover/CardCover';
import songs from '../public/data';
import './index.css';

function AppContent() {
  const { currentSongIndex } = useContext(SongContext);
  const currentSong = songs[currentSongIndex];

  return (
    <div className="app">
      {/* Dynamic background */}
      <div
        className="background-blur"
        style={{
          backgroundImage: `url(${currentSong.cover})`,
        }}
      />

      {/* Your main container */}
      <div className="main-container">
        <Card />
      </div>
    </div>
  );
}

function App() {
  return (
    <SongProvider>
      <AppContent />
    </SongProvider>
  );
}

export default App;
