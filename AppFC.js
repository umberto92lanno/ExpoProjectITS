import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput, Button} from "react-native";

// const obj = {
//     chiave1: '',
//     chiave2: '',
// }
//
// const array = [1, 2, 3]
//
// const { chiave2, chiave1 } = obj;
// const [,,a] = array;

const AppFC = () => {
    const [key, setKey] = useState(1);
    const [array, setArray] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);

    const interval = React.useRef(null);

    // did mount
    useEffect(() => {
        // console.warn('componente renderizzato');
        setKey(2);
        setArray([1,2,3]);
        setKey(key => key + 1);
        // setArray([...array, 4]);
    }, []);

    useEffect(() => {
        interval.current = setInterval(() => {}, 1000);
        clearInterval(interval.current);
    }, [key]);

    useEffect(() => {
        if (username.toLowerCase() !== 'user' || password.toLowerCase() !== 'user') {
            return;
        }
        console.warn('password corretta');
    }, [username, password]);

    const onPressShowPassword = () => {
        setSecureText(!secureText);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
            <TextInput
                style={{ marginBottom: 16, fontSize: 16, borderWidth: 1, padding: 16, borderRadius: 25 }}
                value={username}
                placeholder="Username"
                onChangeText={setUsername}
            />
            <TextInput
                style={{ fontSize: 16, borderWidth: 1, padding: 16, borderRadius: 25 }}
                value={password}
                secureTextEntry={secureText}
                placeholder="Password"
                onChangeText={setPassword}
            />
            <Button
                title={secureText ? "Mostra password" : "Nascondi password"}
                onPress={onPressShowPassword}
            />
        </View>
    );
}

export default AppFC;
