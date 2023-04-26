import axios from "axios";

// export const getPosts = () => {
//   axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => console.log('response api', response.data));
//   console.log('lanciato axios');
// }

export const getPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  console.log('response api', response);
  console.log('lanciato axios');
  return response.data;
}

// export const addPost = () => {
//   axios.post('https://jsonplaceholder.typicode.com/posts', {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((serverResponse) => {
//       console.log(serverResponse);
//     });
// }
export const addPost = async () => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const getCharacters = async () => {
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  console.log(response);
  return response.data.results;
};
