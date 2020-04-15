'use strict';

const bigImage = document.querySelector('#largeImg');

function onClick(even) {
  even.preventDefault();

  let src = even.toElement.src.split('-');

  src.pop();
  src = src.join('-').concat('.png');

  bigImage.setAttribute('src', src);
}

const img1 = document.querySelectorAll(`.gallery__img`);

for (let i = 0; i < img1.length; i++) {
  img1[i].addEventListener('click', onClick);
}
