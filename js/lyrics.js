//object들의 array
const lyrics = [
    {
        lyric: "僕の心が 僕を追い越したんだよ",
        song: "なんでもないや - RADWIMPS"
    },
    {
        lyric: "どこまでも",
        song: "もう少しだけ - YOASOBI"
    },
    {
        lyric: "君に逢えた それだけで僕は",
        song: "Diary - 世界の終わり"
    },
    {
        lyric: "頑張れたらそうしたいよ",
        song: "Birdman - 世界の終わり"
    },
    {
        lyric: "「君は綺麗だ」",
        song: "Pretender - Official髭男dism"
    }
];

const lyric = document.querySelector("#lyrics span:first-child");
const song = document.querySelector("#lyrics span:last-child");
const todaysLyric = lyrics[Math.floor(Math.random() * lyrics.length)];

lyric.innerText = todaysLyric.lyric;
song.innerText = todaysLyric.song;