import React from "react";
import * as S from "../styles/styled";
import usePlaylistStore from "../store/store";
import likeImg from "../assets/like.svg";
import likedImg from "../assets/liked.svg";

const PlaylistItem = ({ song }) => {
  const removePlaylist = usePlaylistStore((s) => s.removePlaylist);
  const togglePlaylist = usePlaylistStore((s) => s.togglePlaylist);

  return (
    <S.PlaylistCard>
      <S.SongAlbum>
        <S.DeleteBtn title="삭제하기" onClick={() => removePlaylist(song.id)}>
          삭제
        </S.DeleteBtn>
        <S.PlaylistAlbumImg src={song.albumImg} />
      </S.SongAlbum>
      <S.SongInfo>
        <S.SongTitle>{song.title}</S.SongTitle>
        <S.SongArtist>{song.artist}</S.SongArtist>
      </S.SongInfo>
      <S.addBtnContainer>
        <S.LikeBtn
          src={song.liked ? likedImg : likeImg}
          onClick={() => togglePlaylist(song.id)}
        />
      </S.addBtnContainer>
    </S.PlaylistCard>
  );
};

export default PlaylistItem;
