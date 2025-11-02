import React from "react";
import * as S from "../styles/styled";
import songData from "../data/songs.json";
import type { Song } from "../types/song";

type SongListProps = {
  addPlaylist: (song: Song) => void;
};

function SongList({ addPlaylist }: SongListProps) {
  const songList = songData as Song[];

  return (
    <S.SongsContainer>
      {songList.map((song, i) => (
        <S.SongCard key={song.id ?? i}>
          <S.SongAlbum>
            <S.Rank>{i + 1}</S.Rank>
            <S.AlbumImg src={song.albumImg} alt={`${song.title} 앨범 이미지`} />
          </S.SongAlbum>
          <S.SongInfo>
            <S.SongTitle>{song.title}</S.SongTitle>
            <S.SongArtist>{song.artist}</S.SongArtist>
          </S.SongInfo>
          <S.addBtnContainer>
            <S.addBtn title="추가하기" onClick={() => addPlaylist(song)}>
              추가하기
            </S.addBtn>
          </S.addBtnContainer>
        </S.SongCard>
      ))}
    </S.SongsContainer>
  );
}

export default SongList;
