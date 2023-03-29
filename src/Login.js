import React, { useState } from 'react';
import { Button, TextInput, TouchableOpacity, View, Text, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  const [isValid, setIsValid] = useState(false);
  const [username, setUsername] = useState('');
  const onChangeUsername = (text) => {
    setUsername(text);
  }
  const [password, setPassword] = useState('');
  const onChangePassword = (text) => {
    setPassword(text);
  }
  const onLogin = () => {
    if (username.toLowerCase() === 'prova@gmail.com' && password === 'prova') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput
          onChangeText={onChangeUsername}
          placeholder="Username"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={onChangePassword}
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={{ marginBottom: 16 }}>{isValid ? 'Corretto' : 'Errore' }</Text>
        <TouchableOpacity onPress={onLogin}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default App;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    padding: 16,
    fontSize: 18,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2288e2',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 60,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
  },
});
