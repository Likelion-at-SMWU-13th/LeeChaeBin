import styled from "styled-components";

export const SongsContainer = styled.div`
  width: 50rem;
  height: 42.3125rem;
  background: #fff;
  border-radius: 16px;
  padding: 24px 20px;
  box-shadow: 0 8px 24px rgba(26, 35, 53, 0.08);
  border: 1px solid #eef1f6;
`;

export const SongCard = styled.div`
  width: 50rem;
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

export const Rank = styled.p`
  padding: 24px;
  font-weight: 600;
  font-size: 24px;
  margin: 0;
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
