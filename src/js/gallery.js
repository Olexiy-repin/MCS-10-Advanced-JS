import { createGalleryCardTemplate } from './render-functions';
import { fetchPhotosByQuery } from './unsplash-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// adfafasfafafasfs

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
  loadMoreBtn: document.querySelector('.js-load-more-btn'),
};

let page = 1;
let userQuery = '';

const onLoadMoreBtnClick = async event => {
  try {
    page++;

    const data = await fetchPhotosByQuery(userQuery, page);

    const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

    refs.galleryList.insertAdjacentHTML('beforeend', galleryCardsTemplate);

    if (page === data.total_pages) {
      refs.loadMoreBtn.classList.add('is-hidden');
      refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
    }
  } catch (error) {
    console.log(error);
  }
};

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    const { target: searchForm } = event;

    userQuery = searchForm.elements.user_query.value.trim();

    if (!userQuery) {
      iziToast.error({
        message: 'Поле для введення не має бути порожнім!',
        position: 'topRight',
      });

      return;
    }

    refs.galleryList.innerHTML = '';
    refs.loader.classList.add('is-active');

    page = 1;

    refs.loadMoreBtn.classList.add('is-hidden');

    const data = await fetchPhotosByQuery(userQuery, page);

    if (data.total === 0) {
      iziToast.error({
        message: 'Зображень не знайдено!',
        position: 'topRight',
      });

      return;
    }

    if (data.total_pages > 1) {
      refs.loadMoreBtn.classList.remove('is-hidden');
      refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
    }

    const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

    refs.galleryList.innerHTML = galleryCardsTemplate;
  } catch (err) {
    console.log(err);
  } finally {
    refs.loader.classList.remove('is-active');
  }
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
