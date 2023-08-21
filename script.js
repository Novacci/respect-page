'use strict';

const galleryContainer = document.getElementById('gallery');

const expandGalleryButton = document.getElementById('expand-gallery');

expandGalleryButton.addEventListener('click', () => {
  galleryContainer.style.height = '200vh';
});
