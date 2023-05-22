import React from "react";
import * as S from "./styles";
import { HomeIcon } from "../../assets/Icons/HomeIcon/HomeIcon";
import { UserIcon } from "../../assets/Icons/UserIcon/UserIcon";
import { SccisorsIcon } from "../../assets/Icons/SccissorsIcon/SccisorsIcon";
import { ScheduleIcon } from "../../assets/Icons/ScheduleIcon/ScheduleIcon";
import { SignOutIcon } from "../../assets/Icons/SignOutIcon/SignOutIcon";

export const Layout: React.FC = () => {
  return (
    <S.Container>
      <S.NavigationLayout>
        <h2>IShaveApp</h2>
        <HomeIcon />
        <UserIcon />
        <SccisorsIcon />
        <ScheduleIcon />
      </S.NavigationLayout>
      <S.Sidebar>
        <S.AvatarContainer/>
        <div className="nameUserContainer">
          <h3>Nome do usuário</h3>
        </div>
        <div className="signOutContainer">
          <SignOutIcon />
        </div>
      </S.Sidebar>
      <S.ContentContainer>
            <div className="baseLeftContainer"/>
            
      </S.ContentContainer>
    </S.Container>
  );
};
