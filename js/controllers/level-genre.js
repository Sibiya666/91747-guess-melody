import service from '../service/services';
import resultCtr from './result';

const template = `
          <section class="main main--level main--level-genre">
              <h2 class="title">Выберите инди-рок треки</h2>
              <form class="genre">
                <div class="genre-answer">
                  <div class="player-wrapper"></div>
                  <input type="checkbox" name="answer" value="answer-1" id="a-1">
                  <label class="genre-answer-check" for="a-1"></label>
                </div>
          
                <div class="genre-answer">
                  <div class="player-wrapper"></div>
                  <input type="checkbox" name="answer" value="answer-1" id="a-2">
                  <label class="genre-answer-check" for="a-2"></label>
                </div>
          
                <div class="genre-answer">
                  <div class="player-wrapper"></div>
                  <input type="checkbox" name="answer" value="answer-1" id="a-3">
                  <label class="genre-answer-check" for="a-3"></label>
                </div>
          
                <div class="genre-answer">
                  <div class="player-wrapper"></div>
                  <input type="checkbox" name="answer" value="answer-1" id="a-4">
                  <label class="genre-answer-check" for="a-4"></label>
                </div>
          
                <button class="genre-answer-send" type="submit">Ответить</button>
              </form>
        </section>
    `;
const genreScreen = service.createElement(template);
const formGenre = genreScreen.querySelector(`.genre`);
const genreInputs = formGenre.querySelectorAll(`input[type="checkbox"]`);
const answerSend = genreScreen.querySelector(`.genre-answer-send`);

const toggleConditionAnswerSend = (array) => {
  if (array.length > 0) {
    answerSend.disabled = false;
  } else {
    answerSend.disabled = true;
  }
};

answerSend.disabled = true;

// при повторном прохождении checkox  один горит уже, полагал, что этой
// функцией смогу его сбросить, но нет.
Array.prototype.forEach.call(genreInputs, (genreInputsItem) => {
  if (genreInputsItem.checked) {
    genreInputsItem.checked = false;
  }
});
formGenre.addEventListener(`change`, (event) => {
  const checkedGenreInputs = [];
  // вот тут можно было array.from, но не разобрался с синтаксисом
  Array.prototype.forEach.call(genreInputs, (genreInputsItem) => {
    if (genreInputsItem.checked) {
      checkedGenreInputs.push(genreInputsItem);
    }
  });

  // Array.from(genreInputs.forEach((genreInputsItem) => {
  //   if (genreInputsItem.checked) {
  //     checkedGenreInputs.push(genreInputsItem);
  //   }
  // }));

  toggleConditionAnswerSend(checkedGenreInputs);
});

const genreScreenLoad = () => {
  service.renderScreen(genreScreen);
};

answerSend.addEventListener(`click`, (event) => {
  event.preventDefault();
  resultCtr();
});

export default genreScreenLoad;
