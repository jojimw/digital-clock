import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import { animateSlider, getNextPositionFromValue, getPrevPositionFromValue } from '../../utils/slider';

const Slider = ({ currentValue, sliderKey, length = 10, windowSize }) => {
  // useEffect to animate the slider to required position based on currentValue prop
  useEffect(() => {
    animateSlider({
      prevPos: getPrevPositionFromValue(currentValue),
      nextPos: getNextPositionFromValue(currentValue),
      sliderKey
    });
  }, [currentValue, sliderKey]);

  // Stores a dummy array of length from props (default is 10)
  const indexes = [...new Array(length)];

  return (
    <>
    <div className="slider-column">
      <div id={`slider-control-${sliderKey}`}>
        {indexes.map((_, index) => (
          <div className="slider-circle" key={`circle_${index}`}>
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