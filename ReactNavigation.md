### React Navigation

##### React Navigation è una libreria esterna che permette di creare pagine di navigazione in React Native.

## *Link utili e librerie da installare*<br/>
Link doc: https://reactnavigation.org/docs/getting-started/
> Sito ufficiale React Navigation<br/>
> Autore: ReactNavigation Community
## *Comandi installazione librerie*<br/>
##### NPM
```
npm install @react-navigation/native
```
##### YARN
```
yarn add @react-navigation/native
```
##### Installazioni per EXPO
```
npx expo install react-native-screens react-native-safe-area-context
```

## *Primi passi*<br/>
##### La prima cosa da fare sarà creare gli stack scelti per la navigazione.<br />Gli stack più importanti sono:
1. StackNavigator: https://reactnavigation.org/docs/native-stack-navigator
1. BottomTabNavigator: https://reactnavigation.org/docs/bottom-tab-navigator

##### Creazione di un singolo stack in single page su App.js (punto d'ingresso dell'app React Native):
##### NPM
```
npm install @react-navigation/native-stack
```
##### YARN
```
yarn add @react-navigation/native-stack 
```
##### Implementazione
```
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Screen1 = ({ navigation }) => {
  const onPressScreen1 = () => {
    navigation.navigate('Screen2');
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 1</Text>
      <TouchableOpacity onPress={onPressScreen1}>
        <Text>Go to Screen2</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen2 = ({ navigation }) => {
  const onPressScreen2 = () => {
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 2</Text>
      <TouchableOpacity onPress={onPressScreen2}>
        <Text>Go to Screen2</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {

  const Stack = createNativeStackNavigator();

  const StackComponent = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StackComponent />
    </NavigationContainer>
  );
};

export default App;
```
##### Passaggio parametri da una pagina ad un'altra<br/>
###### Pagina di partenza:
```
/*
I parametri devono essere aggiungi come oggetti
del secondo parametro della funzione "navigate"
*/

const goToNextPage = () => {
    navigation.navigate('Screen2', { title: 'Titolo seconda pagina' });
};
```
###### Pagina di destinazione:
```
/*
I parametri possono essere recuperati dall'oggetto "route" creato da react navigation.
al suo interno è presente l'attributo "params" che contiene tutti gli oggetti da voi
dichiarati nella funzione navigate in pagina di partenza
*/

const Screen2 = ({ navigation, route }) => {
    const { title } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{title}</Text>
        </View>
    )
};
```
