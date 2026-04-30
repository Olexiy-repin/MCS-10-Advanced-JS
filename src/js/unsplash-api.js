import axios from 'axios';

export const fetchPhotosByQuery = async (userQuery, currentPage) => {
  const requestParams = {
    query: userQuery,
    color: 'black_and_white',
    orientation: 'portrait',
    page: currentPage,
    per_page: '12',
    client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
  };

  const { data } = await axios.get(`https://api.unsplash.com/search/photos`, { params: requestParams });

  return data;
};
