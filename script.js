const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const playIcon = document.getElementById('play-icon');
const progress = document.getElementById('progress');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');

// Danh sách nhạc mẫu
const songs = [
    { name: 'Ghé Qua', artist: 'Dick x PC x Tofu', src: 'link-nhac-1.mp3', cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500' },
    { name: 'Indie Song', artist: 'Unknown Artist', src: 'link-nhac-2.mp3', cover: 'https://images.unsplash.com/photo-1514525253361-bee8718a300a?w=500' }
];

let songIndex = 0;

function loadSong(song) {
    title.innerText = song.name;
    artist.innerText = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playIcon.classList.replace('fa-play', 'fa-pause');
    } else {
        audio.pause();
        playIcon.classList.replace('fa-pause', 'fa-play');
    }
}

audio.ontimeupdate = () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent || 0;
};

progress.oninput = () => {
    const seekTime = (progress.value / 100) * audio.duration;
    audio.currentTime = seekTime;
};

playBtn.addEventListener('click', togglePlay);

// Khởi tạo bài đầu tiên
loadSong(songs[songIndex]);