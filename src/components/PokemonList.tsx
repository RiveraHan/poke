import {FlatList, Text, StyleSheet} from 'react-native';
import React from 'react';

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
      renderItem={({item}) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
