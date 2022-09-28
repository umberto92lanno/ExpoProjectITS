import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
// promise().then(val => { ... }).catch(console.error);

const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json();
    return data.results;
}

// fetch('https://rickandmortyapi.com/api/character')
//     .then(response => {
//         response.json()
//             .then(data => console.log(data));
//     })
//     .catch(console.error);
// console.log('ciao');

export const AppFetch = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        getCharacters().then(setList);
    }, []);

    const renderItem = useCallback(({ item }) => {
        console.log(item);
        return (
            <View style={styles.rowContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.containerImage}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                    </View>
                    <View style={styles.containerText}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.species}>{item.species}</Text>
                            <Text style={styles.location}>{item.location.name}</Text>
                        </View>
                        <View
                            style={[
                                styles.aliveContainer,
                                { backgroundColor: item.status === 'Dead' ? 'red' : 'green' }
                            ]}
                        />
                    </View>
                </View>
            </View>
        );
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={list}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowContainer: {
        height: 280,
        padding: 16,
    },
    innerContainer: {
        borderRadius: 10,
        height: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'white',
    },
    containerImage: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    containerText: {
        flexDirection: 'row',
        padding: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: '800',
    },
    species: { fontSize: 16 },
    location: { fontSize: 14 },
    aliveContainer: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
})

export default AppFetch;
