import moment from 'moment';

import { hoursDateKey, minutesDateKey, secondsDateKey } from '../constants/time';

export const getParsedSliderDateValues = (time) => {
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