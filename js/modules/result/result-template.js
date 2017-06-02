/**
 * Template.
 * @param {Object} data
 * @return {string}
 */
const template = (data) => `        
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">${data.result}</h2>
    <div class="main-stat">${data.description}</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать еще раз</span>
  </section>
    `;

export default template;
