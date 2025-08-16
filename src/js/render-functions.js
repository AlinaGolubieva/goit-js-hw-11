import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
  <a href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
  </a>
  <div class="info">
    <div class="info-item">
      <span class="title">Likes</span>
      <span class="value">${likes}</span>
    </div>
    <div class="info-item">
      <span class="title">Views</span>
      <span class="value">${views}</span>
    </div>
    <div class="info-item">
      <span class="title">Comments</span>
      <span class="value">${comments}</span>
    </div>
    <div class="info-item">
      <span class="title">Downloads⬇</span>
      <span class="value">${downloads}</span>
    </div>
  </div>
</li>
      `
    )
    .join('');

  gallery.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

const loader = document.querySelector('.js-loader');

export function showLoader() {
  loader.removeAttribute('hidden');
}

export function hideLoader() {
  loader.setAttribute('hidden', '');
}
