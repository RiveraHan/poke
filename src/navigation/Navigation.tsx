import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import CustomIcon from '../components/CustomIcon';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color, size}) => CustomIcon('heart', color, size),
        }}
      />

      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeball(),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => CustomIcon('user', color, size),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball(): JSX.Element {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={styles.imagePokeball}
    />
  );
}

const styles = StyleSheet.create({
  imagePokeball: {
    width: 75,
    height: 75,
    top: -15,
  },
});
