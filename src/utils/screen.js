import { screenSize } from "../constants/screen";

export const getWindowSizeFromWidth = (target) => {
  const width = target.innerWidth;
  
  if (width > 750) return screenSize.laptop;

  if (width <= 750 && width > 420) return screenSize.tab;

  return screenSize.phone
};