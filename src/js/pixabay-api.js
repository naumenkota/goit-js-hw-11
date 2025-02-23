import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const params = {
    key: '48985421-1c318736e0b6dddab9dd61498',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
};
export function fetchImages(query) {
    return axios.get(BASE_URL, {
        params: { ...params, q: query },
    })
        .then(response => {
            return response.data.hits; 
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            return [];
        })
};

