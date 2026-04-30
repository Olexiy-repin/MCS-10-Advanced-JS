export const createGalleryCardTemplate = ({ alt_description: alt, urls: { regular: url } }) => {
  return `
    <li class="gallery-card">
      <img class="gallery-img" src="${url}" alt="${alt}" />
    </li>
 `;
};

export const createPostCardTemplate = cardInfo => {
  return `
    <li class="posts-item">
      <h2 class="posts-title">${cardInfo.title}</h2>
      <p class="posts-text">${cardInfo.body}</p>
      <p class="posts-id">id: ${cardInfo.id}</p>
    </li> 
  `;
};
