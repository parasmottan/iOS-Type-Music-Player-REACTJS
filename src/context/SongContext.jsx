// src/context/SongContext.js
import { createContext, useState } from "react";

export const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  return (
    <SongContext.Provider value={{ currentSongIndex, setCurrentSongIndex }}>
      {children}
    </SongContext.Provider>
  );
};
 