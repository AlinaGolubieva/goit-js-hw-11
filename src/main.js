import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  gallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('form');
const input = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const enteredText = input.value.trim();

  if (enteredText === '') {
    iziToast.warning({
      title: '⚠ Caution',
      message: 'Please enter text',
      position: 'topRight',
      icon: '',
    });
    return;
  }

  clearGallery();

  showLoader();

  getImagesByQuery(enteredText)
    .then(data => {
      hideLoader();
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })

    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    });
});
