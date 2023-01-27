import {SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import PokemonList from '../components/PokemonList';
import {PokemonContext} from '../context/PokemonProvider';

export default function PokedexScreen(): JSX.Element {
  const {pokemons} = useContext(PokemonContext);
  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
}
