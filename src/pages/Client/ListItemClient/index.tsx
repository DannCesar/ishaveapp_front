import React from "react";
import * as S from "./styles";
interface ClientProps {
  cliente: {
    idCliente: number;
    nomeCliente: string;
    telCliente: string;
    cpfCliente: string;
    emailCliente: string;
    dataNascCliente: string;
  };
}

export const ListItemClient: React.FC <ClientProps>= ({cliente}) => {
    const{
        nomeCliente,
        telCliente,
        cpfCliente,
        emailCliente,
        dataNascCliente
    } = cliente
  return (
    <>
      <S.Container>
        <div className="list">
          <span>Cliente</span>
          <span>{nomeCliente}</span>
          <span>Telefone</span>
          <span>{telCliente}</span>
          <span>Email</span>
          <span>{emailCliente}</span>
          <span>Data de Nascimento</span>
          <span>{dataNascCliente}</span>
        </div>
      </S.Container>
    </>
  );
};
