import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";

export class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
        }
    }

    onPressIn = () => {
        this.setState({ pressed: true })
    }

    onPressOut = () => {
        const { onPress } = this.props;
        this.setState({ pressed: false });
        onPress();
    }

    render() {
        const backgroundColor = this.state.pressed ? 'grey' : 'white';
        const { disabled, title } = this.props;
        return (
            <TouchableWithoutFeedback
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
                disabled={disabled}
                activeOpacity={0.9}
            >
                <View style={[styles.container, { backgroundColor }]}>
                    <Text>{title}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'red',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        padding: 10,
        borderRadius: 10,
    },
});

