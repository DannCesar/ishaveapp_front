import axios from 'axios';

const baseURL = 'http://127.0.0.1:5500' ;

export const api = axios.create({
    baseURL
})