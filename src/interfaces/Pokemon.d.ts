interface PokemonType {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}

interface Result {
  name: string;
  url: string;
}

interface PokemonContextProps {
  pokemons: PokemonDetail[];
}
