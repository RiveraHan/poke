import {ScrollView} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import {PokemonContext} from '../context/PokemonProvider';
import PokemonHeader from '../components/pokemon/PokemonHeader';
import PokemonType from '../components/pokemon/PokemonType';
import PokemonStats from '../components/pokemon/PokemonStats';

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
      <PokemonType typeAbility={pokemonDetail.typeAbility} />
      <PokemonStats statistics={pokemonDetail.statistics} />
    </ScrollView>
  );
}
