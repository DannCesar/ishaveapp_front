import { api } from "./api";

//Tipagem das propriedade do usuário

interface CreateUserProps {
  cnpjEmpresa: string;
  nomeEmpresa: string;
  telEmpresa: string;
  emailUsuario: string;
  senhaUsuario: string;
  cep: string;
  logradouro: string;
  numEmpresa: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface LoginUserProps {
  emailUsuario: string;
  senhaUsuario: string;
}


//Criação da classe e exportação para requisição do signUp e singIn

export class UserService {
  async createUser({
    cnpjEmpresa,
    nomeEmpresa,
    telEmpresa,
    emailUsuario,
    senhaUsuario,
    cep,
    logradouro,
    numEmpresa,
    bairro,
    cidade,
    uf,
  }: CreateUserProps) {
    const { data } = await api.post(`/sign-up`, {
      empresa: {
        cnpjEmpresa,
        nomeEmpresa,
        telEmpresa,
      },
      endereco: {
        cep,
        logradouro,
        numEmpresa,
        bairro,
        cidade,
        uf,
      },
      usuario: {
        emailUsuario,
        senhaUsuario,
      },
    });
    return data;
  }

  async loginUser({ emailUsuario, senhaUsuario }: LoginUserProps) {
    const { data } = await api.post(`/sign-in/`, {
      emailUsuario,
      senhaUsuario,
    });
    return data;
  }

  async confirmEmail(d:string, v:string){
    const {data} = await api.get(`/confirmMail?d=${d}&v=${v}`)
    return data
  }

  async signOut(idSession:any){
    const {data} = await api.delete(`/logout`)
    return data
  }
  async getHome(){
    const {data} = await api.get(`/home`)
    return data
  }
}
