import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';

const form = document.querySelector('form');
const input = form.querySelector('input[name="search-text"]');
import { gallery } from './js/render-functions';

form.addEventListener('submit', function (event) {
  event.preventDefault(); // зупиняємо перезавантаження сторінки
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

  gallery.innerHTML = '';

  getImagesByQuery(enteredText)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      console.log('Знайдені картинки:', data.hits);

      createGallery(data.hits);
    })

    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    });
});
