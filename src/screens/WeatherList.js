import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from "react-native";
import {Card} from "../components/Card";
import {weathers} from "../mocks/weathers";
import LottieView from 'lottie-react-native';
import {Loader} from "../components/Loader";
import {Ionicons} from '@expo/vector-icons';
import {InputField} from "../components/InputField";
import {useWeatherList} from "../hooks/useWeatherList";

const getApiPromise = () => {
    fetch('http;//').then(response => {
        response.json().then(json => console.log(json));
    })
}
const PADDING = 25;
const getApiAsync = async () => {
    const response = await fetch('http://');
    const json = await response.json();
    console.log(json);
}

const WeatherList = ({ navigation }) => {
    const { filteredList, onChangeText } = useWeatherList();

    const onPress = useCallback((id) => {
        const weather = weathers.find(weather => weather.id === id);
        if (!weather) {
            return;
        }
        navigation.navigate('WeatherDetails', { details: weather.details });
    }, []);

    const renderItem = useCallback(({item}) => {
        return (
            <Card
                id={item.id}
                temperature={item.temperature}
                wind={item.wind}
                day={item.day}
                quality={item.quality}
                onPress={onPress}
            />
        );
    }, []);

    const ItemSeparatorComponent = useCallback(() => {
        return <View style={{ height: 20 }} />;
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Ionicons name="wine-outline" size={200} />
            <InputField offset={PADDING * 2} onChangeText={onChangeText} />
           <FlatList
               data={filteredList}
               renderItem={renderItem}
               ItemSeparatorComponent={ItemSeparatorComponent}
               contentContainerStyle={{ paddingHorizontal: 16 }}
           />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: PADDING,
    },
    text: {
        fontSize: 18,
    },
});

export default WeatherList;
