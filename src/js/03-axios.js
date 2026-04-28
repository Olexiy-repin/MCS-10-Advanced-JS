/*
 * Використовуємо бібліотеку https://axios-http.com/
 */
import axios from 'axios';

const getPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
};

const renderPosts = async () => {
  const response = await getPosts();

  console.log(response);

  console.log(response.data);
};

renderPosts();
