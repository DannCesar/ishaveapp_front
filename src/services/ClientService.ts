import { api } from "./api";

interface CadClienteProps {
  nome: string;
  sobrenome: string;
  telefone: string;
  cpf: string;
  email: string;
  dataNasc: string;
}

export class ClientService {
  async cadClient({
    nome,
    sobrenome,
    telefone,
    cpf,
    email,
    dataNasc,
  }: CadClienteProps) {
    const { data } = await api.post(`cadastrar-cliente`, {
      nome,
      sobrenome,
      telefone,
      cpf,
      email,
      dataNasc,
    });
    return data;
  }

  async consultClient() {
    const {data} = await api.get(`consultar-clientes`)
    return data
  }
}
