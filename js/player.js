import serviceRender from './service/service-render';

const updateState = (element, player) => {
  element.querySelector(`.player-status`).style.width =
      `${parseInt(player.currentTime * 100 / player.duration, 10)}%`;
};

const templatePlayer = `
  <div class="player">
    <audio></audio>
    <button class="player-control">Play</button>
    <div class="player-track">
      <span class="player-status"></span>
    </div>
  </div>
`;
const elem = serviceRender.createElement(templatePlayer);
const syncState = (player, element) => {
  element.classList.toggle(`player--is-playing`, !player.paused);
};


const switchState = (state, player, element) => {
  if (player.paused) {
    player.play();
    state.stopAnimation = window.animation.animate(
        window.animation.getAnimation(player.currentTime, 1000, player.duration),
        (animation) => updateState(element, player));
  } else {
    player.pause();
    state.stopAnimation();
    state.stopAnimation = null;
  }

  syncState(player, element);
};


const destroyPlayer = (element, state) => {
  const player = element.querySelector(`audio`);
  const button = element.querySelector(`button`);

  if (state.stopAnimation) {
    state.stopAnimation();
  }

  player.src = null;
  button.onclick = null;
  element.innerHTML = ``;
  state = null;

  return true;
};


const initializePlayer = (element, file, autoplay = false, controllable = true) => {
  let state = {};


  const player = elem.querySelector(`audio`);
  const button = elem.querySelector(`button`);

  player.onloadeddata = () => {
    if (controllable) {
      button.onclick = () => switchState(state, player, elem);
    }

    if (autoplay) {
      switchState(state, player, elem);
    }
  };

  player.src = file;
  element.appendChild(elem);
  element.classList.toggle(`player--no-controls`, !controllable);

  return () => destroyPlayer(element, state);
};

export default initializePlayer;
