import React, { Component } from 'react';
import {TextInput, StyleSheet} from "react-native";

class InputField extends Component {
    render() {
        return (
           <TextInput
               onChangeText={this.props.onChangeText}
               value={this.props.value}
               style={[styles.input, this.props.style]}
               placeholder={this.props.placeholder}
               secureTextEntry={this.props.isSecure}
           />
        );
    }
}

const styles = StyleSheet.create({
   input: {
       height: 50,
       borderWidth: 1,
       borderRadius: 8,
       fontSize: 16,
       paddingHorizontal: 16,
   }
});

export default InputField;
