import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import PokemonProvider from './src/context/PokemonProvider';

export default function App() {
  return (
    <PokemonProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PokemonProvider>
  );
}
