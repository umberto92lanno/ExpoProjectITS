import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {getCharacters} from "../api/api";
import {SafeAreaView} from "react-native-safe-area-context";

const List = ({ navigation }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getCharacters().then(response => setList(response));
  }, []);

  useEffect(() => {
    console.log(list);
  }, [list]);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', { image: item.image, name: item.name })}>
        <View style={{ height: 70 }}>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const keyExtractor = (item, index) => {
    return item.id;
  }

  const listFiltered = useMemo(() => {
    return list.filter(l => l.name === "Rick Sanchez");
  }, [list]);

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
        data={listFiltered}
        renderItem={renderItem}
        // keyExtractor: da utilizzare solo se nel record dell'array non è presente la chiave "id"
        // keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default List;
