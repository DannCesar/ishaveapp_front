import React from "react";
import * as S from "./styles"
import { AvatarContainer } from "../Layout/styles";

export const CardClient: React.FC = () =>{

    return (
      <>
        <S.Container>
          
            <S.AvatarContainer />
            <div className="spanContainer">
              <span>nomeCliente</span>
              <span>cpfCliente</span>
              <span>telCliente</span>
              <span>emailCliente</span>
              <span>dataNascCliente</span>
            </div>
          
        </S.Container>
      </>
    );
}