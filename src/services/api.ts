import axios from 'axios';

//Criação da api e exportação para conectar com back-end

// const baseURL = 'https://ishaveapi-02087cf5fe26.herokuapp.com/';
const baseURL = 'http://localhost:5000' ;

export const api = axios.create({
    baseURL
})
