import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

export default function CustomIcon(
  name: string,
  color: string,
  size: number,
): JSX.Element {
  return <Icon name={name} color={color} size={size} />;
}
