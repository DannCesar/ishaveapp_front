import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import { HomeIcon } from "../../assets/Icons/HomeIcon/HomeIcon";
import { UserIcon } from "../../assets/Icons/UserIcon/UserIcon";
import { SccisorsIcon } from "../../assets/Icons/SccissorsIcon/SccisorsIcon";
import { ScheduleIcon } from "../../assets/Icons/ScheduleIcon/ScheduleIcon";
import { SignOutIcon } from "../../assets/Icons/SignOutIcon/SignOutIcon";
import { useNavigate } from "react-router-dom";
import { UserService } from "../../services/UserService";

const userApi = new UserService();

interface LayoutProps {
  children: React.ReactNode;
  idSession: any
}

export const Layout: React.FC<LayoutProps> = ({children,props,idSession}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  useEffect(
    () => {
      //Obtendo Valor do localStorage
      const userLocalStorage = localStorage.getItem("ishaveappId");
      //Verificando se o valor existe
      if (userLocalStorage) {
        setUser(userLocalStorage);

      }
    },
    // Quando a condição do array estiver vazia,significa que quando for carregada a página será executada
    []
  );

  // Função assincrona para deletar o idSession / Valor do localstorage
  const signOut = () => {
    if(user) {
      localStorage.removeItem("ishaveappId")
      setUser("")
    }
  }
  
  const userSignOut = useCallback(async () => {
      await userApi.signOut(idSession);
      localStorage.removeItem("ishaveappId");
      setUser("");
    },
     [0]);
     
    

  return (
    <S.Container>
      <S.NavigationLayout>
        <h2>IShaveApp</h2>
        <div className="navigation">
          <HomeIcon onClick={() => navigate(`/`)} />
          Inicio
        </div>
        <div className="navigation">
          <UserIcon onClick={() => {}} />
          Clientes
        </div>
        <div className="navigation">
          <SccisorsIcon onClick={() => {}} />
          Serviços
        </div>
        <div className="navigation">
          <ScheduleIcon onClick={() => {}} />
          Agendamento
        </div>
      </S.NavigationLayout>
      <S.Sidebar>
        <S.AvatarContainer />
        <div className="nameUserContainer">
          <h3>Nome do usuário</h3>
        </div>
        <div className="signOutContainer">
          <SignOutIcon onClick={() => userSignOut} />
        </div>
      </S.Sidebar>
      <S.ContentContainer {...props}>
        <div>{children}</div>
      </S.ContentContainer>
    </S.Container>
  );
};
