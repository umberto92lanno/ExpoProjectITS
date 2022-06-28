### React Native

##### React Native è un framework che utilizza React per creare app compatibili iOS & Android con il medesimo codice.

## *Installazione librerie e init progetto:*
###### Utilizzare guida "React Native CLI Quickstart"
https://reactnative.dev/docs/environment-setup
> Sito ufficiale di reactnative<br/>
> Autore: Facebook
###### Init progetto (Expo):
```
expo init <titolo_progetto>
```
###### Init progetto (Bare):
```
npx react-native init <titolo_progetto>
```
###### Run progetto (Bare):
###### iOS
```
npx react-native run-ios
```
###### Android
```
npx react-native run-android
```
###### Run progetto (Expo):
###### iOS
```
expo start
```
## *Struttura cartelle*<br/>
```
--- ios // cartella contenente tutti i file del progetto per iOS
--- android // cartella contenente tutti i file del progetto per Android
--- index.js // primo file letto dai rispettivi progetti android e ios
--- package.json // file dove si trovano gli script e le librerie necessarie al funzionamento del progetto
--- App.js // è il primo file dove viene effettivamente fisualizzata la screen sul dispositivo
```
## *index.js*<br/>
##### Nel codice viene indicato il componente di riferimento da mostrare all'apertura dell'app
```
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/*
- AppRegistry è la classe che si occupa di inizializzare l'app React Native.
- registerComponent è la funzione che viene lanciata e al suo interno abbiamo 2 importanti infomazioni:
    - Il nome dell'applicazione (primo parametro)
    - Callback che ritorna il componente relativo alla prima schermata visualizzata dal framework.
Nel nostro caso la prima schermata che verrà visualizzata sarà App (secondo parametro)
(è possibile trovare riferimenti alla schermata dalla riga: "import App from './App'")
*/

AppRegistry.registerComponent(appName, () => App);
```

## *Lifecycle* (ordinati)
### Mounting<br/>
```
constructor(props)
```
Primo metodo chiamato una volta istanziata la classe, ancora prima di eseguire il DOM.
Nel constructor vengono definite le variabili utili all'avvio del componente, viene usato soprattutto per l'inizializzazione dei vari state.
```
render()
```
Contiene il JSX che genera il DOM.
```
componentDidMount()
```
Viene invocato dopo il primo render(). In questo metodo è sconsigliato eseguire azioni di aggiornamento dello stato.
### Unmounting<br/>
```
componentWillUnmount()
```
Viene invocato quando il componente viene dismesso.
### Updating<br/>
```
static getDerivedStateFromProps(props, state)
```
Viene invocato prima di ogni render e può essere utilizzato per ritornare un nuovo state o, nel caso in cui non servisse l'aggiornamento dello state, null.
```
shouldComponentUpdate(nextProps, nextState)
```
Chiamato prima ogni aggiornamento del DOM, serve a verificare se occorre effettivamente che il DOM venga aggiornato.
Il metodo si aspetta un boolean al return.
Di seguito un esempio:
```
shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.visible === nextState.visible) {
        return false; // il DOM non viene aggiornato
    }
    return true; // il DOM viene aggiornato
}
```
```
getSnapshotBeforeUpdate(prevProps, prevState)
```
Viene invocato poco prima dell'ultimo render(), quello che viene indicato nel return del metodo verrà letto successivamente dal componentDidUpdate.
```
componentDidUpdate(prevProps, prevState, snapshot)
```
Viene eseguito dopo che il DOM è stato aggiornato. Può essere utile per eseguire azioni in determinate condizioni.

![alt text](https://www.netguru.com/hs-fs/hubfs/phases.jpg?width=1306&name=phases.jpg)
> Immagine presa da: https://www.netguru.com/codestories/react-native-lifecycle<br/>Articolo di: Maks Kolodiy

## *Component*
Il Component è una classe necessaria alla creazione di una schermata React.<br/>
La classe custom creata dovrà essere estesa a Component, questo permetterà alla "CustomClass" di ereditare i metodi di Component, quindi i lifecycle indicati sopra.<br/>
Di seguito un esempio di classe Component:
```
import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

export default class CustomClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
    };
  }
  componentDidMount() {
    console.log('component mounted');
  }
  onPress = () => {
    this.setState((prevState) => {return { color: prevState.color === 'white' ? 'red' : 'white' }})
  }
  render() {
    const {color} = this.state;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: color}}>
        <Text style={{marginBottom: 10}}>This is CustomClass</Text>
        <TouchableOpacity onPress={this.onPress}>
          <View style={{backgroundColor: 'yellow', padding: 10}}>
            <Text>Change color</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
```
La classe mostrerà un testo e un bottone, al tap sul bottone verrà eseguito il metodo "onPress" che si occuperà di eseguire un aggiornamento dello state cambiando il colore dello sfondo.
## *Component FC (Function Component)*
La stessa visualizzazione può essere scritta senza l'utilizzo delle classi, mediante Function Component.<br/>
Attualmente è il metodo più utilizzato per la programmazione in React Native.
```
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const CustomComponent = () => {
  const [color, setColor] = useState('white');

  useEffect(() => {
    console.log('component mounted');
  }, []);

  const onPress = () => {
    setColor(color === 'white' ? 'red' : 'white');
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: color}}>
      <Text style={{marginBottom: 10}}>This is CustomClass</Text>
      <TouchableOpacity onPress={onPress}>
        <View style={{backgroundColor: 'yellow', padding: 10}}>
          <Text>Change color</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default CustomComponent;
```
> Utilizzo degli [Hooks](Hooks.md)

## *PureComponent*
Ha lo stesso comportamento di un Component con una peculiarità in piu.<br/>
Se utilizzato come children all'interno di un componente, al rerender del componente padre, il PureComponent verrà rerenderizzato solo ed esclusivamente se almeno una delle sue props è diversa dal render precedente.
```
import React, {Component, PureComponent} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

class CustomPureComponent extends PureComponent {
    render() {
        const { onPress } = this.props;
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={{backgroundColor: 'yellow', padding: 10}}>
                    <Text>Change color</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default class CustomClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
    };
  }
  componentDidMount() {
    console.log('component mounted');
  }
  onPress = () => {
    this.setState((prevState) => {return { color: prevState.color === 'white' ? 'red' : 'white' }})
  }
  render() {
    const {color} = this.state;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: color}}>
        <Text style={{marginBottom: 10}}>This is CustomClass</Text>
        <CustomPureComponent
            onPress={this.onPress} // CustomPureComponent verrà aggiornato solo se this.onPress cambia allocazione di memoria
        />
      </View>
    );
  }
}
```

## *PureComponent FC (Function Component)*
Anche le FC possono essere PureComponent, basterà racchiudere la funzione nel metodo "memo"
```
import React, {useEffect, useState, memo} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const CustomPureComponent = memo(({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{backgroundColor: 'yellow', padding: 10}}>
              <Text>Change color</Text>
            </View>
        </TouchableOpacity>
    );
});

const CustomComponent = () => {
  const [color, setColor] = useState('white');

  useEffect(() => {
    console.log('component mounted');
  }, []);

  const onPress = () => {
    setColor(color === 'white' ? 'red' : 'white');
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: color}}>
      <Text style={{marginBottom: 10}}>This is CustomClass</Text>
      <CustomPureComponent onPress={onPress} /> // CustomPureComponent verrà aggiornato solo se onPress cambia allocazione di memoria
    </View>
  );
}
export default CustomComponent;
```
