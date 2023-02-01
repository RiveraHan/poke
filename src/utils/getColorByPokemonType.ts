import {POKEMON_COLORS} from '../resources/pokemonColors';

const getColorByPokemonType = (type: string): string => {
  const colors: Colors = POKEMON_COLORS;
  const value = type.toLowerCase();
  return colors[value as keyof Colors];
};

export default getColorByPokemonType;
