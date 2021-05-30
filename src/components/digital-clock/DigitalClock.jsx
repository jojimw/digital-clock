import React, { useEffect, useState } from 'react';

import Slider from '../slider/Slider';

import './styles.scss';
import { useWindowResize } from '../../hooks/useWindowResize';
import { hoursDateKey, minutesDateKey, secondsDateKey } from '../../constants/time';
import { getParsedSliderDateValues } from '../../utils/time';

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const { windowSize } = useWindowResize();
  
  useEffect(() => {
    const getTime = () => {
      setCurrentTime(new Date());
    };

    const counter = setInterval(getTime, 1000);
    
    return () => {
      clearInterval(counter);
    }
  }, []);

  const dateValues = getParsedSliderDateValues(currentTime)

  return (
    <div className="wrapper">
      {hoursDateKey.map((key) => <Slider
        key={key}
        sliderKey={key}
        currentValue={dateValues[key]}
        length={key === hoursDateKey[0] ? 2 : 10}
        windowSize={windowSize}
      />)}
      
      <p className="divider">:</p>
      
      {minutesDateKey.map((key) => <Slider
        key={key}
        sliderKey={key}
        currentValue={dateValues[key]}
        windowSize={windowSize}
      />)}
      
      <p className="divider">:</p>

      {secondsDateKey.map((key) => <Slider
        key={key}
        sliderKey={key}
        currentValue={dateValues[key]}
        windowSize={windowSize}
      />)}
    </div>
  )
}

export default DigitalClock;