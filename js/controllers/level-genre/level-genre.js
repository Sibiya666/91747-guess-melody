import serviceRender from '../../service/service-render';
import initializePlayer from '../../player';
import changeState from '../../service/router';
import data from './level-genre-data';
import template from './level-genre-template';

const screenGenre = serviceRender.createElement(template(data));
const formGenre = screenGenre.querySelector(`.genre`);
const genreInputs = formGenre.querySelectorAll(`input[type="checkbox"]`);
const answerSend = screenGenre.querySelector(`.genre-answer-send`);

/**
 * @param {Array<number>} array
 */
const toggleSubmit = (array) => {
  answerSend.disabled = !array.length > 0;
};

/**
 * Reset form and reset button.
 */
const resetScreenGenre = () => {
  answerSend.disabled = true;
  formGenre.reset();
};

answerSend.disabled = true;

/**
 * Event listener.
 * @param {Event} event
 */
formGenre.addEventListener(`change`, (event) => {
  const checkedGenreInputs = [];

  Array.from(genreInputs).forEach((genreInputsItem) => {
    if (genreInputsItem.checked) {
      checkedGenreInputs.push(genreInputsItem);
    }
  });

  toggleSubmit(checkedGenreInputs);
});

/**
 * Event listener.
 * @param {MouseEvent} event
 */
answerSend.addEventListener(`click`, (event) => {
  event.preventDefault();
  resetScreenGenre();
  changeState(`result`);
});

initializePlayer(screenGenre.querySelector(`[data-id='1']`), data.genre1.genreSong, false);
initializePlayer(screenGenre.querySelector(`[data-id='2']`), data.genre2.genreSong, false);
initializePlayer(screenGenre.querySelector(`[data-id='3']`), data.genre3.genreSong, false);
initializePlayer(screenGenre.querySelector(`[data-id='4']`), data.genre3.genreSong, false);
export default screenGenre;
