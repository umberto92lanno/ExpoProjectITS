import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const TimerButton = ({ title, onPressButton, small }) => {
    return (
        <TouchableOpacity onPress={onPressButton}>
          <View style={small ? styles.buttonResetContainer : styles.buttonStartContainer}>
            <Text style={{ fontSize: small ? 12 : 25 }}>{title}</Text>
          </View>
        </TouchableOpacity>
    );
};

export default TimerButton;

const styles = StyleSheet.create({
    buttonStartContainer: {
      backgroundColor: 'white',
      width: 100,
      height: 100,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonResetContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    separator: {
      height: 20,
    },
  });