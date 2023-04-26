import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, View} from "react-native";
import {getCharacters} from "../api/api";
import {SafeAreaView} from "react-native-safe-area-context";

const List = ({ navigation }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getCharacters().then(response => setList(response));
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={{ height: 70 }}>
        <Text>{item.name}</Text>
      </View>
    );
  }

  const keyExtractor = (item, index) => {
    return item.id;
  }

  return (
    <SafeAreaView>
      {/*{Metodo senza utilizzo della FlatList (da utilizzare solo su piccoli array da 6/7 elementi}*/}
      {/*<ScrollView>*/}
      {/*  {list.map(character => {*/}
      {/*    return (*/}
      {/*      <View style={{ height: 70 }}>*/}
      {/*        <Text>{character.name}</Text>*/}
      {/*      </View>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</ScrollView>*/}
      <FlatList
        data={list}
        renderItem={renderItem}
        // keyExtractor: da utilizzare solo se nel record dell'array non è presente la chiave "id"
        // keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default List;
