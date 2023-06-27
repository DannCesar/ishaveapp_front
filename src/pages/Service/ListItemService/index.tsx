import React from "react";
import * as S from "./styles";
import { RegisterService } from "../../../services/RegisterService";
import { useQuery } from "react-query";
import { TrashIcon } from "../../../assets/Icons/TrashIcon/TrashIcon";

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
    const handleDeleteService = async () => {
      try{
        await serviceApi.deleteService(servico.idServico)
        location.reload()
        alert("Servico deletado com sucesso.")
      }catch(error){
        alert("Não foi possível deletar o serviço.")
      }
    }
  return (
    <>
      <S.Container>
        <div className="list">
          <span>{nomeServico}</span>
          <span>R$ {precoServico} </span>
          <span>{categoriaServico}</span>
          <span>{descricaoServico}</span>
          <TrashIcon onClick={() => {handleDeleteService()}}/>
        </div>
      </S.Container>
    </>
  );
};
