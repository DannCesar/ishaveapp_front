import axios from "axios";

const cepURL = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export class AddressService {
    async getCep(cep:string){
        const {data} = await cepURL.get(`${cep}/json`);
        return data
    }
}