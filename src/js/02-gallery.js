// https://unsplash.com/documentation
import { createGalleryCardTemplate } from './render-functions';
import { fetchPhotosByQuery } from './unsplash-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const { target: searchForm } = event;

  const userQuery = searchForm.elements.user_query.value.trim();

  if (!userQuery) {
    iziToast.error({
      message: 'Поле для введення не має бути порожнім!',
      position: 'topRight',
    });

    return;
  }

  refs.galleryList.innerHTML = '';
  refs.loader.classList.add('is-active');

  fetchPhotosByQuery(userQuery)
    .then(data => {
      const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

      refs.galleryList.innerHTML = galleryCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      refs.loader.classList.remove('is-active');
    });
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
