import axios from 'axios';

const API_KEY = "46892865-5ed871dda5110795735586270";
const BASE_URL = 'https://pixabay.com/api/';




  export const fetchImages = async (query, page = 1, per_page = 15) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                per_page,
                page
            }
        });
        return response.data;
    } catch (error) {
        console.log("Error fetching images:", error);
        throw error;
    }
};