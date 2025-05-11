async function fetchSongs() {
    const keyword = document.getElementById("input").value.trim();
    const container = document.getElementById("songContainer");

    try {
        const response = await fetch(`https://api.manana.kr/karaoke/singer/${keyword}.json`);
        const songs = await response.json();

        songs.forEach((song) => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
            <div class="card-body">
                <h2 class="card-title">${song.title}</h2>
                <p class="card-singer">${song.singer}</p>
                <div class="row">
                    <p class="card-number">번호 ${song.no}</p>
                    <p class="card-composer">작곡 ${song.composer}</p>
                </div>
                <div class="row">
                    <p class="card-lyricist">작사 ${song.lyricist}</p>
                    <p class="card-release">발매일 ${song.release}</p>
                </div>
                
            </div>
        `;
        container.appendChild(card);
        });
    } catch (error) {
        console.log("에러 발생:", error);
    }
}

document.getElementById("searchBtn").addEventListener('click', fetchSongs);