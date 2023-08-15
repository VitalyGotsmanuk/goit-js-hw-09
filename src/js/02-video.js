import Player from '@vimeo/player';
//const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//console.log(player.element);

function time(obj){
    //console.dir(obj);
    const seconds = obj.seconds;
    console.log(seconds);
    localStorage.setItem(`currentTime`, JSON.stringify(seconds));
}

const timeVideo = localStorage.getItem(`currentTime`);
//console.log(timeVideo);

player.on(`timeupdate`, throttle(time, 1000));
player.setCurrentTime(timeVideo);

// player.on('play', function() {
//     console.log('Played the video!');
// });

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });
