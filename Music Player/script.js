// Write your javascript here
document.addEventListener("DOMContentLoaded", () => {

    const play = document.querySelector(".play");
    const next = document.querySelector(".skip-forward");
    const prev = document.querySelector(".skip-back");
    play.addEventListener("click", playM);
    next.addEventListener("click", nextM);
    prev.addEventListener("click", prevM);
    const audioTitle = document.getElementsByClassName("audio-title")[0];
    const audioSinger = document.getElementsByClassName("audio-singer")[0];
    // const play = document.getElementsByClassName("play")[0];
    // const play = document.getElementsByClassName("play")[0];
    const tracks = [
        {
            name: "Let me down slowly",
            artist: "Alec Benjamin",
            cover: "alec.jpg",
            source: "Let me down slowly.mp3",
        },
        {
            name: "Let me love you",
            artist: "DJ Snake/Justin Beiber",
            cover: "dj.jpg",
            source: "Let me love you.mp3",
        },
        {
            name: "Perfect",
            artist: "Ed Sheeran",
            cover: "ed.jpg",
            source: "Perfect.mp3",
        },

    ];
    let trackNo = Math.abs(Math.floor(Math.random() * 10)) % tracks.length;
    updateTrack(trackNo);

    function playM() {
    }

    function nextM() {
        trackNo = (++trackNo) % (tracks.length);
        updateTrack(trackNo);
    }
    function prevM() {
        trackNo = (--trackNo + tracks.length) % (tracks.length);

        updateTrack(trackNo);
    }

    function updateTrack(trackNo) {
        const track = tracks[trackNo];
        audioTitle.textContent = track.name;
        audioSinger.textContent = track.artist;
    }

})


