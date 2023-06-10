import React from "react";
import * as S from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export const ConfirmEmail: React.FC = () => {
    const navigate = useNavigate()
  return (
    <>
      <S.Container>
        <S.ConfirmEmailModal>
          <div className="infoModal">
            <h3>Email confirmado com sucesso!</h3>
          </div>
          <div className="btnContainer">
            <Button model="alternative" onClick={() => navigate('/')}>Acessar login</Button>
          </div>
        </S.ConfirmEmailModal>
      </S.Container>
    </>
  );
};
