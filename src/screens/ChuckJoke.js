import React from 'react';
import {useEffect, useState} from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChuckJoke = ({route}) => {
  const [joke, setJoke] = useState({value: ''});

  useEffect(() => {
    const {category} = route.params;
    const getJoke = async () => {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/random?category=${category}`,
      );
      const result = await response.json();
      setJoke(result);
    };
    getJoke();
  }, [route.params]);
  console.log(joke);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{joke.value}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontWeight: '800',
    fontSize: 20,
  },
});

export default ChuckJoke;
