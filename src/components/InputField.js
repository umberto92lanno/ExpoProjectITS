import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputField = ({ placeholder, onChangeText, keyboardType }) => {
    return (
        <TextInput
            placeholder={placeholder}
            onChangeText={onChangeText}
            style={styles.input}
            keyboardType={keyboardType}
        />
    );
};

export default InputField;

const styles = StyleSheet.create({
    input: {
        height: 40,
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 8,
        padding: 16,
    },
});