import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React from 'react';

type Props = {
  pokemon: PokemonDetail;
};

export default function PokemonCard({pokemon}: Props): JSX.Element {
  const handleGotoPokemon = () => {
    console.log('handleGotoPokemon', pokemon);
  };
  return (
    <TouchableWithoutFeedback onPress={handleGotoPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(2, '0')}
            </Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{uri: pokemon.img}} style={styles.img} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    backgroundColor: 'grey',
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 11,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
  },
  img: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});
