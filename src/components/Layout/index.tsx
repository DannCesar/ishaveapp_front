import React from "react";
import * as S from "./styles";
import { HomeIcon } from "../../assets/Icons/HomeIcon/HomeIcon";
import { UserIcon } from "../../assets/Icons/UserIcon/UserIcon";
import { SccisorsIcon } from "../../assets/Icons/SccissorsIcon/SccisorsIcon";
import { ScheduleIcon } from "../../assets/Icons/ScheduleIcon/ScheduleIcon";
import { SignOutIcon } from "../../assets/Icons/SignOutIcon/SignOutIcon";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <S.Container>
      <S.NavigationLayout>
        <h2>IShaveApp</h2>
        <div className="navigation">
          <HomeIcon />
          Inicio
        </div>
        <div className="navigation">
          <UserIcon />
          Clientes
        </div>
        <div className="navigation">
          <SccisorsIcon />
          Serviços
        </div>
        <div className="navigation" >
          <ScheduleIcon />
          Agendamento
        </div>
      </S.NavigationLayout>
      <S.Sidebar>
        <S.AvatarContainer />
        <div className="nameUserContainer">
          <h3>Nome do usuário</h3>
        </div>
        <div className="signOutContainer">
          <SignOutIcon />
        </div>
      </S.Sidebar>
      <S.ContentContainer></S.ContentContainer>
    </S.Container>
  );
};
