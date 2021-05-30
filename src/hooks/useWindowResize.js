import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

import { screenSize } from '../constants/screen';
import { getWindowSizeFromWidth } from '../utils/screen';

export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState(screenSize.laptop);

  useEffect(() => {
    const updateWindowSize = (target) => {
      const newScreen = getWindowSizeFromWidth(target);
      setWindowSize(newScreen);
    };

    updateWindowSize(window);

    const onWindowSizeChange = throttle(
      (event) => {
        updateWindowSize(event.currentTarget);
      }, 500);

    window.addEventListener('resize', onWindowSizeChange);

    return () => window.removeEventListener('resize', onWindowSizeChange)
  }, []);

  return {
    windowSize
  };
}
