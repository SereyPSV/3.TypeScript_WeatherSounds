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

changeBackground([summerBg, rainyBg, winterBg][Math.round(Math.random() * 2)]);
returnIcon();

function changeBackground(image) {
  background.style.backgroundImage = `url(${image})`;
  returnIcon();
}

summerButton.addEventListener('click', () => {
  changeBackground(summerBg);
  sunIcon.style.backgroundImage = `url(${urlPauseIcon})`;
});

rainyButton.addEventListener('click', () => {
  changeBackground(rainyBg);
  rainIcon.style.backgroundImage = `url(${urlPauseIcon})`;
});

winterButton.addEventListener('click', () => {
  changeBackground(winterBg);
  snowIcon.style.backgroundImage = `url(${urlPauseIcon})`;
});

function returnIcon() {
  sunIcon.style.backgroundImage = `url(${urlSunIcon})`;
  rainIcon.style.backgroundImage = `url(${urlRainIcon})`;
  snowIcon.style.backgroundImage = `url(${urlSnowIcon})`;
}
