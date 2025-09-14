import styled from "styled-components";

//전체 레이아웃
export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  min-height: 100%;
  gap: 40px;
`;

//SongList.jsx
export const SongsContainer = styled.div`
  width: 50rem;
  height: 44rem;
  background: #fff;
  border-radius: 16px;
  padding: 24px 20px;
  box-shadow: 0 8px 24px rgba(26, 35, 53, 0.08);
  border: 1px solid #eef1f6;
  overflow-y: auto;
`;

export const SongCard = styled.div`
  height: 5.625rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.3125rem;
`;

export const SongAlbum = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
`;

export const Rank = styled.div`
  width: 38px;
  font-weight: 600;
  font-size: 24px;
  margin: 0;
  text-align: center;
`;

export const AlbumImg = styled.img`
  width: 4.6875rem;
  height: 4.6875rem;
  flex-shrink: 0;
  border-radius: 10px;
  margin-left: 15px;
`;

export const SongInfo = styled.div`
  width: 65%;
`;

export const SongTitle = styled.p`
  margin: 0;
  padding: 2px 0;
  font-size: 16px;
  font-weight: 500;
`;

export const SongArtist = styled.p`
  margin: 0;
  padding: 2px 0;
  color: #848484;
  font-size: 14px;
`;

export const addBtnContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;

export const addBtn = styled.button`
  height: 44px;
  padding: 0 10px;
  border: none;
  border-radius: 12px;
  background: #eef1f7;
  color: #2e4796;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.06s ease, box-shadow 0.2s, background 0.2s;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background: #e6ebf5;
  }
  &:active {
    transform: translateY(1px);
  }
`;

//PlaylistItem.jsx

export const PlaylistBox = styled.ul`
  width: 36rem;
  height: 44rem;
  background: #eef1f7;
  border-radius: 16px;
  padding: 24px 20px;
  box-shadow: 0 8px 24px rgba(46, 71, 150, 0.08);
  border: 1px solid #eef1f6;
  overflow-y: auto;
`;

export const Empty = styled.p`
  color: #8b95a1;
  padding: 14px 8px;
  margin: 0;
  text-align: center;
`;

export const PlaylistCard = styled.li`
  height: 5.625rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.3125rem;
`;

export const PlaylistAlbumImg = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  flex-shrink: 0;
  border-radius: 10px;
  margin-left: 16px;
`;

export const DeleteBtn = styled.button`
  height: 40px;
  padding: 0 10px;
  border: none;
  border-radius: 12px;
  background: #ffe9e9;
  color: #c43d3d;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.06s ease, box-shadow 0.2s, background 0.2s;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background: #ffdede;
  }
  &:active {
    transform: translateY(1px);
  }
`;

export const LikeBtn = styled.img`
  height: 26px;
  width: 26px;
  cursor: pointer;
`;
