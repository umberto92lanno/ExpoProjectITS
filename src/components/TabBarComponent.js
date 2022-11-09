import React, {useEffect, useMemo, useState} from 'react';
import {TouchableWithoutFeedback, Text, View, StyleSheet, SafeAreaView} from "react-native";
import Animated, {
    interpolate, interpolateColor, interpolateColors,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';

const iconNames = ['home', 'user', 'message1', 'windows'];
const colors = (isFocused) => isFocused ? 'white' : 'black';
const circleColors = ['rgb(210, 58, 90)', 'rgb(61, 54, 185)', 'rgb(102, 217, 120)', 'rgb(212, 172, 12)'];
const CIRCLE_DIMENSIONS = 50;
const TABBAR_DIMENSIONS = 70;

export const TabBarComponent = ({ state, navigation }) => {
    const [width, setWidth] = useState(0);
    const insets = useSafeAreaInsets();

    const animation = useSharedValue(0);

    useEffect(() => {
        if (animation.value === 0 && width !== 0) {
            animation.value = (width - CIRCLE_DIMENSIONS) / 2;
            return;
        }
        animation.value = withTiming(
            width * state.index + (width - CIRCLE_DIMENSIONS) / 2,
            { duration: 200 }
        );
    }, [state.index, width]);

    const animatedStyles = useAnimatedStyle(() => {
        const offset = (index) => width * index + (width - CIRCLE_DIMENSIONS) / 2;
        return {
            transform: [
            {
                translateX: animation.value,
            },
            ],
            backgroundColor: interpolateColor(
             animation.value,
             [offset(0), offset(1), offset(2), offset(3)],
             circleColors,
             'RGB',
            ),
        };
    });

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            <View style={styles.cornerContainer}>
                <View style={[styles.cornerContainer, { overflow: 'hidden', flex: 1 }]}>
                <Animated.View style={[styles.circle, animatedStyles]} />
                    {state.routes.map((route, index) => (
                        <TouchableWithoutFeedback key={route.name + index} onPress={() => {
                            navigation.navigate(route.name)
                        }}>
                            <View
                                onLayout={({nativeEvent}) => setWidth(nativeEvent.layout.width)}
                                style={styles.button}
                            >
                                {/*<Animated.View style={[styles.circle, animatedStyles, { backgroundColor: circleColors[index]}]} />*/}
                                <AntDesign name={iconNames[index]} size={24} color={colors(state.index === index)} />
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        paddingHorizontal: 20,
        bottom: 0,
        left: 0,
        right: 0,
    },
    cornerContainer: {
        flexDirection: 'row',
        height: TABBAR_DIMENSIONS,
        backgroundColor: 'white',
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: CIRCLE_DIMENSIONS,
        height: CIRCLE_DIMENSIONS,
        borderRadius: CIRCLE_DIMENSIONS / 2,
        position: 'absolute',
        top: (TABBAR_DIMENSIONS - CIRCLE_DIMENSIONS) / 2,
    }
});
