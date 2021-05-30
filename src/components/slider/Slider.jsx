import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import {
  animateSlider,
  getNextPositionFromValue,
  getPrevPositionFromValue,
  getSliderCircleStyle,
  getSliderColumnStyle
} from '../../utils/slider';

const Slider = ({ currentValue, sliderKey, length = 10, windowSize }) => {
  // useEffect to animate the slider to required position based on currentValue prop
  useEffect(() => {
    animateSlider({
      prevPos: getPrevPositionFromValue({ value: currentValue, windowSize }),
      nextPos: getNextPositionFromValue({ value: currentValue, windowSize }),
      sliderKey
    });
  }, [currentValue, sliderKey, windowSize]);

  // Stores a dummy array of length from props (default is 10)
  const indexes = [...new Array(length)];

  const sliderCircleStyle = getSliderCircleStyle(windowSize);

  const sliderColumnStyle = getSliderColumnStyle(windowSize);

  return (
    <>
    <div className="slider-column" style={sliderColumnStyle}>
      <div id={`slider-control-${sliderKey}`}>
        {indexes.map((_, index) => (
          <div className="slider-circle" key={`circle_${index}`} style={sliderCircleStyle} >
            <div>{index}</div>
          </div>
        ))}
      </div>
    </div>
  </>
  )
};

Slider.propTypes = {
  currentValue: PropTypes.number
};

export default Slider;