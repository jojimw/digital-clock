import { INIT_Y_POS, Y_POS_INCREMENT } from "../constants/slider";

const animateSlider = ({ prevPos, nextPos, sliderKey }) => {
  const sliderElement = document.getElementById(`slider-control-${sliderKey}`);

  const options = {
      iterations: 1,
      duration: 500,
      fill: 'forwards',
      easing: 'cubic-bezier(.19, 1, .22, 1.04)',
  };
  const keyframes = [
      { transform: `translateY(${prevPos}px)` },
      { transform: `translateY(${nextPos}px)` }
  ];
  sliderElement && sliderElement.animate(keyframes, options);
};

const getNextPositionFromValue = (value) => {
  if (!value) return INIT_Y_POS;

  return INIT_Y_POS - ((value) * Y_POS_INCREMENT);
}

const getPrevPositionFromValue = (value) => {
  if (!value) return INIT_Y_POS - (10 * Y_POS_INCREMENT);

  return INIT_Y_POS - ((value - 1) * Y_POS_INCREMENT);
}

export { animateSlider, getNextPositionFromValue, getPrevPositionFromValue };