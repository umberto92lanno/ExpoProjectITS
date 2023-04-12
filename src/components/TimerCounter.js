import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const TimerCounter = ({ onSave }) => {
    const [value, setValue] = useState(0);

    const onPressMore = () => {
        setValue(value + 10);
    }

    const onPressLess = () => {
        setValue(value - 10);
    }

    const onPress = () => {
        onSave(value);
        setValue(0);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressLess}>
                <View style={styles.button}>
                    <Text style={{ fontSize: 18 }}>-</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.counterContainer}>
                <Text style={{ fontSize: 24 }}>{value}</Text>
            </View>
            <TouchableOpacity onPress={onPressMore}>
                <View style={styles.button}>
                    <Text style={{ fontSize: 18 }}>+</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={{ fontSize: 18 }}>OK</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default TimerCounter;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    counterContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginHorizontal: 16,
    },
});