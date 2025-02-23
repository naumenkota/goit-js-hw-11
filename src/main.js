import SimpleLightbox from 'simplelightbox'; 
import 'simplelightbox/dist/simple-lightbox.min.css'; 
import iziToast from 'izitoast';  
import 'izitoast/dist/css/iziToast.min.css';  
import  { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';


const form = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const loader = document.querySelector('.loader');

form.addEventListener('submit', e =>{
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;

    clearGallery();
    loader.style.display = 'block';
    
     fetchImages(query)
    .then(function(images) {
      if (images.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!'
        }); } else {
        renderImages(images);
      }
    })
    .catch(function(error) {
      console.error('Error fetching images:', error);
      iziToast.error({
        title: 'Error',
        message: 'Failed. Please try again later.'
      });
    })
    .finally(function()  {
      loader.style.display = 'none';
    });
});
