import {FlatList, StyleSheet, ActivityIndicator, Platform} from 'react-native';
import React, {useContext} from 'react';
import PokemonCard from './PokemonCard';
import {PokemonContext} from '../../context/PokemonProvider';

type Props = {
  pokemons: PokemonDetail[];
};

export default function PokemonList({pokemons}: Props): JSX.Element {
  const {loadPokemons, nextURL} = useContext(PokemonContext);

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={pokemon => String(pokemon.id)}
      renderItem={({item}) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={loadPokemons}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        nextURL ? (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        ) : null
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === 'android' ? 80 : 60,
  },
});
