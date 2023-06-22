import React from "react";
import * as S from "./styles";

interface SchedulingProps {
  agendamentos: [
    {
      nome: string;
      data: string;
      horario: string;
      servicos: [
        {
          nome: string;
          preco: string;
          descricao: string;
        }
      ];
    }
  ];
}

export const ListItemScheduling: React.FC<SchedulingProps> = ({agendamentos}) => {
  return (
    <>
      <S.Container>
        <div className="list">
          <span>Agendamentos do dia</span>
        </div>
      </S.Container>
    </>
  );
};
