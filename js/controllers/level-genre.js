import serviceRender from '../service/service-render';
import loadScreenResultLoser from './result-loser';
import loadScreenResultWinner from './result-winner';
/**
 * @type Array<number>
 */
const listGenres = [1, 2, 3, 4];
const template = `
          <section class="main main--level main--level-genre">
              <h2 class="title">Выберите инди-рок треки</h2>
              <form class="genre">
                          
                ${listGenres.map((item) => `
                 <div class="genre-answer">
                  <div class="player-wrapper"></div>
                  <input type="checkbox" name="answer" value="answer-${item}" id="a-${item}">
                  <label class="genre-answer-check" for="a-${item}"></label>
                </div>`).join(``)}

                <button class="genre-answer-send" type="submit">Ответить</button>
              </form>
        </section>
    `;
const screenGenre = serviceRender.createElement(template);
const formGenre = screenGenre.querySelector(`.genre`);
const genreInputs = formGenre.querySelectorAll(`input[type="checkbox"]`);
const answerSend = screenGenre.querySelector(`.genre-answer-send`);
/**
 * @param {Array<number>} array
 */
const toggleSubmit = (array) => {
  answerSend.disabled = !array.length > 0;
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

const screenGenreLoad = () => {
  serviceRender.renderScreen(screenGenre);
};
/**
 * Event listener.
 * @param {MouseEvent} event
 */
answerSend.addEventListener(`click`, (event) => {
  event.preventDefault();
  return Math.round(Math.random()) ? loadScreenResultWinner() : loadScreenResultLoser();
});

export default screenGenreLoad;
