export const createGalleryCardTemplate = ({ alt_description: alt, urls: { regular: url } }) => {
  return `
    <li class="gallery-card">
      <img class="gallery-img" src="${url}" alt="${alt}" />
    </li>
 `;
};
