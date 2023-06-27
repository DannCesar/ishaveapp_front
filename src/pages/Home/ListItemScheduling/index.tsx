import React from "react";
import * as S from "./styles";
import { TrashIcon } from "../../../assets/Icons/TrashIcon/TrashIcon";
import { SchedulingService } from "../../../services/SchedulingService";

const schedulingApi = new SchedulingService()

interface SchedulingProps {
  agendamentos: {
    nome: string;
    data: string;
    idA: number;
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
  const handleDeleteScheduling = async () => {
   
    try {
      
      await schedulingApi.deleteScheduling(agendamentos.idA);
      alert("Agendamento deletado com sucesso.")
      location.reload()
    } catch (error) {
      alert("Não foi possível deletar o agendamento");
    }
  };
  console.log(agendamentos)
  return (
    <>
      <S.Container>
        <div className="list">
          <span>{nome}</span>
          <span>{data}</span>
          <span>{horario}</span>
          <span>R$ {servicos?.[0]?.preco}</span>
          <TrashIcon onClick={() => {handleDeleteScheduling()}}/>
        </div>
      </S.Container>
    </>
  );
};
