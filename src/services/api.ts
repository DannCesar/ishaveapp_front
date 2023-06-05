import axios from 'axios';

//Criação da api e exportação para conectar com back-end

const baseURL = 'http://127.0.0.1:5500' ;

export const api = axios.create({
    baseURL
})