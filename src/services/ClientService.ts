import { api } from "./api";

interface CadClienteProps{
    nomeCliente:string;
	telCliente:string;
	cpfCliente:string;
	emailCliente:string;
	dataNascCliente:string;
}

export class ClientService{
    async cadClient({
        nomeCliente,
        telCliente,
        cpfCliente,
        emailCliente,
        dataNascCliente
    }: CadClienteProps){
        const {data} = await api.post(`cadastrar-cliente`,{
            nomeCliente,
            telCliente,
            cpfCliente,
            emailCliente,
            dataNascCliente
        })
        return data
    }

    
}