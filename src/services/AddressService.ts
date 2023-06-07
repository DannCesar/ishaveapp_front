import axios from "axios";

//criando conexão com api do viacep para buscar endereço

const cepURL = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});
//criação da classe para buscar endereço
export class AddressService {
    async getCep(cep:string){
        const {data} = await cepURL.get(`${cep}/json`);
        return data
    }
}