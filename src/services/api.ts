import axios from 'axios';
const id = localStorage.getItem("ishaveappId")

//Criação da api e exportação para conectar com back-end

const baseURL = 'https://ishaveapp-1652e81e34d4.herokuapp.com/';
// const baseURL = 'http://localhost:5000' ;

export const api = axios.create({
    baseURL
})

api.defaults.headers.common['X-Session-ID'] = id