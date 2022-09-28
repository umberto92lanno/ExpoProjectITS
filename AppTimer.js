import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {ScrollView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

let interval = null;

const AppTimer = () => {

    const [count, setCount] = useState(0);
    const [isStarted, setIsStarted] = useState(false);

    const input = useRef(null);

    const label2 = useMemo(() => {
        const hours = Math.floor(count / 3600);
        const minutes = Math.floor((count % 3600) / 60);
        const seconds = Math.floor(count % 60);
        const hh = hours < 10 ? `0${hours}` : hours;
        const mm = minutes < 10 ? `0${minutes}` : minutes;
        const ss = seconds < 10 ? `0${seconds}` : seconds;
        return `${hh}:${mm}:${ss}`;
    }, [count]);

    useEffect(() => {
        if (count === 0) {
            clearInterval(interval);
            setIsStarted(false);
        }
    }, [count]);

    useEffect(() => {
        if (!isStarted) {
            clearInterval(interval);
            return;
        }
        interval = setInterval(() => {
            setCount(count => count - 1);
        }, 1000);
    }, [isStarted]);

    const onChangeText = useCallback((text) => {
        setCount(Number(text));
    }, []);

    const onPress = useCallback(() => {
        if (count === 0) {
            return;
        }
        if (input.current) {
            input.current.clear();
            input.current.blur();
        }
        setIsStarted(!isStarted);
    }, [isStarted, count]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scroll}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.labelContainer}>
                    <Text style={styles.counter}>{label2}</Text>
                    <TextInput
                        ref={input}
                        style={styles.input}
                        placeholder="Insert time"
                        keyboardType="numeric"
                        onChangeText={onChangeText}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={onPress}>
                        <View style={styles.circle}>
                            <Text style={styles.circleText}>{isStarted ? 'Stop' : 'Start'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    labelContainer: {
        flex: 1,
       backgroundColor: 'white',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleText: {
       color: 'white',
       fontSize: 22,
        fontWeight: '800',
    },
    counter: {
        fontWeight: '900',
        fontSize: 40,
        marginTop: 30,
    },
    input: {
        marginTop: 20,
        borderWidth: 1,
        width: '50%',
        height: 45,
        borderRadius: 30,
        textAlign: 'center',
    },
    scroll: {
        flexGrow: 1,
    },
});

export default AppTimer;
