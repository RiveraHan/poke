import {View, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import {PokemonContext} from '../context/PokemonProvider';

type ParamList = {
  Pokemon: {
    id: number;
  };
};

export default function PokemonScreen() {
  const route = useRoute<RouteProp<ParamList, 'Pokemon'>>();

  const navigate = useNavigation();
  const {detailsPokemon, pokemonDetail} = useContext(PokemonContext);
  const {id} = route.params;

  useEffect(() => {
    detailsPokemon(id);
    if (pokemonDetail === undefined) {
      navigate.goBack();
    }
    console.log(pokemonDetail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonDetail]);

  if (pokemonDetail === undefined) {
    return null;
  }

  return (
    <View>
      <Text>PokemonScreen</Text>
      <Text>{pokemonDetail.name}</Text>
    </View>
  );
}
