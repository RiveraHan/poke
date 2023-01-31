import {ScrollView} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import {PokemonContext} from '../context/PokemonProvider';
import PokemonHeader from '../components/PokemonHeader';

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
    (async () => {
      await detailsPokemon(id);
      if (pokemonDetail === undefined) {
        navigate.goBack();
      }
    })();
  }, [id, detailsPokemon, pokemonDetail, navigate]);

  if (!pokemonDetail) {
    return null;
  }

  return (
    <ScrollView>
      <PokemonHeader pokemonDetail={pokemonDetail} />
    </ScrollView>
  );
}
