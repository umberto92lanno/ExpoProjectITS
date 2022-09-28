### TIpi di Hooks:

##### Gli Hooks sono funzioni utilizzate per aggiornare gli stati o creare funzioni utili ai componenti React, omettendo l'utilizzo delle classi.

## *useEffect*<br/>
##### Viene eseguita la funzione definita come primo parametro, ogni volta che una delle variabili indicate nell'array del secondo parametro vengono modificate.

```
// ogni volta che viene aggiornata la variabile list, verrà eseguito il console.log
useEffect(() => {
    console.log('valore di list --->', list);
}, [list]);
```
##### Se nel secondo parametro non vengono aggiunte variabili, la funzione viene eseguita al componentDidMount e componentWillUnmount come segue:
```
useEffect(() => {
    console.log('componentDidMount');
    return () => {
        console.log('componentWillUnmount');
    }
}, []);
```

## *useCallback*<br/>
##### Ritorna una funzione e le variabili utilizzate nella funzione andranno aggiunte come deps.
```
const onPress = useCallback(() => {
    if (list.length) {
        console.log('la lista ha degli elementi');
    } else {
        console.log('la lista è vuota');
    }
}, [list]);
```
##### Viene anche utilizzato nelle props dei componenti che richiedono una callback come valore.
```
const Componente = () => {
    const renderItemCallback = useCallback(() => {
        return <View />
    }, []);
    return (
        <FlatList
            data={list}
            renderItem={renderItemCallback}
            ...
        />
    );
};
```

## *useMemo*
##### Ritorna il valore il risultato della funzione eseguita. Viene utilizzato soprattutto per calcoli che richiedono un maggior numero di risorse.
```
const elaboratedValue = useMemo(() => {
   return array.map(a => a.id = a.id +1);
}, []);
// elaboratedValue conterrà il risultato del map.
```

## *useState*
##### Come primo parametro della funzione va indicato il suo valore iniziale.<br/>Ritorna un array composto da due elementi:<br/>
1. Il primo elemento contiene il valore iniziale o l'eventuale valore a seguito degli update;
1. Il secondo elemento contiene una funzione che permette di aggiornare il valore;
```
const [value, setValue] = useState(0);
// visualizzare valore:
console.log(value); // 0
// aggiornamento valore:
setValue(2); //richiamando console.log(valore) verrà stampato "2"
```
## *useRef*
##### Ritorna un oggetto nel quale è presente un attributo "current" che contiene quanto dichiarato come parametro dell'hook.
```
class Example {
    doThis() {}
}
//--------------------------------------------
const Component = () => {
    const classRef = useRef(new Class());
    
    // Utilizzo della const:
    classRef.current.doThis(); 
};
```
