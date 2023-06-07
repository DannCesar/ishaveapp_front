import axios from 'axios';

//Criação da api e exportação para conectar com back-end

const baseURL = 'http://localhost:8081' ;

export const api = axios.create({
    baseURL
})
