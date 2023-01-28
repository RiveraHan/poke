import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import PokemonCard from './PokemonCard';

type Props = {
  pokemons: PokemonDetail[];
};

export default function PokemonList({pokemons}: Props): JSX.Element {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={pokemon => String(pokemon.id)}
      renderItem={({item}) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
