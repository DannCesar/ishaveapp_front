import { api } from "./api";

interface RegisterSchedulingProps{
    data: string;
    idCliente:number,
    idServices:number,
    observacao: string;
}

export class SchedulingService{
    async registerScheduling({
        data:dataAgendamento,
        idCliente,
        idServices,
        observacao
    }:RegisterSchedulingProps){
        const {data} = await api.post(`agendar`,{
            dataAgendamento,
            idCliente,
            idServices,
            observacao
        })
        return data
    }

    async deleteScheduling(idA:any){
        const {data} = await api.delete(`excluir-agendamento?idA=${idA}`)
        return data
    }
}