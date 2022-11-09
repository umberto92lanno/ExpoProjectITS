import React from 'react';
import {View,  StyleSheet} from "react-native";
import {AnimatedButton} from "../components/AnimatedButtpm";

const WeatherDetails = ({ route }) => {

    const { details } = route.params;
    console.warn(details);
    return (
        <View style={styles.container}>
            <AnimatedButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

export default WeatherDetails;
