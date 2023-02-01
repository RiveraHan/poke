import {percentageStat} from './percentageStat';
import {COLOR_STATS} from '../resources/colorStats';

export const barStyles = (index: number, baseStat: number) => {
  const percentage = percentageStat(baseStat, index);

  let bgColorized;

  if (percentage <= 25) {
    bgColorized = COLOR_STATS.red;
  } else if (percentage > 25 && percentage < 50) {
    bgColorized = COLOR_STATS.yellow;
  } else if (percentage >= 50 && percentage < 75) {
    bgColorized = COLOR_STATS.green;
  } else if (percentage >= 75) {
    bgColorized = COLOR_STATS.strongGreen;
  }
  return {
    style: {backgroundColor: bgColorized, width: `${percentage}%`},
    percentage,
  };
};
