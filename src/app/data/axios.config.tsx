//import {API_URL} from '@env';
import axios from 'axios';

export const END_POINTS = {
    products: 'products',
    categories: 'products/categories',
};

export const fakeStorageApi = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    timeout: 1000,
});
