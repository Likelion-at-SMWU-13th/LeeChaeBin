import React, { useState } from "react";
import "./App.css";
import * as S from "./styles/styled";
import SongList from "./components/SongList";
import PlaylistItem from "./components/PlaylistItem";
import type { Song } from "./types/song";

function App() {
  const [playlist, setPlaylist] = useState<Song[]>([]);

  const addPlaylist = (song: Song) => {
    const title = song.title.trim();
    const artist = song.artist.trim();
    const albumImg = song.albumImg.trim();
    if (!title) return;

    setPlaylist((prev) => [
      ...prev,
      { id: Date.now(), title, artist, albumImg, liked: false },
    ]);
  };

  const removePlaylist = (id: number) => {
    setPlaylist((prev) => prev.filter((s) => s.id !== id));
  };

  const togglePlaylist = (id: number) => {
    setPlaylist((prev) =>
      prev.map((s) => (s.id === id ? { ...s, liked: !s.liked } : s))
    );
  };

  return (
    <S.Page>
      <SongList addPlaylist={addPlaylist} />
      <S.PlaylistBox>
        {playlist.length === 0 ? (
          <S.Empty>아직 플레이리스트에 추가된 곡이 없어요!</S.Empty>
        ) : (
          playlist.map((song) => (
            <PlaylistItem
              key={song.id}
              song={song}
              removePlaylist={removePlaylist}
              togglePlaylist={togglePlaylist}
            />
          ))
        )}
      </S.PlaylistBox>
    </S.Page>
  );
}

export default App;
