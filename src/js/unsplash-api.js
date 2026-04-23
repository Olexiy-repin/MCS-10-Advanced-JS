export const fetchPhotosByQuery = userQuery => {
  const requestParams = new URLSearchParams({
    query: userQuery,
    color: 'black_and_white',
    orientation: 'portrait',
    client_id: 'N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg',
  });

  return fetch(`https://api.unsplash.com/search/photos?${requestParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
