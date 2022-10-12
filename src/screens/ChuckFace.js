import React from 'react';
import {Image, View} from "react-native";


export const ChuckFace = () => {
  return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Image
            source={{ uri: 'https://media.pinatafarm.com/protected/B183D0EF-49B8-47BF-A523-E72FD0CFFAAC/Chuck-Norris.1.meme.webp'}}
            style={{ width: '100%', height: 600 }}
        />
      </View>
  ) ;
};
