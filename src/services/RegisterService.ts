import { api } from "./api";

// Tipagem das propriedades recebidos do data
interface RegisterServiceProps{
    nomeServico:string;
	precoServico:number;
	descricaoServico:string;
	categoriaServico:string;
}

// Criação da classe service
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

    async filterService(nomeServico:string){
        const {data} = await api.get(`consultar-servicos?${nomeServico}`)
        return data
    }

    async deleteService(idS:any){
        const {data} = await api.delete(`excluir-servico?idS=${idS}`)
        return data
    }
}