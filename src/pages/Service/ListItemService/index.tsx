import React from "react";
import * as S from "./styles";
import { RegisterService } from "../../../services/RegisterService";
import { useQuery } from "react-query";

const serviceApi = new RegisterService();

interface ListItemServiceProps {
  servico: {
    categoriaServico: string;
    descricaoServico: string;
    empresaId: number;
    idServico: number;
    nomeServico: string;
    precoServico: string;
  };
}

export const ListItemService: React.FC<ListItemServiceProps> = ({
  servico,
}) => {
  const { categoriaServico, descricaoServico, nomeServico, precoServico } =
    servico;
  return (
    <>
      <S.Container>
        <div className="list">
          <span>{nomeServico}</span>
          <span>{precoServico}</span>
          <span>{categoriaServico}</span>
          <span>{descricaoServico}</span>
        </div>
      </S.Container>
    </>
  );
};
