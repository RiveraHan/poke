import {SafeAreaView, ActivityIndicator, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import PokemonList from '../components/PokemonList';
import {PokemonContext} from '../context/PokemonProvider';

export default function PokedexScreen(): JSX.Element {
  const {pokemons} = useContext(PokemonContext);
  return pokemons.length > 0 ? (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  ) : (
    <ActivityIndicator size={100} color="#AEAEAE" style={styles.spinner} />
  );
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
