import './index.scss';

import summerBg from './assets/summer-bg.jpg';
import rainyBg from './assets/rainy-bg.jpg';
import winterBg from './assets/winter-bg.jpg';
import urlSunIcon from './assets/icons/sun.svg';
import urlRainIcon from './assets/icons/cloud-rain.svg';
import urlSnowIcon from './assets/icons/cloud-snow.svg';
import urlPauseIcon from './assets/icons/pause.svg';
import urlSunAudio from './assets/sounds/summer.mp3';
import urlRainAudio from './assets/sounds/rain.mp3';
import urlSnowAudio from './assets/sounds/winter.mp3';

let isPlay = false;
let isChooseSun = false;
let isChooseRain = false;
let isChooseSnow = false;
const body = document.body;
const main = body.querySelector('main');
const background = main.querySelector('.background');
const content = main.querySelector('.content');
const buttons = content.querySelector('.buttons');
const summerButton = buttons.querySelector('.summer');
const sunIcon = summerButton.querySelector('.sun');
const rainyButton = buttons.querySelector('.rainy');
const rainIcon = rainyButton.querySelector('.rain');
const winterButton = buttons.querySelector('.winter');
const snowIcon = winterButton.querySelector('.snow');
const volumeControl = content.querySelector('.volume_control');

const audio = new Audio();

changeBackground([summerBg, rainyBg, winterBg][Math.round(Math.random() * 2)]);

function returnIcon() {
  sunIcon.style.backgroundImage = `url(${urlSunIcon})`;
  rainIcon.style.backgroundImage = `url(${urlRainIcon})`;
  snowIcon.style.backgroundImage = `url(${urlSnowIcon})`;
}
function isChooseReset() {
  isChooseSun = false;
  isChooseRain = false;
  isChooseSnow = false;
}

function changeBackground(image) {
  background.style.backgroundImage = `url(${image})`;
  returnIcon();
}

const audioPlayerControl = (urlSound, isChoose, icon, urlIcon) => {
  audio.src = urlSound;
  if (isChoose) {
    if (isPlay) {
      iconChange(icon, urlIcon);
      audio.pause();
      isPlay = false;
    } else {
      iconChange(icon, urlPauseIcon);
      audio.play();
      isPlay = true;
    }
  } else {
    returnIcon();
    iconChange(icon, urlPauseIcon);
    audio.play();
    isPlay = true;
  }
};

function iconChange(icon, urlIcon) {
  icon.style.backgroundImage = `url(${urlIcon})`;
}

summerButton.addEventListener('click', () => {
  changeBackground(summerBg);
  audioPlayerControl(urlSunAudio, isChooseSun, sunIcon, urlSunIcon);
  isChooseReset();
  isChooseSun = true;
});

rainyButton.addEventListener('click', () => {
  changeBackground(rainyBg);
  audioPlayerControl(urlRainAudio, isChooseRain, rainIcon, urlRainIcon);
  isChooseReset();
  isChooseRain = true;
});

winterButton.addEventListener('click', () => {
  changeBackground(winterBg);
  audioPlayerControl(urlSnowAudio, isChooseSnow, snowIcon, urlSnowIcon);
  isChooseReset();
  isChooseSnow = true;
});

volumeControl.addEventListener('input', () => {
  audio.volume = volumeControl.value;
});
