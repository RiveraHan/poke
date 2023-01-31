import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import getColorByPokemonType from '../utils/getColorByPokemonType';

type pokemonType = {
  pokemonDetail: PokemonDetail;
};

export default function PokemonHeader({
  pokemonDetail,
}: pokemonType): JSX.Element {
  const {name, order, type, img} = pokemonDetail;

  const [bgColor, setBgColor] = useState<string>();

  useEffect(() => {
    if (type && img) {
      const pokemonColor = getColorByPokemonType(type);
      setBgColor(pokemonColor);
    }
  }, [type, img]);

  const bgStyle = [{backgroundColor: bgColor, ...styles.bg}];

  return (
    <>
      {Object.entries(pokemonDetail).length === 0 ? (
        <ActivityIndicator size={100} color="#AEAEAE" style={styles.spinner} />
      ) : (
        <View>
          <View style={bgStyle} />
          <SafeAreaView style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.order}>#{`${order}`.padStart(3, '0')}</Text>
            </View>
            <View style={styles.contentImg}>
              <Image source={{uri: img}} style={styles.image} />
            </View>
          </SafeAreaView>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 400,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{scaleX: 2}],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 27,
    textTransform: 'capitalize',
  },
  order: {
    color: '#fff',
    fontWeight: 'bold',
  },
  spinner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  contentImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain',
  },
});
