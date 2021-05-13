
const animateSlider = (prevPos, nextPos, sliderKey) => {
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

export { animateSlider };