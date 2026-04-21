// https://unsplash.com/documentation

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
};

const createGalleryCardTemplate = ({ alt_description: alt, urls: { regular: url } }) => {
  /*
    <li class="gallery-card">
      <img class="gallery-img" src="" alt="" />
    </li>
  */
  return `
    <li class="gallery-card">
      <img class="gallery-img" src="${url}" alt="${alt}" />
    </li>
 `;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const { target: searchForm } = event;

  const userQuery = searchForm.elements.user_query.value.trim();

  if (!userQuery) {
    alert('Поле для введення не має бути порожнім!');

    return;
  }

  fetch(
    `https://api.unsplash.com/search/photos?query=${userQuery}&color=black_and_white&orientation=portrait&client_id=N2hFKxqELoV2Hd6dcIRJn1oRrjfp310WTtPLEXfMXjg`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then(data => {
      const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

      refs.galleryList.innerHTML = galleryCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
