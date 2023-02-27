// collect all of the album covers into a variable
//let albumCovers = document.querySelectorAll("#album-art img");
//const albumCovers = document.querySelectorAll("#album-art img"); const쓰면 변수가 절대 바뀌지 않음
// theAudioEl = document.querySelectorAll('audio');

const   albumCovers = document.querySelectorAll("#album-art img"),
        theAudioEl = document.querySelector('audio'),
        playButton = document.querySelector("#playButton"),
        pauseButton = document.querySelector("#pauseButton"),
        rewindButton = document.querySelector("#rewindButton"),

        volSlider = document.querySelector('#volumeControl')

//load the new audio source
function loadAudio(){
    let currentSrc =`audio/${this.dataset.trackref}.mp3`;
    // ``는 ~ 아래에 있는 것임
    // set the new audio source
    theAudioEl.src = currentSrc;
    // load the new audio source
    theAudioEl.load();
    //play the new audio source
    theAudioEl.play();
}

// *** 함수에서 () 는 실행하라는 명령
//function ~() 는 함수 정의하는 것이고 { }안에 실행문 쓰는것


function playAudio(){ theAudioEl.play();}
function resrartAudio() { theAudioEl.currentTime = 0; playAudio();}
function pauseAudio() { theAudioEl.pause();}

function setVolume(){
    //get the numeric value of the volume slider between 0 (min) and 100(max)
    //that's what the volume of the audio should ve set to
    console. log(this.value);

    theAudioEl.volume = this.value/100; 
    // divide the value to get a floating point number between 0 and 1
    // and then set the audio element's volume level to match
}

// add event handling to the album covers (listen for a click event)
albumCovers.forEach(cover => cover.addEventListener('click', loadAudio));

// add event handling 
playButton.addEventListener('click', playAudio);
rewindButton.addEventListener('click', resrartAudio);
pauseButton.addEventListener('click', pauseAudio);

volSlider.addEventListener('change', setVolume);
