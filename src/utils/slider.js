import { screenSize } from "../constants/screen";

import {
  CIRCLE_HEIGHT_PHONE,
  CIRCLE_HEIGHT_TAB,
  CIRCLE_MARGIN_BOTTOM_PHONE,
  CIRCLE_MARGIN_BOTTOM_TAB,
  CIRCLE_MARGIN_HORIZONTAL_TAB,
  CIRCLE_MARGIN_HORIZONTAL_PHONE,
  INIT_Y_POS, INIT_Y_POS_PHONE,
  INIT_Y_POS_TAB,
  SLIDER_HEIGHT_PHONE,
  SLIDER_HEIGHT_TAB,
  Y_POS_INCREMENT,
  Y_POS_INCREMENT_PHONE,
  Y_POS_INCREMENT_TAB
} from "../constants/slider";

export const animateSlider = ({ prevPos, nextPos, sliderKey }) => {
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

const getPositionUpdateParams = (windowSize) => (
  {
    [screenSize.laptop]: {
      initYPos: INIT_Y_POS,
      yPosIncrement: Y_POS_INCREMENT
    },
    [screenSize.tab]: {
      initYPos: INIT_Y_POS_TAB,
      yPosIncrement: Y_POS_INCREMENT_TAB
    },
    [screenSize.phone]: {
      initYPos: INIT_Y_POS_PHONE,
      yPosIncrement: Y_POS_INCREMENT_PHONE
    },
  }[windowSize]
);

export const getNextPositionFromValue = ({ value, windowSize }) => {
  const { initYPos, yPosIncrement } = getPositionUpdateParams(windowSize);

  if (!value) return initYPos;

  return initYPos - ((value) * yPosIncrement);
};

export const getPrevPositionFromValue = ({ value, windowSize }) => {
  const { initYPos, yPosIncrement } = getPositionUpdateParams(windowSize);

  if (!value) return initYPos - (10 * yPosIncrement);

  return initYPos - ((value - 1) * yPosIncrement);
};

export const getSliderCircleStyle = (windowSize) => {
  switch (windowSize) {
    case screenSize.laptop:
      return null; // applies the default style in styles.scss file
      
    case screenSize.tab:
      return {
        width: `${CIRCLE_HEIGHT_TAB}px`,
        height: `${CIRCLE_HEIGHT_TAB}px`,
        margin: `0px ${CIRCLE_MARGIN_HORIZONTAL_TAB}px ${CIRCLE_MARGIN_BOTTOM_TAB}px`
      };

    case screenSize.phone:
      return {
        width: `${CIRCLE_HEIGHT_PHONE}px`,
        height: `${CIRCLE_HEIGHT_PHONE}px`,
        margin: `0px ${CIRCLE_MARGIN_HORIZONTAL_PHONE}px ${CIRCLE_MARGIN_BOTTOM_PHONE}px`
      };

    default:
      return null;
  }
};

export const getSliderColumnStyle = (windowSize) => {
  switch (windowSize) {
    case screenSize.laptop:
      return null; // applies the default style in styles.scss file
      
    case screenSize.tab:
      return { height: `${SLIDER_HEIGHT_TAB}px` };

    case screenSize.phone:
      return { height: `${SLIDER_HEIGHT_PHONE}px` };

    default:
      return null;
  }
};