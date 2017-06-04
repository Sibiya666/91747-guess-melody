/**
 * Template.
 * @param {Object} genre
 * @return {string}
 */
const genreTemplate = (genre) =>`
  <div class="genre-answer">
    <div class="player-wrapper" data-id="${genre.genreId}">        
    </div>
    <input type="checkbox" name="answer" value="answer-${genre.genreId}" id="a-${genre.genreId}">
    <label class="genre-answer-check" for="a-${genre.genreId}"></label>
  </div>`;

/**
 * Template.
 * @param {Object} data
 * @return {string}
 */
const template = (data) => `
  <section class="main main--level main--level-genre">
      <h2 class="title">Выберите инди-рок треки</h2>
      <form class="genre">
        ${Object.keys(data).map((dataItem) => genreTemplate(data[dataItem])).join(``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
  </section>`;

export default template;
