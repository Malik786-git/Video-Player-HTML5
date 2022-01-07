// Get DOM element
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
///////////////////////////////////////////////////////

// for clicking on video;
const toggleVideoStatus = ()=>{

}

// for updating the play / pause icons;
const updatePlayIcon = ()=>{

}
// for update the progress bar;


const updateProgress = ()=>{

}

// for stop the video;

const stopVideo = ()=>{

}

// 
////////////////////////////////////////////////////////
// event listeners for video player....
video.onclick = toggleVideoStatus();  
video.onpause = updatePlayIcon();
video.onplay = updatePlayIcon();
video.ontimeupdate = updateProgress();


// event listeners for buttons
play.onclick = toggleVideoStatus();
stop.onclick = stopVideo();
progress.onchange = setVideoProgress();










