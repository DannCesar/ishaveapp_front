import React from "react";
import * as S from "./styles";
import { UserIcon } from "../../../assets/Icons/UserIcon/UserIcon";
import { ClientService } from "../../../services/ClientService";
import { TrashIcon } from "../../../assets/Icons/TrashIcon/TrashIcon";

const clientApi = new ClientService();

interface CardProps {
  onClick(idCliente:number): void;
  clientSelected:number;
  cliente: {
    idCliente: number;
    nomeCliente: string;
    telCliente: number;
    cpfCliente: number;
    emailCliente: string;
  };
}

export const CardClient: React.FC<CardProps> = ({ clientSelected,onClick,cliente }) => {
  const { nomeCliente, cpfCliente, telCliente, emailCliente } = cliente;

  const handleDeleteClient = async () => {
    try {
      await clientApi.deleteClient(cliente.idCliente);
      location.reload()
      alert("Cliente deletado com sucesso.")
    } catch (error) {
      alert("Não foi possível deletar o cliente");
    }
  };
  return (
    <>
      <S.Container isSelected={clientSelected === cliente.idCliente} onClick={() => onClick(cliente.idCliente) }>
        <div className="userContainer">
          <UserIcon onClick={() => {}} />
        </div>
        <div className="spanContainer">
          <span>
            Nome: <span>{nomeCliente}</span>
          </span>
          <span>
            CPF: <span>{cpfCliente}</span>
          </span>
          <span>
            Telefone: <span>{telCliente}</span>
          </span>
          <span>
            Email:<span>{emailCliente}</span>
          </span>
        </div>
        <div className="trashContainer">
          <TrashIcon onClick={() =>{handleDeleteClient()}}/>
        </div>
      </S.Container>
    </>
  );
};
