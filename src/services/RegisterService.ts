import { api } from "./api";

interface RegisterServiceProps{
    nomeServico:string;
	precoServico:string;
	descricaoServico:string;
	categoriaServico:string;
}

export class RegisterService{
    async registerService({
        nomeServico,
        precoServico,
        descricaoServico,
        categoriaServico
    }: RegisterServiceProps){
        const {data} = await api.post(`cadastrar-servico`,{
            nomeServico,
            precoServico,
            descricaoServico,
            categoriaServico
        })
        return data
    }

    async getService(){
        const {data} = await api.get(`consultar-servicos`)
        return data
    }
}