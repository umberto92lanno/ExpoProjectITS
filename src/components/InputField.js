import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, TextInput, View, TouchableWithoutFeedback, useWindowDimensions} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';

const WIDTH = 50;

export const InputField = memo(({ offset, onChangeText }) => {
    const [isOpened, setIsOpened] = useState(false);
    const input = useRef(null);
    const animation = useSharedValue(WIDTH);
    const width = useWindowDimensions().width;

    useEffect(() => {
        const value = isOpened ? width - offset : 50;
        animation.value = withTiming(value, { duration: 300 });
        if (isOpened) {
            input.current.focus();
            return;
        }
        input.current.clear();
        input.current.blur();
    }, [isOpened, width, offset]);

    const animatedStyles = useAnimatedStyle(() => {
       return {
          width: animation.value,
           borderRadius: interpolate(animation.value, [WIDTH, width], [25, 10]),
       } ;
    });

    const onPress = useCallback(() => {
        setIsOpened(isOpened => !isOpened);
    }, []);

   return (
       <Animated.View style={[styles.container, animatedStyles]}>
           <TouchableWithoutFeedback onPress={onPress}>
               <View style={styles.containerClose}>
                   <AntDesign name="search1" size={22} />
               </View>
           </TouchableWithoutFeedback>
        <TextInput
            ref={input}
            style={styles.textInput}
            onChangeText={onChangeText}
        />
       </Animated.View>
   ) ;
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 25,
        height: 50,
        // overflow: 'hidden',
        shadowColor: "  #000",
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
   containerClose: {
       width: WIDTH,
       height: 50,
       borderRadius: 25,
       alignItems: 'center',
       justifyContent: 'center',
   },
    textInput: {
        flex: 1,
    },
});
