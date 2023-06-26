import { api } from "./api";

interface CadClienteProps {
  nome: string;
  sobrenome: string;
  telefone: string;
  cpf: string;
  email: string;
}

export class ClientService {
  async cadClient({
    nome,
    sobrenome,
    telefone,
    cpf,
    email,
  }: CadClienteProps) {
    const { data } = await api.post(`cadastrar-cliente`, {
      nome,
      sobrenome,
      telefone,
      cpf,
      email,
    });
    return data;
  }

  async consultClient() {
    const {data} = await api.get(`consultar-clientes`)
    return data
  }
}
