let templatesApp = document.querySelector(`#templates`);
let screenGenre = templatesApp.content.querySelector(`.main--level-genre`);
let screenResult = templatesApp.content.querySelector(`.main--result`);
let screenLevelArtist = templatesApp.content.querySelector(`.main--level-artist`);
let screenWelcome = templatesApp.content.querySelector(`.main--welcome`);
let sectionMain = document.querySelector(`.main`);
let currentScreen = 0;
const screenList = [screenWelcome, screenLevelArtist, screenGenre, screenResult];
const startPointArray = 0;
const lastPointArray = -1;
const keyCodeList = {
  leftArrow: 37,
  rightArrow: 39,
  altKey: 18
};

let renderScreen = (numberScreen) =>
  sectionMain.appendChild(screenList[numberScreen]);

//Написал функцию для проверки на Alt и ->,
//но она не работает, если подставлять в условие.
// В  чем моя ошибка?

let  z = (event) => {
  event.altKey && event.keyCode === keyCodeList.rightArrow &&
  currentScreen < screenList.length - lastPointArray;
};

let  b = (event) => {
  event.altKey && event.keyCode === keyCodeList.leftArrow &&
  currentScreen > 0;
};

let nextScreen = () => {
  sectionMain.removeChild(sectionMain.firstChild);
  renderScreen(++currentScreen);
};

let previousScreen = () => {
  sectionMain.removeChild(sectionMain.firstChild);
  renderScreen(--currentScreen);
};

let onDocumentKeyDown = (event) => {
  if (event.altKey && event.keyCode === keyCodeList.rightArrow &&
    currentScreen < screenList.length - lastPointArray) {
    nextScreen();
  }

  if (event.altKey && event.keyCode === keyCodeList.leftArrow &&
    currentScreen > startPointArray) {
    previousScreen();
  }
};

renderScreen(currentScreen);

document.addEventListener(`keydown`, onDocumentKeyDown);
