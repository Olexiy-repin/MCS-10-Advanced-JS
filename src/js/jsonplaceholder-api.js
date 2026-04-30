import axios from 'axios';

export const getPosts = async currentPage => {
  const requestParams = {
    _page: currentPage,
    _limit: '10',
  };

  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts', { params: requestParams });

  return data;
};
