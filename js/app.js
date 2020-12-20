window.addEventListener("load", () => {
    const music = document.querySelector("audio");
    const play = document.getElementById("play");
    const image = document.getElementById("disc_image");
    const title = document.getElementById("title");
    const artist = document.getElementById("artist");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    
    const current = document.getElementById('current');
    const total = document.getElementById('total');

    let isPlaying = false;
    let songIndex = 0;
    
    const songs = [{
            name: 'music-1',
            title: 'Butta Bomma',
            artist: 'Armaan Malik',
            image: 'image-1'
            },
        {
            name: 'music-2',
            title: 'RAMULO RAMULA',
            artist: 'Anurag Kulkarni and Mangli',
            image: 'image-2'
            },
        {
            name: 'music-3',
            title: 'Khairiyat',
            artist: 'Arijit Singh and Nitesh Tiwari',
            image: 'image-3'
            },
        {
            name: 'music-4',
            title: 'Namo Namo',
            artist: 'Amit Trivedi',
            image: 'image-4'
            }
        ];

    //Play Function
    const playMusic = () => {
        isPlaying = true;
        music.play();
        play.classList.replace('bx-play-circle', 'bx-pause-circle');
        image.classList.add('anime');
    }

    //Pause Function
    const pauseMusic = () => {
        isPlaying = false;
        music.pause();
        play.classList.replace('bx-pause-circle', 'bx-play-circle');
        image.classList.remove('anime');
    }

    play.addEventListener('click', () => {
        isPlaying ? pauseMusic() : playMusic();
    });

    //Change Song
    const loadSong = (songs) => {
        title.textContent = songs.title;
        artist.textContent = songs.artist;
        music.src = `audio/${songs.name}.mp3`;
        image.style.backgroundImage = `url(audio/${songs.image}.jpg)`;
    }


    const nextSong = () => {
        songIndex = (songIndex + 1) % songs.length;
        current.textContent = songIndex +1;
        loadSong(songs[songIndex]);
        playMusic();
    }
    const prevSong = () => {
        songIndex = (songIndex - 1 + songs.length) % songs.length;
        current.textContent = songIndex;
        loadSong(songs[songIndex]);
        playMusic();
    }

    next.addEventListener('click', nextSong);
    prev.addEventListener('click', prevSong);
    total.textContent = songs.length;

});
