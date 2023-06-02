import { api } from "./api";

interface CreateUserProps{
    cnpjEmpresa: string;
    nomeEmpresa: string;
    telEmpresa: string;
    emailUsuario: string;
    senhaUsuario: string;
    cep: string;
    logradouro: string;
    numeroEmpresa: string;
    bairro: string;
    cidade: string;
    uf: string;
}

export class UserService{
    async crateUser({
        cnpjEmpresa,
        nomeEmpresa,
        telEmpresa,
        emailUsuario,
        senhaUsuario,
        cep,
        logradouro,
        numeroEmpresa,
        bairro,
        cidade,
        uf
    }:CreateUserProps){
        const {data} = await api.post('/sign-up',{
            empresa:{
                cnpjEmpresa,
                nomeEmpresa,
                telEmpresa
            },
            endereco:{
                cep,
                logradouro,
                numeroEmpresa,
                bairro,
                cidade,
                uf
            },
            usuario:{
                emailUsuario,
                senhaUsuario
            }
        });
        return data
    };
};