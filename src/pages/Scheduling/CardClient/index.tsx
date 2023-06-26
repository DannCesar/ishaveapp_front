import React from "react";
import * as S from "./styles";
import { UserIcon } from "../../../assets/Icons/UserIcon/UserIcon";


interface CardProps {
  cliente: {
    idCliente: string;
    nomeCliente: string;
    telCliente: number;
    cpfCliente: number;
    emailCliente: string;
  };
}

export const CardClient: React.FC<CardProps> = ({ cliente }) => {
  const { nomeCliente, cpfCliente, telCliente, emailCliente } = cliente;
  
  return (
    <>
      <S.Container>
        <div className="userContainer">
        <UserIcon onClick={() => {}}/>

        </div>
        <div className="spanContainer">
          <span>
            Nome: <span>{nomeCliente}</span>
          </span>
          <span>
            CPF: <span>{cpfCliente}</span></span>
          <span>Telefone: <span>{telCliente}</span></span>
          <span>Email:<span>{emailCliente}</span></span>
        </div>
      </S.Container>
    </>
  );
};
