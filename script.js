'use strict';

const galleryContainer = document.getElementById('gallery');
const expandGalleryButton = document.getElementById('expand-gallery');
const loupeButton = document.getElementById('loupe');
const loupeContainer = document.getElementById('loupe-container');

const input = document.createElement('input');
input.type = 'text';
input.value = 'Szukaj...';
input.style.border = '2px solid #111';
input.style.borderRadius = '5px';
input.style.padding = '4px';

expandGalleryButton.addEventListener('click', () => {
  galleryContainer.style.height = '200vh';
});

loupeButton.addEventListener('click', () => {
  loupeContainer.replaceChild(input, loupeButton);
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    input.parentNode.replaceChild(loupeButton, input);
  }
});
