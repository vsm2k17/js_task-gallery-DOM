'use strict';

const bigImage = document.querySelector('#largeImg');

function onClick(even) {
  even.preventDefault();

  const item = even.target.closest('.list-item__link');

  bigImage.setAttribute('src', item.href);
}

const img = document.querySelector(`.gallery__list`);

img.addEventListener('click', onClick);
