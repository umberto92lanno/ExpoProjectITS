import React from 'react';
import { Image, Text, View } from "react-native";

const CharacterDetails = ({ navigation, route }) => {
  const { name, image } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: image }} style={{ width: '100%', height: 300 }} />
      <Text>{name}</Text>
    </View>
  );
};

export default CharacterDetails;
