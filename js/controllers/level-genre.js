import serviceRender from '../service/service-render';
import loadScreenResultLoser from './result-loser';
import initializePlayer from '../player';
import loadScreenResultWinner from './result-winner';

const listGenres = {
  genre1: {
    genreId: `1`,
    genreSong: ``,
  },
  genre2: {
    genreId: `2`,
    genreSong: ``,
  },
  genre3: {
    genreId: `3`,
    genreSong: ``,
  },
  genre4: {
    genreId: `4`,
    genreSong: ``,
  }
};

const templateGenre = (genre) =>
  `
  <div class="genre-answer">
    <div class="player-wrapper">        
    </div>
    <input type="checkbox" name="answer" value="answer-${listGenres[genre].genreId}" id="a-${listGenres[genre].genreId}">
    <label class="genre-answer-check" for="a-${listGenres[genre].genreId}"></label>
  </div>
<!--initializePlayer(player, listGenres[genre].genreSong, false) -->
`;

const template = `
          <section class="main main--level main--level-genre">
              <h2 class="title">Выберите инди-рок треки</h2>
              <form class="genre">
                ${Object.keys(listGenres).map((listGenresItem) => templateGenre(listGenresItem)).join(``)}
                <button class="genre-answer-send" type="submit">Ответить</button>
              </form>
          </section>
    `;
const screenGenre = serviceRender.createElement(template);
const formGenre = screenGenre.querySelector(`.genre`);
// const player = screenGenre.querySelector(`player-wrapper`);
const genreInputs = formGenre.querySelectorAll(`input[type="checkbox"]`);
const answerSend = screenGenre.querySelector(`.genre-answer-send`);
/**
 * @param {Array<number>} array
 */
const toggleSubmit = (array) => {
  answerSend.disabled = !array.length > 0;
};

/**
 * Load screen Genre.
 */
const loadScreenGenre = () => {
  serviceRender.renderScreen(screenGenre);
};

/**
 * Load random screen with result.
 */
const randomScreenResult = () => {
  if (Math.round(Math.random())) {
    loadScreenResultWinner();
  } else {
    loadScreenResultLoser();
  }
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
  randomScreenResult();
});

export default loadScreenGenre;
