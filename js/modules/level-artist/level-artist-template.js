/**
 * Template.
 * @param {Object} artist
 * @return {string}
 */
const artistTemplate = (artist) => `
  <div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${artist.artistId}" name="answer" 
                                              value="val-${artist.artistId}" />
    <label class="main-answer" for="answer-${artist.artistId}">
      <img class="main-answer-preview" src="${artist.artistImg}">
      ${artist.artistName}
    </label>
  </div>`;

/**
 * Template.
 * @param {Object} data
 * @return {string}
 */
const template = (data) => `
  <section class="main main--level main--level-artist">
    
    <div class="main-wrap">
      <div class="main-timer"></div>
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
      ${Object.keys(data).map((dataItem) => artistTemplate(data[dataItem])).join(``)}
      </form>
    </div>
  </section>`;

export default template;
