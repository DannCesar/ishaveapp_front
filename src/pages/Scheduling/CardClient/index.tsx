import React from "react";
import * as S from "./styles";
import { AvatarContainer } from "../../../components/Layout/styles";

interface CardProps {
  cliente: {
    idCliente: string;
    nomeCliente: string;
    telCliente: number;
    cpfCliente: number;
    emailCliente: string;
    dataNascCliente: string;
  };
}

export const CardClient: React.FC<CardProps> = ({ cliente }) => {
  const { nomeCliente, cpfCliente, telCliente, emailCliente } = cliente;
  return (
    <>
      <S.Container>
        <S.AvatarContainer />
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
