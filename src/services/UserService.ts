import { api } from "./api";

interface CreateUserProps{
    cnpjEmpresa: string;
    nomeEmpresa: string;
    telEmpresa: string;
    nomeUsuario: string;
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
        nomeUsuario,
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
                nomeUsuario,
                emailUsuario,
                senhaUsuario
            }
        });
        return data
    };
};