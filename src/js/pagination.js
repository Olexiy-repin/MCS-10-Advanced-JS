// https://jsonplaceholder.typicode.com/
import { getPosts } from './jsonplaceholder-api';
import { createPostCardTemplate } from './render-functions';

const refs = {
  postsGallery: document.querySelector('.js-posts'),
  loadMoreBtn: document.querySelector('.js-load-more'),
};

let page = 1;

const onLoadMoreBtnClick = async event => {
  try {
    page++;

    const postsArr = await getPosts(page);

    if (postsArr.length === 0) {
      refs.loadMoreBtn.classList.add('is-hidden');
      refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);

      return;
    }

    const postsCardsTemplate = postsArr.map(post => createPostCardTemplate(post)).join('');

    refs.postsGallery.insertAdjacentHTML('beforeend', postsCardsTemplate);
  } catch (err) {
    console.log(err);
  }
};

const initPostsGallery = async () => {
  try {
    const postsArr = await getPosts(page);

    const postsCardsTemplate = postsArr.map(post => createPostCardTemplate(post)).join('');

    refs.postsGallery.innerHTML = postsCardsTemplate;

    refs.loadMoreBtn.classList.remove('is-hidden');
    refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
  } catch (err) {
    console.log(err);
  }
};

initPostsGallery();
