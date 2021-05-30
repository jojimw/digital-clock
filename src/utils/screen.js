import { screenSize } from "../constants/screen";

export const getWindowSizeFromWidth = (target) => {
  const width = target.innerWidth;
  
  if (width > 800) return screenSize.laptop;

  if (width <= 800 && width > 500) return screenSize.tab;

  return screenSize.phone
};