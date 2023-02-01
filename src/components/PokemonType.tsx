import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import getColorByPokemonType from '../utils/getColorByPokemonType';

type Props = {
  typeAbility: Type[];
};

export default function PokemonType({typeAbility}: Props) {
  return (
    <View style={styles.content}>
      {typeAbility?.map((item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(item.type.name),
          }}>
          <Text style={styles.textName}>{item.type.name}</Text>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    marginTop: 60,
    marginBottom: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: 'white',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
