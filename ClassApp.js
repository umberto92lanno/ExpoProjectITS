import React from 'react';
import {Button, StyleSheet, Text, TextInput, View, SafeAreaView} from "react-native";
import {CustomButton} from "./src/components/CustomButton";
import InputField from "./src/components/InputField";

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
            input: 'TESTO',
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

    onChangeText = (text) => {
        this.setState({ input: text });
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.containerView}>
                    <Text>{this.state.label}</Text>
                    <View style={styles.buttonContainer}>
                        <InputField
                            onChangeText={this.onChangeText}
                            placeholder="Inserisci il testo"
                            value={this.state.input}
                            isSecure={true}
                            style={{ marginBottom: 20 }}
                        />
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
                </View>
            </SafeAreaView>
        );
    }

    componentWillUnmount() {

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', this.state.input);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerView: {
      padding: 20,
      flex: 1,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});
