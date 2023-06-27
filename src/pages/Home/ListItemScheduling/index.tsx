import React from "react";
import * as S from "./styles";

interface SchedulingProps {
  agendamentos: {
    nome: string;
    data: string;
    horario: string;
    servicos: {
      nome: string;
      preco: string;
      descricao: string;
    };
  };
}

export const ListItemScheduling: React.FC<SchedulingProps> = ({
  agendamentos,
}) => {
  const { nome, data, horario, servicos } = agendamentos;
  return (
    <>
      <S.Container>
        <div className="list">
          <span>{nome}</span>
          <span>{data}</span>
          <span>{horario}</span>
          <span>{servicos?.[0]?.preco}</span>
        </div>
      </S.Container>
    </>
  );
};
