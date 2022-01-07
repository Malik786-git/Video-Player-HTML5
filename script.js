
// Get DOM element
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
///////////////////////////////////////////////////////

// for clicking on video;
const toggleVideoStatus = () => {
   if(video.paused){
       video.play();
   }else{
       video.pause();
   }
}

// for updating the play / pause icons;
const updatePlayIcon = () => {
    if(video.paused){
       play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }else{
       play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    }
}
// for update the progress bar;


const updateProgress = () => {

    // console.log(video.currentTime);
    // console.log(video.duration);
    
    // slider mover...
    progress.value = (video.currentTime / video.duration)*100;
    
    // set the time for timestamp;
    let mins = Math.floor(video.currentTime/60);
    if (mins<10) {
        mins = '0' + String(mins);
    }
    
    let secs = Math.floor(video.currentTime % 60);
    if (secs<10) {
        secs = '0' + String(secs);
    }
    timestamp.innerHTML = `${mins}:${secs}`;
}

// for stop the video;

const stopVideo = () => {
    video.currentTime = 0;
    video.pause();
}

// for update the video progress using the slider
const setVideoProgress = () => {
     video.currentTime = (+progress.value*video.duration)/100;
}




////////////////////////////////////////////////////////
// event listeners for video player....
video.onclick = toggleVideoStatus;
video.onpause = updatePlayIcon;
video.onplay = updatePlayIcon;
video.ontimeupdate = updateProgress;


// event listeners for buttons
play.onclick = toggleVideoStatus;
stop.onclick = stopVideo;
progress.onchange = setVideoProgress;










