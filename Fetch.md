### Esempi Fetch:

## *Chiamata GET*
```
fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then(response => {
  response.json().then(data => console.log(data));
});
```

## *Chiamata POST*
```
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then(response => {
  response.json().then(data => console.log(data));
});
```
