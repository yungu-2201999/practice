import videojs from 'video.js'
import 'video.js/dist/video-js.css';

const player = videojs('vid1', {
    controls: true,
    autoplay: true,
    preload: 'auto',
    preload: 'auto',
    aspectRatio: "4:3",
    playsinline: true,
    playbackRates: [0.5, 1, 1.5, 2],
    controlBar: {
        remainingTimeDisplay: {
            displayNegative: false
        }
    }
});
console.log(videojs.players)