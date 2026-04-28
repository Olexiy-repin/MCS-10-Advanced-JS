import axios from 'axios';

export const fetchPhotosByQuery = userQuery => {
  const requestParams = {
    query: userQuery,
    color: 'black_and_white',
    orientation: 'portrait',
    client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
  };

  return axios.get(`https://api.unsplash.com/search/photos`, { params: requestParams });
};
