import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationOptions} from '@react-navigation/stack';
import PokedexScreen from '../screens/PokedexScreen';
import PokemonScreen from '../screens/PokemonScreen';

const options: StackNavigationOptions = {
  title: '',
  headerTransparent: true,
  headerTintColor: '#fff',
};

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={options}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={options}
      />
    </Stack.Navigator>
  );
}
