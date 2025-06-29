import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  margin: 1.25rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 2.5rem;
  min-width: 68.125rem;
  padding: 1rem 0;
`;

const MusicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 1.25rem;
  padding: 1.25rem;
`;

const Card = styled.div`
  width: 21.875rem;
  background-color: black;
  border-radius: 1.25rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const Cover = styled.img`
  display: block;
  width: 85%;
  height: auto;
  margin: 2rem auto 0 auto;
`;

const CardBody = styled.div`
  padding: 0.9375rem;
  text-align: center;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  margin: 0 0 0.625rem;
  color: #fff;
`;

const CardRelease = styled.p`
  font-weight: 700;
  font-size: 1rem;
  color: #d1d1d1;
`;

const CardArtist = styled.p`
  font-size: 1rem;
  margin-top: 0.3125rem;
  white-space: pre;
  color: #d1d1d1;
`;

const Music = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/music")
      .then((res) => {
        const rockMusic = res.data.filter((music) => music.genre === "rock");
        setMusic(rockMusic);
      })
      .catch((err) => {
        console.error("에러 발생:", err);
      });
  }, []);

  return (
    <Container>
      <Title>🎵플레이리스트🎵</Title>
      <MusicGrid>
        {music.map((music) => (
          <Card key={music.id}>
            <Cover src={music.cover} alt={music.title} />
            <CardBody>
              <CardTitle>{music.title}</CardTitle>
              <CardRelease>발매일: {music.release}</CardRelease>
              <CardArtist>아티스트: {music.artist}</CardArtist>
            </CardBody>
          </Card>
        ))}
      </MusicGrid>
    </Container>
  );
};

export default Music;
