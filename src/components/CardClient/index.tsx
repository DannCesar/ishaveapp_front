import React from "react";
import * as S from "./styles"
import { AvatarContainer } from "../Layout/styles";

export const CardClient: React.FC = () =>{

    return (
      <>
        <S.Container>
          
            <S.AvatarContainer />
            <div className="spanContainer">
              <span>Nome:<span>nomeCliente</span></span>
              <span>CPF:<span>cpfCliente</span></span>
              <span>Telefone:<span>telCliente</span></span>
              <span>Email:<span>emailCliente</span></span>
            </div>
          
        </S.Container>
      </>
    );
}