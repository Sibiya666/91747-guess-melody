const templatesApp = document.querySelector(`#templates`);
const screenGenre = templatesApp.content.querySelector(`.main--level-genre`);
const screenResult = templatesApp.content.querySelector(`.main--result`);
const screenLevelArtist = templatesApp.content.querySelector(`.main--level-artist`);
const screenWelcome = templatesApp.content.querySelector(`.main--welcome`);
const sectionMain = document.querySelector(`.main`);
let currentScreen = 0;

/**
 * @readonly
 * @enum {HTML.element}
 */
const SCREEN_LIST = [screenWelcome, screenLevelArtist, screenGenre, screenResult];

/**
 * @readonly
 * @enum {number}
 */
const KEY_CODE_LIST = {
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
};

/**
 * Render screen.
 * @param {number} numberScreen
 */
const renderScreen = (numberScreen) => {
  sectionMain.innerHTML = ``;
  sectionMain.appendChild(SCREEN_LIST[numberScreen]);

};

/**
 * Keyboard event check.
 * @param {KeyboardEvent} event
 * @return {boolean}
 */
const hasNextScreen = (event) => {
  return event.altKey && event.keyCode === KEY_CODE_LIST.RIGHT_ARROW &&
  currentScreen < SCREEN_LIST.length - 1;
};

/**
 * Keyboard event check.
 * @param {KeyboardEvent} event
 * @return {boolean}
 */
const hasPreviousScreen = (event) => {
  return event.altKey && event.keyCode === KEY_CODE_LIST.LEFT_ARROW &&
  currentScreen > 0;
};

const nextScreen = () => {
  renderScreen(++currentScreen);
};

const previousScreen = () => {
  renderScreen(--currentScreen);
};

/**
 * Keyboard event listener.
 * @param {KeyboardEvent} event
 */
const onDocumentKeyDown = (event) => {

  if (hasNextScreen(event)) {
    nextScreen();
  }

  if (hasPreviousScreen(event)) {
    previousScreen();
  }
};

renderScreen(currentScreen);

document.addEventListener(`keydown`, onDocumentKeyDown);
