import {StyleSheet, View, Text, Button, TextInput} from 'react-native';
import divide, { sum } from './CustomFunctions';
// https://snack.expo.dev/
export default function App() {
  // JSX
  return (
    <View style={styles.container}>
        <Text>CIAO</Text>
        <View style={styles.buttonContainer}>
            <Button title={"BUTTON"} />
        </View>
        <TextInput onChangeText={(text) => console.log(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
