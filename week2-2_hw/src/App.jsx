import "./App.css";
import * as S from "./styles/styled";
import SongList from "./components/SongList";
import PlaylistItem from "./components/PlaylistItem";
import usePlaylistStore from "./store/store";

function App() {
  const playlist = usePlaylistStore((s) => s.playlist);

  return (
    <S.Page>
      <SongList />
      <S.PlaylistBox>
        {playlist.length === 0 ? (
          <S.Empty>아직 플레이리스트에 추가된 곡이 없어요!</S.Empty>
        ) : (
          playlist.map((song) => <PlaylistItem key={song.id} song={song} />)
        )}
      </S.PlaylistBox>
    </S.Page>
  );
}

export default App;
