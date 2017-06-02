/**
 * Return template of player
 * @return {string}
 * */
const template = () => `
   <div class="conteiner">
      <div class="player">
        <audio></audio>
        <button class="player-control">Play</button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
  </div>`;

export default template;
