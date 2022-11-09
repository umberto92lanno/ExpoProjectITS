import React, {memo, useCallback} from 'react';
import {TouchableWithoutFeedback, View, Text, StyleSheet} from "react-native";
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming} from "react-native-reanimated";

export const AnimatedButton = memo(() => {

    const animation = useSharedValue(1);

    const animatedStyles = useAnimatedStyle(() => {
        return {
          transform: [
              {
                 scale:  animation.value,
              },
          ] ,
        };
    });

    const animatedViewStyles = useAnimatedStyle(() => {
       return {
           transform: [
               {
                   scale:  interpolate(animation.value, [1, 1.05], [1, 50]),
               },
           ] ,
           opacity: interpolate(animation.value, [1, 1.05], [0, 0.5]),
       };
    });

    const onPressIn = useCallback(() => {
        animation.value = withTiming(1.05, { duration: 600 });
    }, []);

    const onPressOut = useCallback(() => {
        animation.value = withTiming(1, { duration: 300 });
    }, []);

   return (
       <TouchableWithoutFeedback
           onPressIn={onPressIn}
           onPressOut={onPressOut}
       >
           <Animated.View style={[styles.container]}>
               <Animated.View style={[styles.view, animatedViewStyles]} />
               <Text style={{ color: 'white' }}>Conferma</Text>
           </Animated.View>
       </TouchableWithoutFeedback>
   ) ;
});

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
    },
    view: {
        position: 'absolute',
        backgroundColor: 'red',
        width: 10,
        height: 10,
        borderRadius: 5,
        zIndex: -1
    },
});
