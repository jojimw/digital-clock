import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

import { screenSize } from '../constants/screen';
import { getWindowSizeFromWidth } from '../utils/screen';

export const useWindowResize = () => {
  /**
   * > 800 - screenSize.laptop
   * <= 800 & > 500 - screenSize.tab
   * <= 500 - screenSize.phone
   */
  const [windowSize, setWindowSize] = useState(screenSize.laptop);

  useEffect(() => {
    const updateWindowSize = (target) => {
      const newScreen = getWindowSizeFromWidth(target);
      setWindowSize(newScreen);
    };

    // called on initial page mount
    updateWindowSize(window);

    const onWindowSizeChange = throttle(
      (event) => {
        // called on window resize event
        updateWindowSize(event.currentTarget);
      }, 500
    );

    window.addEventListener('resize', onWindowSizeChange);

    return () => window.removeEventListener('resize', onWindowSizeChange)
  }, []);

  return {
    windowSize
  };
}
