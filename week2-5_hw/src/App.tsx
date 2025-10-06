import React from "react";
import "./App.css";

interface Movie {
  title: string;
  genre: string;
  rating: number;
  age: "전체 관람가" | "12세 관람가" | "15세 관람가" | "청불";
  review: string;
  watchAgain: boolean;
}

function introduceMovie(movie: Movie): void {
  console.log(`🎬최근에 본 영화: ${movie.title}`);
  console.log(`장르: ${movie.genre}`);
  console.log(`평점: ${movie.rating}`);
  console.log(`등급 분류: ${movie.age}`);
  console.log(`한줄리뷰: ${movie.review}`);
  console.log(
    movie.watchAgain ? "한 번 더 보고 싶어요!👍" : "다시 안 보고 싶어요👎"
  );
  console.log("----------------------------------------");
}

const myMovies: Movie[] = [
  {
    title: "비긴어게인",
    genre: "드라마",
    rating: 9.11,
    age: "15세 관람가",
    review: "보면서 힐링이 되는 영화였어용",
    watchAgain: true,
  },
  {
    title: "노이즈",
    genre: "공포",
    rating: 7.89,
    age: "15세 관람가",
    review: "결말이 아쉬웠음",
    watchAgain: false,
  },
  {
    title: "F1 더무비",
    genre: "드라마, 액션",
    rating: 9.06,
    age: "12세 관람가",
    review: "4d로 보니 너무너무 재밌었음! 실제로 레이싱하는 느낌",
    watchAgain: false,
  },
  {
    title: "파과",
    genre: "액션",
    rating: 7.66,
    age: "15세 관람가",
    review: "반전이 있었다 ㄷㄷ",
    watchAgain: false,
  },
  {
    title: "해피엔드",
    genre: "드라마",
    rating: 8.15,
    age: "15세 관람가",
    review: "나에게는 조금 이해하기 어려운 영화",
    watchAgain: true,
  },
  {
    title: "이터널 선샤인",
    genre: "멜로/로맨스",
    rating: 9.2,
    age: "15세 관람가",
    review: "생각할 거리를 많이 준 영화. 나름의 반전?",
    watchAgain: true,
  },
];

function showAllMovies(movies: Movie[]): void {
  console.log("🦁내가 최근에 본 영화들🦁");
  console.log("=====================================");
  movies.forEach((movie) => introduceMovie(movie));
}

function App() {
  showAllMovies(myMovies);
  return <></>;
}

export default App;
