import {useState, useEffect, createContext} from 'react';
import {ReactNode} from 'react';
import {http} from '../libs/http';

type Props = {
  children?: ReactNode;
};

export const PokemonContext = createContext<PokemonContextProps>(
  {} as PokemonContextProps,
);

const PokemonProvider = ({children}: Props) => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await http.get<PokemonType>(
        'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0',
      );
      const pokeArray: PokemonDetail[] = [];
      for await (let pokemon of response.results) {
        const pokemonDetails = await http.get<PokemonDetails>(pokemon.url);
        pokeArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          img: pokemonDetails.sprites.other['official-artwork'].front_default,
        });
      }
      setPokemons([...pokemons, ...pokeArray]);
    } catch (error) {
      return console.error(error);
    }
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <PokemonContext.Provider value={{pokemons}}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
