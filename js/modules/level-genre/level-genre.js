import serviceRender from '../../service/service-render';
import initializePlayer from '../player/player';
import changeState from '../../service/service-router';
import data from './level-genre-data';
import template from './level-genre-template';

/**
 * Get Screen of game.
 * @return {HTMLElement}
 */
const getScreen = () => {
  const screenGenre = serviceRender.createElement(template(data));
  const formGenre = screenGenre.querySelector(`.genre`);
  const genreInputs = formGenre.querySelectorAll(`input[type="checkbox"]`);
  const answerSend = screenGenre.querySelector(`.genre-answer-send`);
  const RIGHT_ANSWERS = 3;
  /**
   * @param {number} number
   */
  const toggleSubmit = (number) => {
    answerSend.disabled = !number > RIGHT_ANSWERS;
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
    let checkedGenreInputs = 0;

    Array.from(genreInputs).forEach((genreInputsItem) => {
      if (genreInputsItem.checked) {
        checkedGenreInputs++;
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
  return screenGenre;
};

export default getScreen;
