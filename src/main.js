import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const input = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', function (event) {
  const enteredText = input.value.trim();
  if (enteredText === '') {
    event.preventDefault();
    iziToast.warning({
      title: '⚠ Caution',
      message: 'Please enter text',
      position: 'topRight',
      icon: '',
    });
  }
});

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
    // тут можна додати код для відображення галереї
  })
  .catch(error => {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  });
