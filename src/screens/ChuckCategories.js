import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, Text, TouchableOpacity, View, StyleSheet, Button, Dimensions} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import Animated, {FadeInLeft, FadeInRight, FadeOutLeft, withTiming} from 'react-native-reanimated';
import {rowLayoutAnimation} from "../animations/entering/rowLayoutAnimations";
import {rowLayoutExitingAnimation} from "../animations/exiting/rowLayoutAnimations";

const getCategories = async () => {
  const response = await fetch(
      'https://api.chucknorris.io/jokes/categories',
  );
  return await response.json();
};

const ChuckCategories = ({navigation}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const renderItem = useCallback(({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ChuckJoke', {category: item})}>
        <Animated.View
            entering={rowLayoutAnimation}
            exiting={rowLayoutExitingAnimation}
            style={styles.containerRow}
        >
          <Text style={styles.rowText}>{item}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }, []);

  // useEffect(() => {
  //   console.warn(categories)
  // }, [categories]);

  const deleteFirstRow = useCallback(() => {
    const [...newCategories] = categories;
    newCategories.pop();
    setCategories(newCategories);
  }, [categories]);

  const ItemSeparatorComponent = useCallback(() => <View style={styles.separator} />, [])
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Button title="View Chuck Norris" onPress={() => navigation.navigate('ChuckFace')} />
      <Button title="Delete first row" onPress={deleteFirstRow} />
      <Animated.FlatList
        data={categories}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    padding: 20,
  },
  separator: {
    height: 20,
  },
  containerRow: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#00000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'white',
  },
  rowText: {
    textTransform: 'capitalize',
    fontWeight: '800',
  },
});

export default ChuckCategories;
