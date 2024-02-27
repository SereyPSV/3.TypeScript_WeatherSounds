require('./index.scss');

const summerBg: URL = require('./assets/summer-bg.jpg');
const rainyBg: URL = require('./assets/rainy-bg.jpg');
const winterBg: URL = require('./assets/winter-bg.jpg');
const urlSunIcon: URL = require('./assets/icons/sun.svg');
const urlRainIcon: URL = require('./assets/icons/cloud-rain.svg');
const urlSnowIcon: URL = require('./assets/icons/cloud-snow.svg');
const urlPauseIcon: URL = require('./assets/icons/pause.svg');
const urlSunAudio: URL = require('./assets/sounds/summer.mp3');
const urlRainAudio: URL = require('./assets/sounds/rain.mp3');
const urlSnowAudio: URL = require('./assets/sounds/winter.mp3');

let isPlay: boolean = false;
let isChooseSun: boolean = false;
let isChooseRain: boolean = false;
let isChooseSnow: boolean = false;
const body = document.body as HTMLElement; // один из вариантов определения типа для: const body
const main: HTMLElement = body.querySelector('main')!;
const background: HTMLElement | null = main.querySelector('.background')!;
const content: HTMLElement | null = main.querySelector('.content');
const buttons: HTMLElement | null = main.querySelector('.buttons');
const summerButton: HTMLElement | null = main.querySelector('.summer');
const sunIcon: HTMLElement | null = main!.querySelector('.sun');
const rainyButton: HTMLElement | null = main.querySelector('.rainy');
const rainIcon: HTMLElement | null = main.querySelector('.rain');
const winterButton: HTMLElement | null = main.querySelector('.winter');
const snowIcon: HTMLElement | null = main.querySelector('.snow');
const volumeControl = main.querySelector('.volume_control') as HTMLInputElement;

const audio: HTMLAudioElement = new Audio();

changeBackground([summerBg, rainyBg, winterBg][Math.round(Math.random() * 2)]);

function returnIcon(): void {
  sunIcon!.style.backgroundImage = `url(${urlSunIcon})`;
  rainIcon!.style.backgroundImage = `url(${urlRainIcon})`;
  snowIcon!.style.backgroundImage = `url(${urlSnowIcon})`;
}
function isChooseReset(): void {
  isChooseSun = false;
  isChooseRain = false;
  isChooseSnow = false;
}

function changeBackground(image: URL): void {
  background!.style.backgroundImage = `url(${image})`;
  returnIcon();
}

function audioPlayerControl(
  urlSound: URL,
  isChoose: boolean,
  icon: HTMLElement,
  urlIcon: URL,
): void {
  if (audio) {
    audio.src = `${urlSound}`;
  }
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
}

function iconChange(icon: HTMLElement, urlIcon: URL): void {
  icon.style.backgroundImage = `url(${urlIcon})`;
}

summerButton?.addEventListener('click', () => {
  changeBackground(summerBg);
  audioPlayerControl(urlSunAudio, isChooseSun, sunIcon!, urlSunIcon);
  isChooseReset();
  isChooseSun = true;
});

rainyButton?.addEventListener('click', () => {
  changeBackground(rainyBg);
  audioPlayerControl(urlRainAudio, isChooseRain, rainIcon!, urlRainIcon);
  isChooseReset();
  isChooseRain = true;
});

winterButton?.addEventListener('click', () => {
  changeBackground(winterBg);
  audioPlayerControl(urlSnowAudio, isChooseSnow, snowIcon!, urlSnowIcon);
  isChooseReset();
  isChooseSnow = true;
});

volumeControl.addEventListener('input', () => {
  audio!.volume = Number(volumeControl.value);
});
