const Like = document.getElementById("like");
const LikeCount = document.getElementById("likeCount");
const Look = document.getElementById("look");
const post = document.querySelector("p");

let liked = false;
let count = 10;

function addLike(event) {
    const img = Like.querySelector("img");
    if (!liked) {
        img.setAttribute("src", "./images/liked.svg");
        LikeCount.textContent = `좋아요 ${count+1}개`;
        liked = true;
    } else {
        img.setAttribute("src", "./images/like.svg");
        LikeCount.textContent = `좋아요 ${count}개`
        liked = false;
    }

}

let postState = false;

function lookMore(event) {
    if (!postState) {
        post.textContent = `집에 와보니까 한교동 피규어가 책상 위에 있었어요`;
        Look.textContent = `접기`;
        postState = true;
    } else {
        post.textContent = `집에 와보니까 한교동 피규`;
        Look.textContent = `...더 보기`;
        postState = false;
    }
    
}

Like.addEventListener("click", addLike);

Look.addEventListener("click", lookMore);