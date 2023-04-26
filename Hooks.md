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
##### Se nel secondo parametro non vengono aggiunte variabili, la funzione viene eseguita al mount del componente:
```
useEffect(() => {
    console.log('mounted');
}, []);
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
