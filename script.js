'use strict';

const galleryContainer = document.getElementById('gallery');
const expandGalleryButton = document.getElementById('expand-gallery');
const loupeButton = document.getElementById('loupe');
const loupeContainer = document.getElementById('loupe-container');
const gradientContainer = document.getElementById('gallery-gradient');
const mainImage = document.getElementById('main-image');
const leftArrowButton = document.getElementById('left-arrow');
const rightArrowButton = document.getElementById('right-arrow');
const input = document.createElement('input');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.querySelector('ul');

input.type = 'text';
input.value = 'Szukaj...';
input.style.border = '2px solid #111';
input.style.borderRadius = '5px';
input.style.padding = '4px';

expandGalleryButton.addEventListener('click', () => {
  galleryContainer.style.height = '200vh';
  gradientContainer.classList.remove('my-gradient');
  if (galleryContainer.style.height === '200vh') {
    expandGalleryButton.remove();
  }
});

loupeButton.addEventListener('click', () => {
  loupeContainer.replaceChild(input, loupeButton);
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    input.parentNode.replaceChild(loupeButton, input);
  }
});

rightArrowButton.addEventListener('click', () => {
  mainImage.style.display = 'none';
});

leftArrowButton.addEventListener('click', () => {
  mainImage.style.display = 'flex';
});

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
