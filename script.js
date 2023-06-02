
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('playI');
let myprogressbar = document.getElementById('myprogressbar');
let mygif = document.getElementById('gif');
let songsItems = Array.from(document.getElementsByClassName('songItem'));
let mastersongName = document.getElementById('mastersongName');

let songs = [
    {songName: "Jai Shree Ganesha" , filePath: "songs/1.mp3" , coverPath: "1.jpg"},
    {songName: "California Love" , filePath: "songs/2.mp3" , coverPath: "2.jpg"},
    {songName: "Obsessed" , filePath: "songs/3.mp3" , coverPath: "3.jpg"},
    {songName: "Apna Bana Le" , filePath: "songs/4.mp3" , coverPath: "4.jpg"},
    {songName: "Aam Jahe Munde" , filePath: "songs/5.mp3" , coverPath: "5.jpg"},
    {songName: "O Bedardeya" , filePath: "songs/6.mp3" , coverPath: "6.jpg"}
]

songsItems.forEach((element , i) => {
    console.log(element , 1);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

masterPlay.addEventListener('click' , () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        mygif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        makeAllplays();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        mygif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate' , () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change' , () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

// const makeAllplays = () => {
//     Array.from(document.getElementsByClassName('songItemplay')).forEach((element) =>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }

Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.addEventListener('click' , (e) => {
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        mygif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

// Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
//     element.addEventListener('click' , (e) => {
//         makeAllplays();
//         songIndex = parseInt(e.target.id);
//         audioElement.src = `songs/${songIndex+1}.mp3`;
//         mastersongName.innerText = songs[songIndex].songName;

//         if(audioElement.paused || audioElement.currentTime <= 0){
//             e.target.classList.remove('fa-play-circle'); 
//             e.target.classList.add('fa-pause-circle');
//             audioElement.play();
//             mygif.style.opacity = 1;
//             masterPlay.classList.remove('fa-play-circle');
//             masterPlay.classList.add('fa-pause-circle');
//         }
//         else{
//             e.target.classList.remove('fa-pause-circle'); 
//             e.target.classList.add('fa-play-circle');
//             audioElement.pause();
//             mygif.style.opacity = 0;
//             masterPlay.classList.remove('fa-pause-circle');
//             masterPlay.classList.add('fa-play-circle');
//         }
//     })
// })

document.getElementById('next').addEventListener('click' , () => {
    if(songIndex >= 5){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    makeAllplays();
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    document.getElementById(songIndex).classList.remove('fa-play-circle');
    document.getElementById(songIndex).classList.add('fa-pause-circle');
    audioElement.play();
    mygif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('prev').addEventListener('click' , () => {
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    makeAllplays();
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    document.getElementById(songIndex).classList.remove('fa-play-circle');
    document.getElementById(songIndex).classList.add('fa-pause-circle');
    audioElement.play();
    mygif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.addEventListener('click' , () => {
        if(audioElement.paused || audioElement.currentTime <= 0){
            audioElement.play();
            songItemplay.classList.remove('fa-play-circle');
            songItemplay.classList.add('fa-pause-circle');
            mygif.style.opacity = 1;
        }
        else{
            audioElement.pause();
            songItemplay.classList.add('fa-play-circle');
            songItemplay.classList.remove('fa-pause-circle');
            mygif.style.opacity = 0;
        }
    })
})