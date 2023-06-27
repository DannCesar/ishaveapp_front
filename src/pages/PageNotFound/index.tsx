import React from "react";
import * as S from "./styles";
import Logo from "../../assets/artIShave/logoIshave.png";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router";

export const PageNotFound: React.FC = () => {
    const navigate = useNavigate()
  return (
    <>
      <S.Container>
        <S.InfoContainer>
          <div>
            <h3>Error404</h3>
            <span>Página não encontrada!</span>
          <div className="btnContainer">
            <Button onClick={() => navigate(-1)}>Voltar</Button>
          </div>
          </div>
        </S.InfoContainer>
        <S.LogoContainer>
          <div className="logoContainer">
            <img src={Logo} alt="logotipo IShaveApp" />
          </div>
        </S.LogoContainer>
      </S.Container>
    </>
  );
};
