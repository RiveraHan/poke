import {MAXSTATS} from '../resources/maxStats';

export const percentageStat = (baseStat: number, index: number) => {
  const percentage = Math.round((100 * baseStat) / MAXSTATS[index]);
  return percentage;
};
