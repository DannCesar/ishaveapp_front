import { api } from "./api";

interface RegisterServiceProps{
    nomeServico:string;
	precoServico:number;
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
        const id = localStorage.getItem("ishaveappId")
        const {data} = await api.post(`cadastrar-servico?id=${id}`,{
            nomeServico,
            precoServico,
            descricaoServico,
            categoriaServico
        })
        return data
    }

    async getService(){
        const id = localStorage.getItem("ishaveappId")
        const {data} = await api.get(`consultar-servicos?id=${id}`)
        return data
    }
}