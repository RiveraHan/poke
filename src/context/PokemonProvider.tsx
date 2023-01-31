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
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | undefined>(
    {} as PokemonDetail,
  );
  const [nextURL, setNextURL] = useState<string>('');

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadPokemons = async () => {
    try {
      const url =
        nextURL || 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

      const response = await http.get<PokemonType>(url);
      setNextURL(response.next);

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

  const detailsPokemon = async (id: number) => {
    try {
      const response = await pokemons.find(pokemon => pokemon.id === id);
      setPokemonDetail(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <PokemonContext.Provider
      value={{pokemons, nextURL, pokemonDetail, loadPokemons, detailsPokemon}}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
