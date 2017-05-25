const templatesApp = document.querySelector(`#templates`);
const screenGenre = templatesApp.content.querySelector(`.main--level-genre`);
const screenResult = templatesApp.content.querySelector(`.main--result`);
const screenLevelArtist = templatesApp.content.querySelector(`.main--level-artist`);
const screenWelcome = templatesApp.content.querySelector(`.main--welcome`);
const sectionMain = document.querySelector(`.main`);
let currentScreen = 0;
const SCREEN_LIST = [screenWelcome, screenLevelArtist, screenGenre, screenResult];
const keyCodeList = {
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
};

const renderScreen = (numberScreen) =>
  sectionMain.appendChild(SCREEN_LIST[numberScreen]);


const isNextScreen = (event) => {
  return event.altKey && event.keyCode === keyCodeList.RIGHT_ARROW &&
  currentScreen < SCREEN_LIST.length - 1;
};

const isPreviousScreen = (event) => {
  return event.altKey && event.keyCode === keyCodeList.LEFT_ARROW &&
  currentScreen > 0;
};

const nextScreen = () => {
  sectionMain.removeChild(sectionMain.firstChild);
  renderScreen(++currentScreen);
};

const previousScreen = () => {
  sectionMain.removeChild(sectionMain.firstChild);
  renderScreen(--currentScreen);
};

const onDocumentKeyDown = (event) => {

  if (isNextScreen(event)) {
    nextScreen();
  }

  if (isPreviousScreen(event)) {
    previousScreen();
  }
};

renderScreen(currentScreen);

document.addEventListener(`keydown`, onDocumentKeyDown);
