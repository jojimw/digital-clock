import React, { useEffect, useState } from 'react';
import moment from 'moment';

import Slider from '../slider/Slider';

import './styles.scss';

const hoursDateKey = [
  'hoursPrefix',
  'hoursSuffix'
];

const minutesDateKey = [
  'minutesPrefix',
  'minutesSuffix'
];

const secondsDateKey = [
  'secondsPrefix',
  'secondsSuffix'
];

const getParsedData = (time) => {
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hoursMoment = moment(time).format('h');

  return {
    [secondsDateKey[0]]: Math.floor(seconds / 10),
    [secondsDateKey[1]]: seconds % 10,
    [minutesDateKey[0]]: Math.floor(minutes / 10),
    [minutesDateKey[1]]: minutes % 10,
    [hoursDateKey[0]]: Math.floor(hoursMoment / 10),
    [hoursDateKey[1]]: hoursMoment % 10
  }
}

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const getTime = () => {
    setCurrentTime(new Date());
  };
  
  useEffect(() => {
    const counter = setInterval(getTime, 1000);
    
    return () => {
      clearInterval(counter);
    }
  }, []);

  const dateData = getParsedData(currentTime)

  return (
    <div className="wrapper">
      {hoursDateKey.map((key) => <Slider key={key} sliderKey={key} currentValue={dateData[key]} length={key === hoursDateKey[0] ? 2 : 10} />)}
      
      <p className="divider">:</p>
      
      {minutesDateKey.map((key) => <Slider key={key} sliderKey={key} currentValue={dateData[key]} />)}
      
      <p className="divider">:</p>

      {secondsDateKey.map((key) => <Slider key={key} sliderKey={key} currentValue={dateData[key]} />)}
    </div>
  )
}

export default DigitalClock;