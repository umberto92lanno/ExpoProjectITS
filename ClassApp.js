import React from 'react';
import {Button, StyleSheet, Text, TextInput, View, SafeAreaView} from "react-native";
import {CustomButton} from "./src/components/CustomButton";

// render 2
// constructor 1
// componentDidMount 3
// componentWillUnmount 5 Quando viene dismesso
// componentDidUpdate 4 Ma ogni volta che il render si aggiorna

export default class ClassApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: 'CIAO',
            title: 'BUTTON',
            disabled: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ title: 'NOTTUB' });
        }, 4000);
    }

    onPress = () => {
        console.log('onPress')
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>{this.state.label}</Text>
                <View style={styles.buttonContainer}>
                    <CustomButton
                        onPress={this.onPress}
                        title="Salva"
                        disabled={this.state.disabled}
                    />
                    <CustomButton
                        onPress={() => {
                            this.setState({ disabled: !this.state.disabled })
                            // this.setState((prevState) => ({ disabled: !prevState.disabled }))
                        }}
                        title="Set disabled"
                        disabled={false}
                    />
                </View>
                <TextInput onChangeText={(text) => console.log(text)} />
            </SafeAreaView>
        );
    }

    componentWillUnmount() {

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevState, prevProps, this.state);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});
