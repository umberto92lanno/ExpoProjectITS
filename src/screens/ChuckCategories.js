import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useCallback, useEffect, useState} from 'react';

const ChuckCategories = ({navigation}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(
        'https://api.chucknorris.io/jokes/categories',
      );
      const result = await response.json();
      setCategories(result);
    };
    getCategories();
  }, []);

  const renderItem = useCallback(({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ChuckJoke', {category: item})}>
        <View style={styles.containerRow}>
          <Text style={styles.rowText}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <FlatList
        data={categories}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
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
