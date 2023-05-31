import axios from 'axios';

const baseURL = 'http://localhost:3306' ;

export const api = axios.create({
    baseURL
})