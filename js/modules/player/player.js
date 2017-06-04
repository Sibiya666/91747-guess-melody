import template from './player-template';
import serviceRender from '../../service/service-render';
import animationService from '../../service/service-animate';
const updateState = (element, player) => {
  element.querySelector(`.player-status`).style.width =
    `${parseInt(player.currentTime * 100 / player.duration, 10)}%`;
};

const syncState = (player, element) => {
  element.classList.toggle(`player--is-playing`, !player.paused);
};

const switchState = (state, player, element) => {
  if (player.paused) {
    player.play();
    state.stopAnimation = animationService.animate(
        animationService.getAnimation(player.currentTime, 1000, player.duration),
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
  const content = serviceRender.createElement(template())
    .querySelector(`.player`)
    .cloneNode(true);
  const player = content.querySelector(`audio`);
  const button = content.querySelector(`button`);

  player.onloadeddata = () => {
    if (controllable) {
      button.onclick = () => switchState(state, player, content);
    }

    if (autoplay) {
      switchState(state, player, content);
    }
  };

  player.src = file;
  element.appendChild(content);
  element.classList.toggle(`player--no-controls`, !controllable);

  return () => destroyPlayer(element, state);
};

export default initializePlayer;