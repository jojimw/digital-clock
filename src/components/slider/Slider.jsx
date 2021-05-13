import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import { animateSlider } from '../../utils';

// init - 210px
// next item increment - 100px
// per circle height - 100px
// slider height - 500px

const INIT_Y_POS = 210;
const Y_POS_INCREMENT = 100;

const getNextPositionFromValue = (value) => {
  if (!value) return INIT_Y_POS;

  return INIT_Y_POS - ((value) * Y_POS_INCREMENT);
}

const getPrevPositionFromValue = (value) => {
  if (!value) return INIT_Y_POS - (10 * Y_POS_INCREMENT);

  return INIT_Y_POS - ((value - 1) * Y_POS_INCREMENT);
}

const Slider = ({ currentValue, sliderKey, length = 10 }) => {
  // useEffect to animate the slider to required position based on currentValue prop
  useEffect(() => {
    animateSlider(getPrevPositionFromValue(currentValue), getNextPositionFromValue(currentValue), sliderKey);
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