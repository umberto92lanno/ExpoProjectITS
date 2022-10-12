import React from 'react';
import {Button} from 'react-native';

export const GenericButton = ({ name, onPress }) => {
  return <Button title={name} onPress={onPress} />;
};
