import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { images } from './catalog-of-images';

const gallery = document.querySelector('.gallery'); // доступ до <ul class="gallery"></ul>

// створюю розмітку
function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
          />
        </a>
      </li>`
    )
    .join('');
}

gallery.insertAdjacentHTML('beforeend', createMarkup(images)); // вкладаю розмітку у <ul class="gallery"></ul>

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
