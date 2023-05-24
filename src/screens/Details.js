import React from 'react';
import {Image, SafeAreaView, Text, StyleSheet} from "react-native";

const Details = ({ navigation, route }) => {
  const { image, name } = route.params;
  // const image = route.params.image;
  // const name = route.params.name;
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text>{name}</Text>
    </SafeAreaView>
  );
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  }
});
