import { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <h3>음악 리스트</h3>
      <div>
        {music.map((music) => (
          <div key={music.id}>
            <img src={music.cover} alt={music.title} />
            <div>
              <h2>{music.title}</h2>
              <p>발매일: {music.release}</p>
              <p>아티스트: {music.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
